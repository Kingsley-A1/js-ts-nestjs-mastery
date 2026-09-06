# 📚 Day 24: Generics Advanced — Complete Notes

**Date:** May 19, 2026
**Topic:** Constraints (`T extends`), `keyof`, and Utility Type Patterns

---

## 🎯 Knowledge Priority System

> New learning protocol adopted from Day 24 onwards.

| Tier | Label | Meaning | Action |
|------|-------|---------|--------|
| 🔴 | **By Heart** | Indispensable — you MUST be able to write this from memory | Type it, erase it, retype it |
| 🟡 | **Good to Know** | Useful, but easily outsourced to docs or AI when needed | Understand the concept, look up the syntax |
| 🔵 | **Recognize** | Just know it exists — look it up if you ever need it | Skim once, don't practice |

---

## 🔴 BY HEART — Constraints (`T extends`)

### The One-Sentence Upgrade from Day 23

> Day 23: `<T>` = T can be **anything**.
> Day 24: `<T extends Shape>` = T can be anything, **as long as it has these properties**.

That's it. That's the entire leap. A constraint is a **guardrail on the slot**.

### The Problem Without Constraints

```ts
function printName<T>(item: T): void {
  console.log(item.name); // ❌ Error: Property 'name' does not exist on type T
}
```

TypeScript complains because `T` could be `number`, `boolean`, or anything — and those don't have `.name`. You need to **promise** that `T` will always have a `name`.

### The Fix: `T extends`

```ts
function printName<T extends { name: string }>(item: T): void {
  console.log(item.name); // ✅ Safe — T is guaranteed to have `name`
}

printName({ name: "Kingsley", age: 25 });    // ✅ Has 'name'
printName({ name: "NestJS", version: 10 });  // ✅ Has 'name'
printName({ id: 1 });                        // ❌ Missing 'name'
```

**Mental Model:** The constraint `extends { name: string }` is like telling the Entrance Guard: *"Let anyone in, but they MUST be wearing a name badge."*

### Constraining to an Interface

```ts
interface HasId {
  id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}
```

Any type with an `id: number` property works. Users, Products, Orders — one function serves them all.

---

## 🔴 BY HEART — `keyof` (Get the Keys of a Type)

`keyof` takes a type and returns a **union of its property names** as strings.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User; // "id" | "name" | "email"
```

### The Power Move: `keyof` + Generics

This is the pattern that makes utility functions possible:

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Kingsley", email: "king@dev.com" };

getProperty(user, "name");    // ✅ Returns string
getProperty(user, "id");      // ✅ Returns number
getProperty(user, "address"); // ❌ Error: "address" is not a key of User
```

**Reading it aloud:** *"T is any object. K is any key that actually exists on T. The return type is whatever type that key holds."*

---

## 🔴 BY HEART — Constrained Transformer (Day 23 Upgrade)

The `transform` function from Day 23 accepts **anything**. Now we add a constraint so only arrays of objects with an `id` can be transformed:

```ts
interface Identifiable {
  id: number;
}

function transformEntities<T extends Identifiable, U>(
  entities: T[],
  fn: (entity: T) => U
): U[] {
  return entities.map(fn);
}

// ✅ Works — Users have `id`
const userNames = transformEntities(
  [{ id: 1, name: "King" }, { id: 2, name: "Alice" }],
  (user) => user.name
);

// ❌ Fails — plain strings don't have `id`
// transformEntities(["hello", "world"], s => s.length);
```

---

## 🔴 BY HEART — Constrained Stack (Day 23 Upgrade)

The `Stack<T>` from Day 23 accepts anything. Now we constrain it so the Stack only holds items that can be serialized (have a `toString` method):

```ts
interface Serializable {
  toString(): string;
}

class SafeStack<T extends Serializable> {
  private items: T[] = [];

  push(item: T): void { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
  peek(): T | undefined { return this.items[this.items.length - 1]; }

  // NEW: Only possible because of the constraint
  printTop(): string {
    const top = this.peek();
    return top ? top.toString() : "Stack is empty";
  }
}
```

**Why the constraint matters:** Without `T extends Serializable`, calling `top.toString()` would be unsafe because `T` could be anything.

---

## 🟡 GOOD TO KNOW — Generic Defaults

You can give `T` a default type, just like default function parameters:

```ts
interface ApiResponse<T = null> {
  success: boolean;
  data: T;
  message: string;
}

// No need to write <null> — it defaults
const errorResponse: ApiResponse = {
  success: false,
  data: null,
  message: "Not found"
};

// Override the default when you have data
const userResponse: ApiResponse<User> = { ... };
```

---

## 🟡 GOOD TO KNOW — Multiple Constraints

You can require `T` to satisfy multiple shapes using `&`:

```ts
interface HasName { name: string; }
interface HasAge  { age: number;  }

function greet<T extends HasName & HasAge>(person: T): string {
  return `Hello ${person.name}, you are ${person.age} years old`;
}
```

---

## 🔵 RECOGNIZE — `infer` (Advanced Pattern Extraction)

`infer` lets TypeScript **deduce** a type from inside another type. You will rarely write this yourself, but you'll see it in library code.

```ts
// "If T is a Promise of something, extract that something"
type Unwrap<T> = T extends Promise<infer U> ? U : T;

type A = Unwrap<Promise<string>>;  // string
type B = Unwrap<Promise<number>>;  // number
type C = Unwrap<boolean>;          // boolean (not a Promise, returns as-is)
```

> **Action:** Don't memorize `infer`. Just know it exists for when you see it in NestJS source code or advanced utility types.

---

## 🧠 Mental Model Summary

| Day 23 | Day 24 | What Changed |
|--------|--------|-------------|
| `<T>` — open slot | `<T extends X>` — slot with guardrail | Added a minimum requirement |
| `transform<T, U>` | `transformEntities<T extends HasId, U>` | T must have `id` |
| `Stack<T>` | `SafeStack<T extends Serializable>` | T must have `toString()` |
| No key access | `keyof T` + `K extends keyof T` | Safe property access |

---

## ✅ Day 24 Checklist

- [ ] 🔴 Write a constrained generic function (`T extends { ... }`)
- [ ] 🔴 Use `keyof` to get the keys of a type
- [ ] 🔴 Write `getProperty<T, K extends keyof T>`
- [ ] 🔴 Upgrade Day 23's Transformer with a constraint
- [ ] 🔴 Upgrade Day 23's Stack with a constraint
- [ ] 🟡 Know how to give a generic a default type
- [ ] 🟡 Know how to combine constraints with `&`
- [ ] 🔵 Recognize `infer` when you see it

---

**Next Up → Day 25: Classes in TypeScript** (`public`, `private`, `readonly`) 🚀
