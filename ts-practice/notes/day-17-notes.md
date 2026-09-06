# 📚 Day 17: Arrays & Tuples — Complete Notes

**Date:** April 11, 2026
**Topic:** `string[]`, `number[]`, `[string, number]` — Typed Collections

---

## 🎯 The Core Idea: Typed Collections

Yesterday you learned to brand a single value (`let age: number = 25`).
Today you learn to brand an **entire collection** of values.

The problem with untyped arrays in JavaScript:

```js
// ❌ JS allows this chaos — a mixed bag with no rules
const items = ["Kingsley", 42, true, null, undefined];
items.push({ oops: "a dog" }); // JS says nothing
```

TypeScript forces every element in a collection to obey the same type rule.

---

## 🧱 Typed Arrays — The `Type[]` Syntax

An array type is written as `Type[]` — meaning: **an array where every element must be of this type.**

```ts
// Syntax: Type[]
let names: string[] = ["Kingsley", "Alice", "Bob"];
let scores: number[] = [98, 75, 100, 60];
let flags: boolean[] = [true, false, true];

// ❌ TypeScript blocks mixing types
// names.push(42);     // Error: Argument of type 'number' is not assignable to string
// scores.push("A+");  // Error: Argument of type 'string' is not assignable to number
```

### Alternative Syntax — Generic Array `Array<Type>`

Both syntaxes are identical. The `Type[]` form is preferred in most NestJS codebases:

```ts
// These two are exactly the same:
let emails: string[] = ["a@b.com", "c@d.com"];
let emails2: Array<string> = ["a@b.com", "c@d.com"];   // Generic form
```

> **NestJS Relevance:** When a controller returns a list of users, its return type is `User[]`. When you define a DTO that accepts a list of tags, it's `string[]`. You will write these every single day.

---

## 🔑 Array Methods Stay Typed

Every standard array method respects your types:

```ts
let products: string[] = ["Laptop", "Phone", "Tablet"];

// .push() — still type-checked
products.push("Monitor");    // ✅ Fine — it's a string
// products.push(999);       // ❌ Error — 999 is not a string

// .map() — the returned array is also typed
let upperProducts: string[] = products.map(p => p.toUpperCase());
// .toUpperCase() works because TS knows each `p` is a string

// .filter() — typed result
let longNames: string[] = products.filter(p => p.length > 5);

// .find() — returns string | undefined (because it may not find anything)
let found: string | undefined = products.find(p => p === "Phone");
```

---

## 🔐 Readonly Arrays — Immutable Collections

Sometimes a list should never be mutated after creation. Use `readonly`:

```ts
const ALLOWED_ROLES: readonly string[] = ["admin", "editor", "viewer"];

// ALLOWED_ROLES.push("hacker"); // ❌ Error: Property 'push' does not exist on readonly
// ALLOWED_ROLES[0] = "god";     // ❌ Error: Index signature is read-only
```

> **NestJS Relevance:** Permission sets, allowed HTTP methods, and config whitelists should always be `readonly`.

---

## 📐 Tuples — Fixed-Length, Mixed-Type Arrays

A **Tuple** is an array where:
1. The **length** is fixed
2. The **type of each position** is fixed

This is fundamentally different from a regular array.

```ts
// Regular array: unlimited length, all same type
let scores: number[] = [90, 85, 72, 100]; // Any length, all numbers

// Tuple: exactly N elements, each position has its own type
let userEntry: [string, number] = ["Kingsley", 25];
//              position 0 ↑      position 1 ↑
//              must be string    must be number

// ❌ These all fail:
// let broken: [string, number] = [25, "Kingsley"]; // Wrong order
// let broken2: [string, number] = ["Kingsley"];    // Too few elements
// let broken3: [string, number] = ["K", 25, true]; // Too many elements
```

---

## 🏗️ Tuple — Real-World Use Cases

### 1. CSV / Spreadsheet Row

```ts
// Each row in a CSV: [id, name, email, age]
type UserRow = [number, string, string, number];

const row1: UserRow = [1, "Kingsley", "king@dev.com", 25];
const row2: UserRow = [2, "Alice", "alice@dev.com", 30];

// Destructure with named variables — tuple positions become readable
const [id, name, email, userAge] = row1;
console.log(`User #${id}: ${name} — ${email} (${userAge})`);
```

### 2. Function Returning Multiple Values

```ts
// Instead of returning an object, a tuple is clean and concise
function getMinMax(nums: number[]): [number, number] {
  return [Math.min(...nums), Math.max(...nums)];
}

const [min, max] = getMinMax([4, 1, 9, 2, 7]);
console.log(`Min: ${min}, Max: ${max}`); // Min: 1, Max: 9
```

### 3. Named Tuples (TypeScript 4.0+) — For Clarity

```ts
// Add labels to tuple positions for better readability
type Coordinate = [x: number, y: number, z: number];

