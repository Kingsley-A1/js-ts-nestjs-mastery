# 🏋️ Day 23: Generics Intro — Challenges & Hints

**Date:** May 12, 2026
**Rules:** Type every line manually in `day-23-challenge-solutions.ts`. No `any`. No copy-paste.
**Foundation Goal:** By the end of these challenges, Day 24 constraints should feel obvious.

---

## ⚔️ Challenge 1 — The Universal Wrapper

**Mission:** Prove you can replace 3 copy-pasted functions with 1 generic function.

**Requirements:**
1. Write a generic function `wrapInArray<T>(value: T): T[]` that wraps any single value in an array.
2. Call it with a `string`, a `number`, a `boolean`, and an object `{ name: "Kingsley" }`.
3. Log each result. Confirm that TypeScript infers the correct return types.

**Expected Output:**
```
["hello"]
[42]
[true]
[{ name: "Kingsley" }]
```

---

> 💡 **Hint 1:** The function body is just `return [value]` — one line. The entire power comes from the `<T>` declaration.

> 💡 **Hint 2:** For the object call, use type inference — don't write `<{ name: string }>` explicitly. Let TypeScript figure it out.

---

## ⚔️ Challenge 2 — The Array Inspector

**Mission:** Build two generic array utility functions from scratch.

**Requirements:**
1. `getFirst<T>(arr: T[]): T` — returns the first element of any typed array.
2. `getLast<T>(arr: T[]): T` — returns the last element of any typed array.
3. Test both with a `string[]` and a `number[]`.
4. What happens to the return type when you call `getFirst<string>([...])`? Log it and observe.

---

> 💡 **Hint 1:** To get the last element: `arr[arr.length - 1]`. You will need the `!` non-null assertion operator on the return because with strict TS, index access can be `T | undefined`. Example: `return arr[arr.length - 1]!`.

> 💡 **Hint 2:** The return type annotation (`: T`) is critical. It's what tells TypeScript: "Whatever type went in as the array, that same type comes back as a single item."

---

## ⚔️ Challenge 3 — The Key-Value Pair Factory

**Mission:** Use multiple generic type parameters `<K, V>`.

**Requirements:**
1. Write `createPair<K, V>(key: K, value: V): { key: K; value: V }` that builds a typed key-value object.
2. Create 4 different pairs:
   - `("username", "Kingsley")` → both strings
   - `("userId", 101)` → string key, number value
   - `("isAdmin", true)` → string key, boolean value
   - `(1, ["read", "write"])` → number key, string array value
3. Log all four. Hover over each in VS Code to confirm TypeScript inferred the exact types.

---

> 💡 **Hint 1:** `K` and `V` are completely independent. They do NOT have to be the same type. That's the entire point of using two separate type parameters.

> 💡 **Hint 2:** The return type `{ key: K; value: V }` is an inline object type — you don't need a separate `interface` for this. You can define the shape directly in the signature.

---

## ⚔️ Challenge 4 — The ApiResponse Factory (NestJS Core)

**Mission:** Build the most important generic pattern in backend development.

**Requirements:**
1. Define `interface ApiResponse<T>` with: `success: boolean`, `data: T`, `message: string`, `statusCode: number`.
2. Write two helper functions with correct return types:
   - `createSuccess<T>(data: T, message: string): ApiResponse<T>` — returns `{ success: true, statusCode: 200, ... }`
   - `createError(message: string, code: number): ApiResponse<null>` — returns `{ success: false, data: null, ... }`
3. Use them to create:
   - A success response wrapping a `{ id: 1, name: "Kingsley" }` user object
   - A success response wrapping a `string[]` of tags
   - An error response for a 404 Not Found

---

> 💡 **Hint 1:** `createSuccess<T>` receives `data: T` and returns `ApiResponse<T>`. Inside, the object literal must satisfy the `ApiResponse<T>` shape — TypeScript will enforce every field.

> 💡 **Hint 2:** `createError` always returns `ApiResponse<null>`. Pass `data: null` explicitly inside the function body.

> 💡 **Hint 3:** After calling `createSuccess<{ id: number; name: string }>({ id: 1, name: "Kingsley" }, "User fetched")`, hover over the result in VS Code. You should see TypeScript knows `result.data.name` exists!

---

## ⚔️ Challenge 5 — The Transformer (Boss)

**Mission:** Write a generic function that takes an array of one type and returns an array of another type.

**Requirements:**
1. Write `transform<T, U>(arr: T[], fn: (item: T) => U): U[]`
   - Takes an array of `T`
   - Takes a callback function that converts one `T` into a `U`
   - Returns an array of `U`
2. Use it for the following three transformations:
   - `string[]` → `number[]`: Convert `["hello", "world", "nestjs"]` to `[5, 5, 6]` (string lengths)
   - `number[]` → `string[]`: Convert `[1, 2, 3]` to `["Item 1", "Item 2", "Item 3"]`
   - `number[]` → `boolean[]`: Convert `[10, 0, 5, 0, 3]` to `[true, false, true, false, true]` (truthy check)

---

> 💡 **Hint 1:** The body of `transform` is just `return arr.map(fn)`. The real skill is writing the type signature correctly.

> 💡 **Hint 2:** The callback type `fn: (item: T) => U` reads: "a function that receives one item of type T and returns one item of type U." This connects directly to what you learned about function types in Day 22.

> 💡 **Hint 3:** This function is essentially a type-safe wrapper around `.map()`. After writing it, you will understand exactly how TypeScript's built-in `.map()` works internally. This is the foundation for Day 24's `infer` keyword.

---

## 🏆 Bonus — The Stack (Data Structure with Generics)

Build a simple Stack (Last-In, First-Out) data structure using a **generic class**.

```
Requirements:
- class Stack<T>
- method push(item: T): void
- method pop(): T | undefined
- method peek(): T | undefined  (look at top without removing)
- method isEmpty(): boolean
- property size: number
```

Test it with a `Stack<number>` and a `Stack<string>`.

> 💡 **Hint:** Internally, the Stack stores its items in a `private items: T[] = []`. Every method operates on this typed array.

> 💡 **Day 24 Preview:** Once you add `class Stack<T extends Comparable>`, you can enforce that only types that can be compared (sorted) go into the stack. That's exactly what constraints (`T extends`) do — and you'll learn it tomorrow!

---

## ✅ Challenge Completion Tracker

| Challenge | Description | Done? |
|-----------|-------------|-------|
| 1 | Universal Wrapper | [ ] |
| 2 | Array Inspector (getFirst, getLast) | [ ] |
| 3 | Key-Value Pair Factory | [ ] |
| 4 | ApiResponse Factory (NestJS Core) | [ ] |
| 5 | Transformer Boss | [ ] |
| Bonus | Generic Stack Class | [ ] |
