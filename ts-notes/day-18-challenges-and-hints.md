# 🏋️ Day 18: Objects & Type Aliases — Challenges & Hints

**Date:** April 11, 2026
**Rules:** Type every line manually. No copy-paste. No `any`.

---

## ⚔️ Challenge 1 — Build the Core Data Models

**Mission:** Define 5 type aliases that will form the backbone of a real backend system.

**Requirements:**
1. `type User` — `id (readonly)`, `username`, `email`, `role: "admin" | "editor" | "viewer"`, `isActive`, `createdAt (readonly)`
2. `type Product` — `id (readonly)`, `name`, `price`, `category`, `tags: string[]`, `inStock`, `description?`
3. `type Order` — `orderId (readonly)`, `userId`, `items: Product[]`, `totalAmount`, `status: "pending" | "processing" | "delivered" | "cancelled"`, `placedAt (readonly)`
4. `type Address` — `street`, `city`, `state`, `country`, `postalCode?`
5. `type UserProfile` — combine `User` AND `Address` using an intersection `&`

**Then:** Create one valid object for each type and `console.log` it.

---

> 💡 **Hint 1:** For `UserProfile`, use intersection: `type UserProfile = User & { address: Address }`. The final object must satisfy both types' required fields.

> 💡 **Hint 2:** `role: "admin" | "editor" | "viewer"` is a **Union Type inside a type alias**. TypeScript will only accept exactly those three strings.

> 💡 **Hint 3:** `tags: string[]` inside a type alias means the property holds a typed array. You already know how to do this from Day 17!

---

## ⚔️ Challenge 2 — The Shape Enforcer

**Mission:** Write functions that accept typed objects and prove TypeScript is checking the shape.

**Requirements:**
1. Using your `User` type from Challenge 1, write:
   - `function getUserDisplayName(user: User): string` → returns `"Kingsley (admin)"`
   - `function deactivateUser(user: User): User` → returns the same user with `isActive: false`
   - `function isAdmin(user: User): boolean` → returns `true` if `role === "admin"`

2. Call each function with a valid `User` object and log the results.

3. **Try to** call `getUserDisplayName` with a plain object missing a field — observe the error.

---

> 💡 **Hint 1:** `deactivateUser` returns `User` — use the spread operator to copy the object and override one field: `return { ...user, isActive: false }`.

> 💡 **Hint 2:** TypeScript will flag `{ id: 1, username: "king" }` as an invalid `User` argument because required fields like `email`, `role`, `isActive`, and `createdAt` are missing.

> 💡 **Hint 3:** When you spread into a new object (`{ ...user, isActive: false }`), TypeScript validates that the result still matches the `User` type.

---

## ⚔️ Challenge 3 — The Nested Object Deep-Dive

**Mission:** Work with nested type aliases and practice deep property access.

**Requirements:**
1. Define a `type Company`:
   ```
   type Company = {
     name: string;
     foundedYear: number;
     headquarters: Address;   // nested type from Challenge 1
     employees: User[];        // array of User objects
     isPublic: boolean;
   }
   ```
2. Create a valid `Company` object with at least 2 employees
3. Write a function `getCompanyInfo(company: Company): string` that returns:
   `"NestCorp (Founded: 2010) — HQ: Lagos, Nigeria — Staff: 2"`
4. Write a function `getActiveEmployees(company: Company): User[]` that returns only active users
5. Write a function `promoteToAdmin(company: Company, userId: number): Company` that returns a new company where the matching user has `role: "admin"`

---

> 💡 **Hint 1:** Access nested properties like: `company.headquarters.city` and `company.employees.length`.

> 💡 **Hint 2:** `getActiveEmployees` — filter the employees array: `company.employees.filter(e => e.isActive)`.

> 💡 **Hint 3:** `promoteToAdmin` — map over employees and update the matching one:
> ```ts
> const updated = company.employees.map(e =>
>   e.id === userId ? { ...e, role: "admin" as const } : e
> );
> return { ...company, employees: updated };
> ```
> The `as const` on `"admin"` tells TypeScript this is the literal string, not just any `string`.