const point: Coordinate = [10, 20, 5];
```

---

## 🆚 Array vs Tuple — The Decision Chart

| Question                              | Use          |
|---------------------------------------|--------------|
| Same type, variable length?           | `Type[]`     |
| Mixed types, fixed structure?         | Tuple `[A, B]` |
| A list of user names?                 | `string[]`   |
| An `[id, name]` pair from a DB?       | `[number, string]` |
| An API returning a list of products?  | `Product[]`  |
| A function returning `[data, error]`? | `[T, Error \| null]` |

---

## 🧩 Multi-Dimensional Arrays (Bonus)

```ts
// A 2D grid — an array of arrays
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][2]); // 6 — row 1, column 2
```

> **NestJS Relevance:** Bulk operations sometimes return `string[][]` (e.g., rows of CSV data). Knowing `[][]` makes this click instantly.

---

## 🧠 Mental Model Summary

| Concept        | Mental Model                                          |
|----------------|-------------------------------------------------------|
| `string[]`     | A **labelled conveyor belt** — only strings go on it |
| `number[]`     | A **number line** — only numbers allowed             |
| `readonly T[]` | A **sealed museum display** — look, don't touch      |
| `[A, B, C]`    | A **named drawer unit** — each drawer holds exactly one specific type |

---

## ❓ Comprehension Questions

Test yourself: close your notes and answer these.

**Q1.** What is the difference between `string[]` and `[string, string]`?

`string[]` is an array of strings, meaning it can take any amount of  data so far as its a string data type , while `[string, string]` is a tuple of two strings, it can take beyond two strings and you cant add new item to it unless the rules are redefined or modified
 **Q2.** Will this compile? Why or why not?
```ts
let tags: string[] = ["nestjs", "typescript"];
tags.push(100);
```

**Q3.** What does `readonly string[]` protect against?
``` ts
const vips: readonly string[] = ["Kingsley", "Alice", "Bob"]; // can't add or remove items from the array because it is readonly

vips.push("Eve"); // ❌ Error: Property 'push' does not exist on readonly
```
**Q4.** Look at this function:
```ts
function splitName(fullName: string): [string, string] {
  const parts = fullName.split(" ");
  return [parts[0], parts[1]];
}
```
What does the return type `[string, string]` guarantee that `string[]` would not?
Its guarantees that the return value is exactly two strings, while string[] guarantees that the return value is an array of strings, meaning it can take any amount of data so far as its a string data type 
**Q5.** In a NestJS service that fetches a list of users from a database, what would the correct TypeScript return type annotation look like? (Assume a `User` interface exists.)
```ts
type User = {
  id: number;
  name: string;
  email: string;
};

function getUsers(): User[] {
  // fetch users from database
  return [
    { id: 1, name: "Kingsley", email: "[EMAIL_ADDRESS]" },
    { id: 2, name: "Alice", email: "[EMAIL_ADDRESS]" },
  ];
}
```
---

## ✅ Day 17 Checklist

- [x] Declare a typed array with `Type[]` syntax
- [x] Declare a typed array with `Array<Type>` syntax
- [x] Understand why TypeScript blocks `.push()` with wrong types
- [x] Use `.map()`, `.filter()`, `.find()` on typed arrays
- [x] Use `readonly` to create an immutable array
- [x] Understand what a Tuple is and why it's different from an array
- [x] Declare a Tuple with `[string, number]` syntax
- [x] Destructure a Tuple into named variables
- [x] Know when to choose `Type[]` vs a Tuple
- [x] Type a 2D array with `number[][]`

---

```ts
const names: String[] = ('Kingsley', 'Joe', 'Vic');
const uppercaseNames: String [] = names.map(name => name.toUpperCase());
console.log(uppercaseNames);

const namesArray: Array<string> =('King', 'Bob', 'Fil');
const uppercaseNamesArray: Array<string> = (namesArray.map(n => n.toUpperCase()))
uppercaseNameArrays.push(42) //This would cause error: Type of number is not assignable to type of string
console.log(uppercaseNamesArray)

const filteredNamesArray: Array<string> = namesArray.filter(n => n === 'king' || n === 'bob');
console.log(filteredNamesArray: `No filtered names array found`)

const findNamesArray:string | undefined = namesArray.find(n => n === 'king' || n === 'bob');
console.log(findNamesArray: `No names array found`)

const immutableNames: readonly String[] = ('King', 'Bob', 'Fil')
immutableNames.push('Eve') //This would cause error: Type of number is not assignable to type of string
console.log(immutableNames)
//An Array is a collection of items with the same or different types, no specific position and lenght. 
//A tuple is an array with fixed datatype, lenght and position, it must match the defined type rule. 

const tupleWithDiffSyntax: [string, number, boolean] =('king', 1, true)

type userTuple = [string, string, number, number, boolean]: [firstName, lastName, age, id, isVerified]

const userTuple: userTuple = ['Kingsley', 'Madubugwu', 25, 50000, true]

function createUser(firstName: string, lastName: string, age: number, id: number, isVerified: boolean): userTuple {
    return [firstName, lastName, age, id, isVerified]
}
console.log(createUser('Kingsley', 'Madu', 25, 50000, true))

function getUserTuple(id: number): userTuple {
    return [firstName, lastName, age, id, isVerified]
}
console.log(getUserTuple(50000))

// Destructure a Tuple into named variables
const [firstName, lastName, age, id, isVerified] = userTuple
console.log(firstName)
console.log(lastName)
console.log(age)
console.log(id)
console.log(isVerified)

//What is destructuring under the hood
// Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
// In this case, we are unpacking the values from a tuple into distinct variables.
// The tuple is first created, then the values are unpacked into distinct variables.
// The values are unpacked in the order that they are defined in the tuple.
// The values are unpacked into distinct variables.
//Examples Below

// Know when to choose `Type[]` vs a Tuple
// Array is a collection of items with the same or different types, no specific position and lenght. 
// Tuple is an array with fixed datatype, lenght and position, it must match the defined type rule. 

**Next Up → Day 18: Objects & Type Aliases** (`type User = { name: string }`) 🚀
