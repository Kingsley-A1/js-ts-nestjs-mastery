# 📚 Day 21: REST DAY — Week 3 Review & Consolidation

**Date:** May 04, 2026
**Topic:** Full review of Days 15–20 (TypeScript Basics Week)

> This is NOT a passive day. A REST day means you stop learning *new* material
> and **actively reinforce** everything you've absorbed this week.
> Write code from memory. Break things. Fix them. That's how it sticks.

---

## 🗺️ Week 3 At a Glance

```
┌────────────────────────────────────────────────────────────────┐
│                  WEEK 3: TYPESCRIPT BASICS                     │
├────────┬─────────────────────────┬────────────────────────────┤
│ Day 15 │ Why TypeScript?         │ Setup, tsconfig, tsc       │
│ Day 16 │ Basic Types             │ string, number, boolean    │
│ Day 17 │ Arrays & Tuples         │ string[], [string, number] │
│ Day 18 │ Objects & Type Aliases  │ type User = { ... }        │
│ Day 19 │ Interfaces              │ interface, extends         │
│ Day 20 │ Union & Literal Types   │ "a" | "b", typeof guards   │
│ Day 21 │ REST / REVIEW           │ Flashcards + JSON Exercise │
└────────┴─────────────────────────┴────────────────────────────┘
```

---

## 🧠 Section 1: Mental Model Re-Runs

Before reading the flashcards, ask yourself these questions out loud,
then check the answers below.

### Day 15 — Why TypeScript?
**Q: What does TypeScript do that JavaScript cannot?**
> A: TypeScript adds **static type checking** at compile time. It catches type
> mismatches, missing properties, and invalid function calls *before* the code
> ever runs. JavaScript discovers these errors at runtime — often in production.

**Q: What does `tsc` do?**
> A: The TypeScript Compiler (`tsc`) takes your `.ts` files and **transpiles**
> them into plain `.js` files that Node.js or the browser can execute.
> TypeScript itself never runs in the engine — only the compiled JS does.

**Q: What is `tsconfig.json` for?**
> A: It is the central configuration file for the TS compiler. It controls
> things like: which files to compile (`include`), how strict to be (`strict`),
> which JS version to output (`target`), and where to put compiled files
> (`outDir`).

---

### Day 16 — Basic Types
**Q: Name every primitive type in TypeScript.**
> A: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.

**Q: What is the difference between `unknown` and `any`?**
> A: `any` disables type checking entirely — TypeScript trusts you blindly.
> `unknown` is safer: the value might be *anything*, but you **must narrow
> the type** (with `typeof` or `instanceof`) before you use it.
> Rule: prefer `unknown` over `any` wherever possible.

**Q: When does TypeScript infer a type vs when do you annotate it?**
> A: TypeScript **infers** the type when you initialize a variable with a value.
> `const name = "Kingsley"` — TS infers `string`.
> You annotate when: declaring without initializing, writing function params,
> or when inference would be too wide (e.g., `let x;` → TS infers `any`).
> COME BACK TO THIS LATER
---

### Day 17 — Arrays & Tuples
**Q: What is the difference between `string[]` and `[string, number]`?**
> A: `string[]` is an array of **any length** containing only strings.
> `[string, number]` is a **tuple** — exactly 2 elements, the first must be
> a string and the second a number. Order and length are fixed.

**Q: How do you type a read-only array?**
> A: `readonly string[]` or `ReadonlyArray<string>`. Neither `.push()` nor
> `.pop()` will compile — TypeScript prevents mutation.

**Q: What does `.map()` return on a typed array?**
> A: It returns a new array. TypeScript infers the return type from the
> callback's return type. `numbers.map(n => n.toString())` returns `string[]`.

---

### Day 18 — Objects & Type Aliases
**Q: What does the `?` on a property mean?**
> A: The property is **optional**. The object may or may not include it.
> If it is absent, its value is `undefined`.

**Q: What does `readonly` on a property mean?**
> A: The property can be set when the object is created, but TypeScript will
> **refuse to compile any code that tries to reassign it** afterwards.
> This is perfect for database IDs, timestamps, and immutable config values.

**Q: What is an intersection type (`&`) and when do you use it?**
> A: `&` merges two or more types into one. The result must satisfy ALL the
> combined types simultaneously. Use it to compose types from smaller, reusable
> "mixin" types (e.g., `User & Timestamps & SoftDelete`).

---

