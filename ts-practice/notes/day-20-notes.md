# 📚 Day 20: Union & Literal Types — Complete Notes

**Date:** May 02, 2026
**Topic:** `|` (Union), `"specific"` (Literal), and Type Narrowing

---

## 🎯 The Core Problem: Types Can Be Flexible

Sometimes, a value isn't just one thing. For example, an ID from a database might be a `number` (`101`), but from a URL parameter, it comes in as a `string` (`"101"`).

Instead of giving up and using `any`, TypeScript gives us **Union Types**.

---

## 🔀 Union Types (`|`)

A Union Type means "this OR that". It allows a variable to be one of multiple specified types.

```ts
let userId: string | number;

userId = 123;      // ✅ Valid
userId = "AB-456"; // ✅ Valid
// userId = true;  // ❌ Error: Type 'boolean' is not assignable to type 'string | number'.
```

### 🧠 Type Narrowing (Type Guards)
If a variable is `string | number`, you can't just use string methods on it, because it *might* be a number. You must **narrow** the type first using `typeof`.

```ts
function formatId(id: string | number) {
  if (typeof id === "string") {
    // TypeScript now knows `id` is definitely a string here
    return id.toUpperCase();
  } else {
    // TypeScript knows `id` must be a number here
    return `#${id.toFixed(0)}`;
  }
}
```

---

## 🎯 Literal Types

A Literal Type is a type that represents one exact value.

```ts
let exactString: "hello";
exactString = "hello"; // ✅
// exactString = "hi"; // ❌ Error: Type '"hi"' is not assignable to type '"hello"'.

let exactNumber: 42;
exactNumber = 42; // ✅
// exactNumber = 50; // ❌
```

On their own, Literal Types are useless. But combined with Unions, they are incredibly powerful!

---

## 💍 The Power Combo: Union + Literal Types

By combining Unions and Literals, you can restrict a variable to a specific set of allowed values. This is much safer than just using `string`.

```ts
type Role = "admin" | "editor" | "viewer";

let myRole: Role;
myRole = "admin"; // ✅
// myRole = "superadmin"; // ❌ Error: Type '"superadmin"' is not assignable to type 'Role'.
```

> **NestJS Relevance:** In a database schema, an order's status should never just be `string`. It should be `type OrderStatus = "pending" | "shipped" | "delivered"`. This prevents typos from entering your database!

---

## 📦 Discriminated Unions (Advanced & Highly Useful)

This is a pattern used to safely handle different shapes of objects. You give each object a shared Literal Type (the "discriminator").

```ts
type SuccessResponse = {
  status: "success"; // Literal type discriminator
  data: string[];
};

type ErrorResponse = {
  status: "error"; // Literal type discriminator
  errorMessage: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse) {
  // We check the discriminator
  if (response.status === "success") {
    // TypeScript knows it's a SuccessResponse!
    console.log(response.data);
  } else {
    // TypeScript knows it's an ErrorResponse!
    console.error(response.errorMessage);
  }
}
```
*This is the standard way to type Redux actions, API responses, and Complex Events.*

---

## ✅ Day 20 Checklist

- [ ] Understand that `|` means OR (Union).
- [ ] Understand Literal Types (exact string/number values).
- [ ] Use `typeof` to narrow a Union type.
- [ ] Create a custom type using Literal Unions (e.g., `"light" | "dark"`).
- [ ] Understand Discriminated Unions using a shared literal property (like `status`).

---

**Next Up → Day 21: REST DAY / REVIEW**
