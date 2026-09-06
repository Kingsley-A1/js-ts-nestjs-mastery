# 📚 Day 23: Generics Intro — Complete Notes

**Date:** May 12, 2026
**Topic:** `<T>` — Building Reusable, Type-Safe Blueprints

---

## 🎯 Start Here: The Problem Generics Solve

By now you understand the Mini-Factory (functions). You know that every parameter must have a type and every return must have a type.

Here is the problem: **What if you want to build a factory that can work with ANY type, but still stays safe?**

Look at this real pain you would have WITHOUT generics:

```ts
// You need to wrap any value in an array.
// WITHOUT generics you'd have to write THREE separate factories:
function wrapString(value: string): string[]   { return [value]; }
function wrapNumber(value: number): number[]   { return [value]; }
function wrapBoolean(value: boolean): boolean[] { return [value]; }
```

This is a **copy-paste crime**. The logic inside is identical every time — only the type changes.

**The wrong "fix" — using `any`:**
```ts
// ❌ NEVER DO THIS
function wrapAny(value: any): any[] {
  return [value];
}
// Now you've turned off the security guard entirely.
// TypeScript has no idea what comes out, so autocomplete dies.
const result = wrapAny("hello"); // result is `any[]` — useless
result[0].toUpperCase();         // TypeScript won't catch if this breaks
```

---

## 🧬 The Solution: Generics `<T>`

A **Generic** is a **Type Placeholder**. Instead of writing `string` or `number` as a fixed type, you write `T` as a reusable slot.

Think of `T` as a **label slot on a box**. The box (function) is built once. When someone uses it, they slide a label into the slot saying "this box holds strings" or "this box holds users."

### The One Factory That Replaces All Three

```ts
//  Declare the placeholder → Run
//            ↓
function wrap<T>(value: T): T[] {
  return [value];
}
```

**Reading it out loud:**
> "This is a function called `wrap`. It introduces a type placeholder called `T`. It takes in one parameter, `value`, which must be of type `T`. And it returns an array where every element is of type `T`."

**Using it:**
```ts
// TypeScript fills in T = string
const strings = wrap<string>("hello");  // Returns: string[]

// TypeScript fills in T = number
const numbers = wrap<number>(42);       // Returns: number[]

// TypeScript fills in T = boolean  
const booleans = wrap<boolean>(true);   // Returns: boolean[]
```

One factory. Zero repetition. 100% type safety.

---

## 🔑 Type Inference — TypeScript Fills In `T` Automatically

You don't always have to write `<string>` explicitly. TypeScript is smart enough to **infer** what `T` is from the value you pass in:

```ts
// Explicit — you tell TypeScript what T is
const a = wrap<string>("hello");

// Inferred — TypeScript figures it out from the argument
const b = wrap("hello");  // TypeScript sees "hello" is a string → T = string
const c = wrap(99);       // TypeScript sees 99 is a number → T = number
```

Both produce identical, fully-typed results. You'll see both styles in professional codebases.

---

## 📐 Generic Functions — The Full Patterns

### Pattern 1: Single Type Parameter

```ts
// Returns the first item of ANY typed array
function getFirst<T>(arr: T[]): T {
  return arr[0]!;
}

const firstName = getFirst<string>(["Kingsley", "Alice", "Bob"]); // string
const firstScore = getFirst<number>([98, 75, 100]);               // number
```

### Pattern 2: Multiple Type Parameters

You can use more than one placeholder. By convention: `T`, `K`, `V`, `U` are common names.

```ts
// Build a key-value pair from two independent types
function createPair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

const pair1 = createPair<string, number>("age", 25);   // [string, number]
const pair2 = createPair<number, boolean>(1, true);    // [number, boolean]
```

### Pattern 3: Generic with a Transformation

```ts
// Transform every item in an array from one type to another
function transformArray<T, U>(arr: T[], transform: (item: T) => U): U[] {
  return arr.map(transform);
}

// T = string, U = number
const lengths = transformArray(["hello", "world", "nestjs"], s => s.length);
// Result: number[] → [5, 5, 6]
```

---

## 🏗️ Generic Interfaces — Flexible Blueprints

The `<T>` pattern works on interfaces too. This is something you already touched in Day 16.

```ts
// One interface that can wrap any type of data
interface ApiResponse<T> {
  success: boolean;
  data: T;          // T = whatever the endpoint returns
  message: string;
  statusCode: number;
}

// T = User
const userResponse: ApiResponse<User> = {
  success: true,
  data: { id: 1, name: "Kingsley" },
  message: "User fetched",
  statusCode: 200,
};

// T = Product[]
const productsResponse: ApiResponse<Product[]> = {
  success: true,
  data: [{ id: 1, name: "Laptop", price: 450000 }],
  message: "Products fetched",
  statusCode: 200,
};
```

> **NestJS Relevance:** Every single API endpoint you write returns a response wrapper like this. One `ApiResponse<T>` interface covers ALL your endpoints. This is the single most important use of Generics in backend development.

---

## 🔮 Preview: What Day 24 Builds On

Tomorrow (Day 24 — Generics Advanced), you will add **Constraints** to `T`. Right now `T` is a completely open slot — it accepts literally anything.

But what if you want to say: *"T can be any type, but it MUST have a `name` property"?*

```ts
// A CONSTRAINT — T must be something that has a 'name' property
function logName<T extends { name: string }>(item: T): void {
  console.log(item.name); // Safe! TypeScript knows T has `name`
}
```

You will also learn `keyof` (get the keys of any type as a union) and `infer` (let TypeScript deduce a type from another type).

**Today's goal:** Understand the core `<T>` mechanics so deeply that constraints feel like a natural addition tomorrow.

---

## 🧠 Mental Model Summary

| Concept | Mental Model |
|--------|--------------|
| `<T>` in declaration | A **label slot** on the factory — empty until used |
| `<string>` when calling | **Sliding a label** into the slot — "this factory is for strings" |
| Type Inference | TypeScript **reading the label** from the box you hand it |
| Multiple `<T, K>` | A factory with **two label slots** — each can hold a different type |
| `ApiResponse<T>` | A **universal shipping box** that can carry any cargo inside |

---

## ❓ Comprehension Questions

Answer without looking at notes.

**Q1.** What problem does `<T>` solve? Why can't we just use `any`?

**Q2.** What is "Type Inference" in the context of generics? Write an example.

**Q3.** What does `T[]` mean as a parameter type? How is it different from `T`?

**Q4.** Why is `ApiResponse<T>` more powerful than having separate `ApiResponseForUser` and `ApiResponseForProduct` interfaces?

**Q5.** In `function createPair<K, V>(key: K, value: V): [K, V]`, what would `K` and `V` be inferred as if you called `createPair("userId", 101)`?

---

## ✅ Day 23 Checklist

- [x] Understand the copy-paste problem that generics solve
- [x] Know why `any` is NOT the solution
- [x] Declare a generic function using `<T>`
- [x] Use a generic function with explicit type argument (`<string>`)
- [x] Use a generic function with type inference (no explicit `<T>`)
- [x] Declare a generic function with multiple type parameters (`<T, K>`)
- [x] Declare a generic interface with `<T>`
- [x] Apply `ApiResponse<T>` to two different data types
- [x] Understand that Day 24 adds **Constraints** (`T extends ...`) to today's knowledge

---

**Next Up → Day 24: Generics Advanced** (`T extends`, `keyof`, `infer`) 🚀
