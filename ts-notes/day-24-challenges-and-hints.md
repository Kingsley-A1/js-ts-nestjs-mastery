# 🏋️ Day 24: Generics Advanced — Challenges & Hints

**Date:** May 19, 2026
**Rules:** Type every line manually. No `any`. No copy-paste.

---

## 🔴 BY HEART Challenges (Must master — erase and redo until effortless)

---

### ⚔️ Challenge 1 — The Constrained Printer

**Mission:** Write a function that only accepts objects with a `name` property.

**Requirements:**
1. Write `printLabel<T extends { name: string }>(item: T): string`.
2. Return `"Label: [name]"`.
3. Test with `{ name: "Kingsley", role: "dev" }` — should work.
4. Test with `{ id: 1 }` — should fail (comment it out after seeing the error).

> 💡 **Hint:** The constraint `{ name: string }` is just an inline object type. It doesn't need a separate interface.

---

### ⚔️ Challenge 2 — The Safe Property Getter

**Mission:** Build the `getProperty` function using `keyof`.

**Requirements:**
1. Write `getProperty<T, K extends keyof T>(obj: T, key: K): T[K]`.
2. Create an object: `{ brand: "Nike", price: 15000, inStock: true }`.
3. Call `getProperty(obj, "brand")` — should return `string`.
4. Call `getProperty(obj, "price")` — should return `number`.
5. Call `getProperty(obj, "color")` — should fail (comment it out).

> 💡 **Hint:** `K extends keyof T` reads: "K must be one of the actual keys of T." `T[K]` is the type that lives at that key — this is called an "indexed access type."

---

### ⚔️ Challenge 3 — The Constrained Transformer v2

**Mission:** Upgrade the Day 23 Transformer so it only works with database entities.

**Requirements:**
1. Define `interface DbEntity { id: number; createdAt: string; }`.
2. Write `transformEntities<T extends DbEntity, U>(arr: T[], fn: (item: T) => U): U[]`.
3. Create a `User` type that extends `DbEntity` (add `name` and `email`).
4. Use `transformEntities` to extract just the `name` from an array of Users.
5. Try passing a `string[]` — confirm it fails.

> 💡 **Hint:** `T extends DbEntity` means T must have *at least* `id` and `createdAt`. It can have more properties (like `name`, `email`), but the minimum is enforced.

---

### ⚔️ Challenge 4 — The Constrained Stack v2

**Mission:** Upgrade the Day 23 Stack so it only holds items that have an `id`.

**Requirements:**
1. Define `interface HasId { id: number; }`.
2. Create `class EntityStack<T extends HasId>` with: `push`, `pop`, `peek`, `size`.
3. Add a NEW method: `findById(id: number): T | undefined` — scans the internal array.
4. Test with a stack of `{ id: number; name: string }` objects.
5. Try pushing a plain `string` — confirm it fails.

> 💡 **Hint:** `findById` works because the constraint guarantees every item in `this.items` has an `id` property. Without the constraint, TypeScript wouldn't let you write `item.id`.

---

## 🟡 GOOD TO KNOW Challenges (Understand, but don't drill)

---

### ⚔️ Challenge 5 — Generic Defaults & Multiple Constraints

**Mission:** Combine two patterns in one exercise.

**Requirements:**
1. Create `interface Timestamped { createdAt: string; }`.
2. Create `interface Named { name: string; }`.
3. Write `logEntry<T extends Named & Timestamped>(item: T): string` that returns `"[createdAt] name"`.
4. Create `interface ApiResponse<T = null>` with `success`, `data: T`, `message`.
5. Declare a variable of type `ApiResponse` (no generic) — confirm `data` is `null`.
6. Declare a variable of type `ApiResponse<string>` — confirm `data` is `string`.

> 💡 **Hint 1:** `T extends A & B` means T must satisfy BOTH A and B.
> 💡 **Hint 2:** `<T = null>` is a default — it fills in when you don't specify one.

---

## 🔵 RECOGNIZE Challenge (Skim, don't drill)

---

### ⚔️ Challenge 6 — Spot the `infer` (Read-Only)

**Mission:** Read these 3 utility types and explain what they do in a comment. Do NOT try to memorize them.

```ts
// 1. Extract the return type of a function
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// 2. Extract the element type of an array
type ElementType<T> = T extends (infer U)[] ? U : T;

// 3. Unwrap a Promise
type Awaited<T> = T extends Promise<infer U> ? U : T;
```

Write a one-line comment above each explaining what it does in plain English.

> 💡 **Hint:** Read `infer` as "figure out." So `T extends Promise<infer U>` reads: "If T is a Promise, *figure out* what it's a Promise of, and call that U."

---

## ✅ Challenge Completion Tracker

| # | Challenge | Tier | Done? |
|---|-----------|------|-------|
| 1 | Constrained Printer | 🔴 By Heart | [ ] |
| 2 | Safe Property Getter (`keyof`) | 🔴 By Heart | [ ] |
| 3 | Constrained Transformer v2 | 🔴 By Heart | [ ] |
| 4 | Constrained Stack v2 | 🔴 By Heart | [ ] |
| 5 | Generic Defaults + Multi-Constraint | 🟡 Good to Know | [ ] |
| 6 | Spot the `infer` (Read-Only) | 🔵 Recognize | [ ] |
