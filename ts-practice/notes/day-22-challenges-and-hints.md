# 🏋️ Day 22: Functions & Types — Challenges & Hints

**Date:** May 10, 2026
**Rules:** Type every line manually in `day-22-challenge-solutions.ts`.

---

## ⚔️ Challenge 1: The Basic Factories (Arrow vs Regular)

**Mission:** Write the exact same logic using both function styles.

**Requirements:**
1. Write a *regular* function `multiply` that takes two `number`s and returns a `number`.
2. Write an *arrow* function `divide` that takes two `number`s and returns a `number`.
3. Call both functions and log the results.

---

> 💡 **Hint:** Regular: `function name(a: type): type { ... }`. Arrow: `const name = (a: type): type => { ... }`.

---

## ⚔️ Challenge 2: The Optional VIP

**Mission:** Build a greeting system that handles optional parameters.

**Requirements:**
1. Write a function `createGreeting` that takes:
   - `name` (string)
   - `isVIP` (boolean, **optional**)
2. The function must return a `string`.
3. If `isVIP` is true, return `"Welcome to the VIP lounge, [name]!"`.
4. If `isVIP` is missing or false, return `"Welcome, [name]."`.

---

> 💡 **Hint:** Remember that optional parameters use `?` and must be the LAST parameter in the list. Inside the function, `isVIP` could be `undefined`.

---

## ⚔️ Challenge 3: The Default Database Paginator

**Mission:** Build a pagination helper (very common in backend APIs).

**Requirements:**
1. Write an arrow function `fetchUsers` that takes:
   - `page` (number)
   - `limit` (number, **default** is 10)
2. Return a `string` simulating the DB query, e.g., `"Fetching page 1 with limit 10"`.
3. Call it *without* providing the limit.
4. Call it *with* a custom limit of 50.

---

> 💡 **Hint:** Default parameters look like this: `limit: number = 10`. You don't use `?` when you use `=`.

---

## ⚔️ Challenge 4: The Action Hero (Void)

**Mission:** Create a function that performs an action but returns nothing.

**Requirements:**
1. Write a function `sendEmailAlert` that takes an `emailAddress` (string) and a `message` (string).
2. The return type MUST be explicitly `void`.
3. Inside the function, just `console.log` a simulated sending message: `"[EMAIL SENT TO] king@dev.com: System is down!"`.

---

> 💡 **Hint:** If you try to write `return "done";` inside a `void` function, TypeScript will scream at you. Let it scream, then fix it!

---

## ⚔️ Challenge 5: The NestJS DTO Simulator (Boss Challenge)

**Mission:** Pass a packed box (Object) instead of 5 individual parameters.

**Requirements:**
1. Create an `interface CreateProductDto` with:
   - `name` (string)
   - `price` (number)
   - `inStock` (boolean)
   - `tags` (array of strings, optional)
2. Write a function `createProduct(dto: CreateProductDto): string`.
3. The function should read the properties from the `dto` object and return a success message like: `"Product 'Laptop' created for $1000"`.
4. Call the function and pass an object directly into it.

---

> 💡 **Hint:** Your function signature should look exactly like this: `function createProduct(dto: CreateProductDto): string { ... }`. Inside, use `dto.name`, `dto.price`, etc.

---

## ✅ Challenge Completion Tracker (10 Functions Total)

In your solutions file, ensure you have created at least **10 different functions** today to build pure muscle memory.

| Challenge | Description | Done? |
|-----------|-------------|-------|
| 1 | Multiply (Regular) | [ ] |
| 1 | Divide (Arrow) | [ ] |
| 2 | VIP Greeting (Optional) | [ ] |
| 3 | Paginator (Default) | [ ] |
| 4 | Email Alert (Void) | [ ] |
| 5 | DTO Simulator | [ ] |
| Extra 4 | Create 4 more random functions | [ ] |
