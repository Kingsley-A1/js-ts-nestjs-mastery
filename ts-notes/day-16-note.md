# 📚 Day 16: Basic Types — Complete Notes

**Date:** April 11, 2026
**Topic:** `string`, `number`, `boolean` — The Three Pillars of TypeScript

---

## 🎯 The Core Idea: Why Types Exist

In plain JavaScript, a variable is a shapeshifter. It can be anything:

```js
let userId = 42;
userId = "forty-two"; // ✅ JS allows this — no complaints
userId = true;        // ✅ JS still doesn't care
```

This is exactly how bugs sneak into production. You expect a number, you get a string, and your math breaks silently.

**TypeScript solves this by branding every variable.** Once a variable is declared as a `number`, it stays a number for life. The compiler will refuse to compile if you try to change its type.

---

## 🧱 The Three Primitive Types

These are the three building blocks of every TypeScript application:

| Type      | JavaScript Equivalent | What It Stores            |
|-----------|----------------------|---------------------------|
| `string`  | `typeof x === 'string'` | Text — names, messages, emails |
| `number`  | `typeof x === 'number'` | Any number — integer or float |
| `boolean` | `typeof x === 'boolean'` | A binary flag — `true` or `false` |

---

## 1️⃣ `string` — The Text Type

```ts
// Syntax: let variableName: type = value;
let firstName: string = "Kingsley";
let greeting: string = `Hello, ${firstName}!`; // Template literals work fine

// ❌ This will FAIL at compile time — TypeScript catches it before it runs
// firstName = 42; // Error: Type 'number' is not assignable to type 'string'
```

**Key rule:** Any text — single quotes, double quotes, or backticks — is a `string`.

---

## 2️⃣ `number` — The Numeric Type

Unlike JavaScript (which has weird `NaN` and `Infinity` issues), TypeScript makes you honest about numbers:

```ts
let age: number = 25;
let price: number = 99.99;       // Floats are numbers too
let negativeScore: number = -10; // Negatives are numbers too

// ❌ You cannot assign a string to a number variable
// age = "twenty-five"; // Error: Type 'string' is not assignable to type 'number'

// ✅ Math still works perfectly
let taxedPrice: number = price * 1.075;
console.log(taxedPrice); // 107.4925
```

---

## 3️⃣ `boolean` — The True/False Flag

This is the simplest type — only two valid values:

```ts
let isLoggedIn: boolean = false;
let hasAdminAccess: boolean = true;

// ❌ These are common JS mistakes that TypeScript blocks
// isLoggedIn = 1;    // Error: Type 'number' is not assignable to type 'boolean'
// isLoggedIn = "yes"; // Error: Type 'string' is not assignable to type 'boolean'

// ✅ Boolean in an if-statement
if (isLoggedIn) {
  console.log("Welcome back!");
}
```

> **NestJS Relevance:** In a real NestJS User entity, `isAdmin: boolean` determines access to protected routes. A wrong type here (like `"true"` instead of `true`) can silently break your auth guard.

---

## 🔑 Type Inference — TypeScript Reads Your Mind

You don't always have to write the type explicitly. TypeScript is smart enough to **infer** it from the assigned value:

```ts
// TypeScript automatically knows these types
let country = "Nigeria";    // inferred as: string
let year = 2026;            // inferred as: number
let isActive = true;        // inferred as: boolean

// But once inferred, the type is LOCKED
// country = 100; // ❌ Error: TypeScript already inferred 'country' as string
```

**Rule of Thumb:**
- Use explicit types (`: string`) when declaring a variable without a value.
- Let TypeScript infer the type when you assign a value immediately.

---

## 🏗️ Real-World Application: Typing a User Object

Let's put it all together. This is the kind of shape you'll type every day in NestJS:

```ts
// A typed function signature — NestJS controllers look exactly like this
function createUserProfile(
  username: string,     // Must be text
  age: number,          // Must be a number
  isVerified: boolean   // Must be true or false
): string {             // This function MUST return a string
  return `User ${username} (Age: ${age}) | Verified: ${isVerified}`;
}

// ✅ Correct call
console.log(createUserProfile("Kingsley", 25, true));

// ❌ These all fail at compile time — not at runtime
// createUserProfile(25, "Kingsley", true);      // Wrong order
// createUserProfile("Kingsley", "25", true);    // "25" is a string, not a number
// createUserProfile("Kingsley", 25, "true");    // "true" is a string, not a boolean
```

---

## ⚠️ Common Pitfalls

### Pitfall 1: `any` — The Type-Erase Nuclear Option

```ts
let dangerous: any = "hello";
dangerous = 42;       // ✅ TypeScript allows this — you've turned off all safety
dangerous = true;     // ✅ Still allows it — any is a shapeshifter again
```

> **Never use `any` unless you have an extremely good reason.** It defeats the entire purpose of TypeScript. NestJS codebases that use `any` everywhere are a maintenance nightmare.

### Pitfall 2: `undefined` vs Typed Variables

```ts
let username: string; // Declared but NOT assigned
// console.log(username); // ❌ Error: Variable 'username' is used before being assigned
```

> TypeScript protects you from using uninitialised variables.

---

## 🧠 Mental Model Summary

Think of TypeScript types as **luggage tags at an airport**.

- `string` → "Text Only" tag — refuses to carry numbers
- `number` → "Numeric Only" tag — refuses to carry words
- `boolean` → "On/Off Switch" tag — only `true` or `false`

Once a bag is tagged, it keeps that tag forever. The compiler is the airport security guard — it won't let wrongly-tagged luggage through to production.

---

## ❓ Day 16 — Comprehension Questions

Answer these WITHOUT looking at your notes. Write your answers in a comment block in your `.ts` file.

**Question 1:**
What is the difference between these two lines? Which one is safer and why?
```ts
let a = "hello";
let b: string = "hello";
```

**Question 2:**
Will this code compile? If not, what is the exact error and how would you fix it?
```ts
let score: number = 100;
score = score + " points";
console.log(score);
```

**Question 3:**
What does TypeScript's `boolean` type protect against that plain JavaScript does not?

**Question 4:**
What is Type Inference? Write an example of a variable where TypeScript infers the type automatically (no explicit annotation).

**Question 5:**
You are building a NestJS user registration endpoint. A frontend sends this JSON:
```json
{ "username": "king99", "age": "25", "isAdmin": "false" }
```
The `age` and `isAdmin` fields are strings but your typed function expects `number` and `boolean`. Why is this a problem and what would TypeScript tell you at compile time?

---

## ✅ Day 16 Checklist

- [x] Understand why TypeScript's primitive types prevent runtime bugs.
- [x] Declare variables with explicit type annotations (`: string`, `: number`, `: boolean`).
- [x] Understand how TypeScript's Type Inference works.
- [x] Know the difference between `let x: string` and `let x = "hello"`.
- [x] Write a typed function with typed parameters AND a typed return value.
- [x] Understand why `any` is dangerous and should be avoided.
- [x] Know what `undefined` looks like when a typed variable is declared but not assigned.
- [x] Apply all three primitive types in a realistic NestJS-style function.

---

**Next Up → Day 17: Arrays & Tuples** (`string[]`, `[string, number]`) 🚀