---

## ⚔️ Challenge 4 — The API Response Wrapper

**Mission:** Build a generic `ApiResponse<T>` type and use it with different data shapes.

**Requirements:**
1. Define: `type ApiResponse<T> = { success: boolean; data: T; message: string; statusCode: number; }`
2. Write a function `createSuccessResponse<T>(data: T, message: string): ApiResponse<T>`
3. Write a function `createErrorResponse(message: string): ApiResponse<null>`
4. Use `ApiResponse<User>` to wrap a user result
5. Use `ApiResponse<Product[]>` to wrap a list of products
6. Use `ApiResponse<null>` to model a 404 error response

**Log all three responses.**

---

> 💡 **Hint 1:** The generic `<T>` in `ApiResponse<T>` is exactly what you explored on Day 16. The `data` field becomes whatever type `T` is.

> 💡 **Hint 2:** `createSuccessResponse<User>(myUser, "User fetched")` — TypeScript will enforce that `data` matches the `User` type completely.

> 💡 **Hint 3:** `createErrorResponse` always has `data: null` — so pass `ApiResponse<null>` as the return type and `null` as the data value.

---

## ⚔️ Challenge 5 — The Type Transformer (Boss Challenge)

**Mission:** Build a system that creates, updates, and archives records using type aliases only.

**Requirements:**
1. Define these three related types:
   - `type CreateUserDto` — only `username`, `email`, `password` (no id, no role, no timestamps)
   - `type UpdateUserDto` — same as `User` but ALL fields are optional (you'll use TypeScript's `Partial<>` utility — hint below)
   - `type ArchivedUser` — all `User` fields + `readonly archivedAt: Date` + `readonly archiveReason: string`

2. Write `function registerUser(dto: CreateUserDto): User` — returns a full `User` with generated `id`, default `role: "viewer"`, and `isActive: true`

3. Write `function updateUser(user: User, updates: UpdateUserDto): User` — merges updates onto the user

4. Write `function archiveUser(user: User, reason: string): ArchivedUser` — returns the user with archive metadata

5. Chain all three: register → update → archive and log the final `ArchivedUser`.

---

> 💡 **Hint 1:** `Partial<User>` automatically makes ALL User properties optional. This is a **Utility Type** — you'll study them in depth on Day 27, but you can use them today:
> ```ts
> type UpdateUserDto = Partial<User>;
> ```

> 💡 **Hint 2:** In `registerUser`, generate a fake ID: `id: Math.floor(Math.random() * 1000)`. Use `new Date()` for `createdAt`.

> 💡 **Hint 3:** In `updateUser`, spread both: `return { ...user, ...updates }`. TypeScript validates the result is still a valid `User`.

> 💡 **Hint 4:** `ArchivedUser` is an intersection: `type ArchivedUser = User & { readonly archivedAt: Date; readonly archiveReason: string; }`.

---

## 🏆 Bonus — Index Signatures (Dynamic Keys)

Sometimes you don't know the exact property names upfront (e.g., a config map or a key-value store).

```ts
type Config = {
  [key: string]: string | number | boolean;
};
```

**Challenge:** 
1. Define the `Config` type above
2. Create a `appConfig: Config` with at least 5 key-value pairs (mixed types)
3. Write a function `getConfigValue(config: Config, key: string): string | number | boolean | undefined`
4. Call it with an existing key and a non-existent key

> 💡 **Hint:** The index signature `[key: string]` means any string key is allowed, but the VALUE must be `string | number | boolean`. Accessing a non-existent key returns `undefined`, which is why the return type includes `| undefined`.

---

## ✅ Challenge Completion Tracker

| Challenge | Description | Done? |
|-----------|-------------|-------|
| 1 | Build the 5 Core Data Models | [ ] |
| 2 | The Shape Enforcer (typed functions) | [ ] |
| 3 | Nested Object Deep-Dive | [ ] |
| 4 | API Response Wrapper | [ ] |
| 5 | Type Transformer (Boss) | [ ] |
| Bonus | Index Signatures | [ ] |
