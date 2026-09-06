# 🏋️ Day 19: Interfaces — Challenges & Hints

**Date:** May 02, 2026
**Rules:** Type every line manually. No copy-paste. No `any`.

---

## ⚔️ Challenge 1 — The Base Entity Hierarchy

**Mission:** Build a clean object hierarchy using `interface` and `extends`.

**Requirements:**
1. Create an interface `BaseEntity` with:
   - `id: string`
   - `createdAt: Date`
2. Create an interface `User` that extends `BaseEntity` with:
   - `username: string`
   - `email: string`
3. Create an interface `Product` that extends `BaseEntity` with:
   - `name: string`
   - `price: number`
4. Create valid objects for both a `User` and a `Product` and log them.

---

> 💡 **Hint 1:** `interface User extends BaseEntity { ... }`. When you create the `User` object, you MUST include `id` and `createdAt` alongside the user properties.

---

## ⚔️ Challenge 2 — The Repository Contract

**Mission:** In NestJS, you often define an interface for how data should be accessed, without writing the actual database code yet. Let's build a contract!

**Requirements:**
1. Using the `User` interface from Challenge 1, define a new interface called `UserRepository`.
2. It must have the following method signatures:
   - `findById(id: string): User | undefined`
   - `save(user: User): void`
   - `delete(id: string): boolean`
3. Create a dummy object `mockUserRepository` of type `UserRepository` that implements these methods with simple `console.log` statements.

---

> 💡 **Hint 1:** Method signatures in interfaces look like this: `methodName(param: type): returnType;`
> 💡 **Hint 2:** When creating `mockUserRepository`, provide actual arrow functions or standard functions for those methods.

---

## ⚔️ Challenge 3 — Declaration Merging (The Express Trick)

**Mission:** Experience how declaration merging works, which is crucial for extending library types in backend dev.

**Requirements:**
1. Define an interface called `Request` with:
   - `url: string`
   - `method: string`
2. Imagine this is a separate file. Define `interface Request` AGAIN (do not use extends), and add:
   - `user?: User` (Use the User from Challenge 1)
3. Create an object of type `Request`. Notice how TypeScript forces you to provide `url` and `method`, but allows `user`!

---

> 💡 **Hint 1:** Just literally write `interface Request { ... }` twice. TypeScript will merge them automatically.

---

## ⚔️ Challenge 4 — Refactoring `type` to `interface`

**Mission:** Convert existing type aliases into interfaces to practice the syntax switch.

**Requirements:**
Convert this code entirely to use `interface` and `extends` instead of `type` and `&`:

```ts
type TimestampConfig = { createdAt: Date; updatedAt: Date; };
type SoftDeleteConfig = { isDeleted: boolean; deletedAt?: Date; };

type AdminSettings = TimestampConfig & SoftDeleteConfig & {
    canManageUsers: boolean;
    canManageRoles: boolean;
};
```
*Note: Make sure to instantiate an `AdminSettings` object to verify it works!*

---

## ✅ Challenge Completion Tracker

| Challenge | Description | Done? |
|-----------|-------------|-------|
| 1 | The Base Entity Hierarchy | [ ] |
| 2 | The Repository Contract | [ ] |
| 3 | Declaration Merging | [ ] |
| 4 | Refactoring `type` to `interface`| [ ] |