### Day 19 — Interfaces
**Q: What is the #1 feature that `interface` has that `type` does not?**
> A: **Declaration Merging.** You can define the same interface name more than
> once, and TypeScript merges them. This is how libraries let you extend their
> types (e.g., adding a `user` property to Express's `Request`).

**Q: How does `interface` extend another interface?**
> A: With the `extends` keyword: `interface Admin extends User { ... }`.
> Multiple interfaces can be extended: `interface X extends A, B, C { ... }`.

**Q: In NestJS, you inject `interface UserRepository`, not a class. Why?**
> A: Dependency Injection works against the *contract* (the interface), not the
> *implementation* (the class). This means you can swap the real database
> repository for a mock repository in tests — as long as both satisfy the
> same interface, the service doesn't know or care.

---

### Day 20 — Union & Literal Types
**Q: What does `string | number` mean?**
> A: The value can be *either* a `string` *or* a `number`. You cannot call
> string-only methods on it without first narrowing the type.

**Q: What is Type Narrowing and how do you do it?**
> A: Narrowing is the act of making a broad type more specific inside a code
> branch. The most common tool is `typeof`:
> ```ts
> if (typeof value === "string") {
>   // here, value is definitely a string
> }
> ```
> Other narrowing tools: `instanceof`, `in` operator, discriminant checks.

**Q: What is a Discriminated Union?**
> A: A pattern where multiple object types share one **literal type property**
> (the discriminant) that uniquely identifies each shape:
> ```ts
> type A = { kind: "circle"; radius: number }
> type B = { kind: "square"; side: number }
> type Shape = A | B;
> ```
> By checking `shape.kind`, TypeScript can narrow to the exact sub-type.

---

## 🃏 Section 2: Flashcard Deck (All 20 Cards)

Test yourself: cover the right column, guess the answer, then check.
 
| # | Question | Answer |
|---|----------|--------|
| 1 | What keyword creates a Type Alias? | `type` |
| 2 | What keyword creates an Interface? | `interface` |
| 3 | How do interfaces inherit from each other? | `extends` |
| 4 | How do type aliases combine? | Intersection `&` |
| 5 | What does `?` on a property mean? | Optional — may be `undefined` |
| 6 | What does `readonly` on a property do? | Prevents reassignment after creation |
| 7 | What is a tuple? | Fixed-length, fixed-type array |
| 8 | Can `interface` represent a Union (`A \| B`)? | ❌ No — only `type` can |
| 9 | What is Declaration Merging? | Defining the same `interface` twice; TS merges them |
| 10 | `unknown` vs `any` — which is safer? | `unknown` — you must narrow before using |
| 11 | What is Type Narrowing? | Proving to TS what a type is inside a branch |
| 12 | What tool narrows primitive unions? | `typeof value === "string"` |
| 13 | What is a Literal Type? | A type that is one exact value, e.g., `"admin"` |
| 14 | What is a Discriminated Union? | Objects with a shared literal property used for narrowing |
| 15 | What does `tsc --noEmit` do? | Type-checks without producing JS output files |
| 16 | What is `Partial<T>`? | Makes all props of `T` optional |
| 17 | What is a type guard? | A runtime check that narrows a TypeScript type |
| 18 | Name a narrowing technique other than `typeof` | `instanceof`, `in`, discriminant checks |
| 19 | `string[]` vs `Array<string>` — are they different? | ❌ No — they are identical |
| 20 | Which is preferred for NestJS DTOs: `type` or `interface`? | `interface` (conventional, extensible) |

---

## ⚠️ Section 3: Common Gotchas & Pitfalls

### Gotcha 1: Optional (`?`) is NOT the same as `| undefined`
```ts
type A = { name?: string };    // name may be absent entirely
type B = { name: string | undefined }; // name key MUST exist, but can be undefined

// ✅ Both valid for A:
const a1: A = {};
const a2: A = { name: undefined };

// ❌ Error for B — the key must be present:
// const b1: B = {};
const b2: B = { name: undefined }; // ✅ Must include the key
```

### Gotcha 2: TypeScript catches extra properties ONLY on object literals
```ts
type User = { name: string };

const u: User = { name: "King", age: 25 }; // ❌ Error — extra property

const obj = { name: "King", age: 25 };
const u2: User = obj; // ✅ No error — TypeScript relaxes on variable assignment
```
> This is called **"Excess Property Checking"** and it only fires on object literals.

### Gotcha 3: Union narrowing requires ALL paths to be handled
```ts
function process(val: string | number | boolean) {
  if (typeof val === "string") return val.length;
  if (typeof val === "number") return val * 2;
  // TS knows val MUST be boolean here — no need for a check
  return !val;
}
```

### Gotcha 4: `readonly` is compile-time only
```ts
type Config = { readonly port: number };
const cfg: Config = { port: 3000 };
// cfg.port = 4000; // ❌ TS Error

// But at runtime (in JS), the compiled code has no readonly protection.
// This is a TS fiction — it vanishes after compilation.
```

---

## 📝 Section 4: Quick Syntax Reference Card

```ts
// ── Type Alias ──────────────────────────────────────────────
type Status = "active" | "inactive";
type ID = string | number;
type User = { id: number; name: string };

// ── Interface ───────────────────────────────────────────────
interface BaseEntity { id: number; createdAt: Date; }
interface Product extends BaseEntity { name: string; price: number; }

// ── Optional & Readonly ─────────────────────────────────────
interface Config {
  readonly port: number;
  host?: string;
}

// ── Union & Literal ─────────────────────────────────────────
type Theme = "light" | "dark" | "system";
let theme: Theme = "dark";

// ── Type Narrowing ──────────────────────────────────────────
function greet(val: string | number) {
  if (typeof val === "string") {
    return val.toUpperCase();
  }
  return val.toFixed(2);
}
const gretting = greet("hello");
const gretting2 = greet(400.523232)
console.log(gretting)
console.log(gretting2)

// ── Discriminated Union ─────────────────────────────────────
type Result =
  | { state: "ok";    value: string }
  | { state: "error"; message: string };
```

---

## ✅ Day 21 Checklist

- [ ] Answer all 20 flashcard questions without looking
- [ ] Write the `type` alias syntax from memory
- [ ] Write the `interface extends` syntax from memory
- [ ] Explain `optional` vs `readonly` in your own words (out loud!)
- [ ] Explain what a Discriminated Union is and why it matters
- [ ] Complete the JSON Typing Exercise (Challenge 1 in the challenges file)
- [ ] Complete the "Write From Memory" challenges (Challenges 2 & 3)
 
---

**Next Up → Day 22: Functions & Types** (Param types, return types, overloads) 🚀
