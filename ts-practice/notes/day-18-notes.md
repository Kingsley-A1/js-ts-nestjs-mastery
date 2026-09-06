# 📚 Day 18: Objects & Type Aliases — Complete Notes

**Date:** April 11, 2026
**Topic:** `type User = { name: string }` — Shaping Objects with Precision

---

## 🎯 The Core Problem: Untyped Objects Are a Minefield

In JavaScript, an object can have any shape at any time:

```js
// ❌ JS chaos — you can add anything, get undefined silently
const user = { name: "Kingsley" };
console.log(user.age);    // undefined — no error, just silent bugs
user.role = "admin";      // ✅ JS adds a property that never existed
```

In production, you receive JSON from a frontend, from a database, or from a third-party API.
**If you don't enforce the shape of that data, bugs hide in plain sight.**

TypeScript solves this by letting you define the exact blueprint of every object.

---

## 🧱 The `type` Keyword — Creating a Type Alias

A **Type Alias** is a named blueprint you create once and reuse everywhere.

```ts
// Syntax: type AliasName = { property: Type }
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
```

Now any variable declared as `User` **must** match this exact shape:

```ts
// ✅ Correct — matches the blueprint exactly
const kingsley: User = {
  id: 1,
  name: "Kingsley",
  email: "king@dev.com",
  isActive: true,
};

// ❌ Missing property — TypeScript catches it
// const broken: User = { id: 2, name: "Alice" };
// Error: Property 'email' is missing in type...

// ❌ Extra property — TypeScript catches it too
// const extra: User = { id: 3, name: "Bob", email: "b@b.com", isActive: true, age: 25 };
// Error: Object literal may only specify known properties
```

---

## 🔑 Optional Properties — The `?` Operator

Not every field is always required. Mark optional fields with `?`:

```ts
type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;   // Optional — may or may not exist
  discount?: number;       // Optional
};

// ✅ Both of these are valid
const laptop: Product = { id: 1, name: "Laptop", price: 450000 };
const phone: Product  = { id: 2, name: "Phone",  price: 120000, description: "Latest model", discount: 10 };
```

> **NestJS Relevance:** When building a `PATCH` endpoint (partial update), almost all fields on a DTO are optional — only the fields being updated need to be sent.

---

## 🔐 Readonly Properties — Immutable Object Fields

Some properties should never change after creation (e.g., a database ID):

```ts
type DatabaseRecord = {
  readonly id: number;    // Set once, never changed
  readonly createdAt: Date;
  name: string;           // Can be updated
  email: string;
};

const record: DatabaseRecord = {
  id: 1,
  createdAt: new Date(),
  name: "Kingsley",
  email: "king@dev.com",
};

// record.id = 99;  // ❌ Error: Cannot assign to 'id' because it is a read-only property
record.name = "King"; // ✅ Fine — name is not readonly
```

---

## 🔗 Nested Object Types

Objects can contain other objects. Type aliases compose cleanly:

```ts
type Address = {
  street: string;
  city: string;
  country: string;
};

type UserWithAddress = {
  id: number;
  name: string;
  address: Address;       // ← nested type alias
};

const user: UserWithAddress = {
  id: 1,
  name: "Kingsley",
  address: {
    street: "12 Tech Lane",
    city: "Calabar",
    country: "Nigeria",
  },
};

console.log(user.address.city); // "Calabar"
```

---

## 🔁 Intersection Types — Combining Type Aliases with `&`

Use `&` to merge two type aliases into one:

```ts
type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
};

type BaseUser = {
  id: number;
  name: string;
  email: string;
};

// Intersection — AdminUser has ALL properties from BOTH types
type AdminUser = BaseUser & {
  role: "admin" | "superadmin";
  permissions: string[];
} & Timestamps;

const admin: AdminUser = {
  id: 1,
  name: "Kingsley",
  email: "king@dev.com",
  role: "admin",
  permissions: ["read", "write", "delete"],
  createdAt: new Date(),
  updatedAt: new Date(),
};
```

> **NestJS Relevance:** In real APIs, entities often extend a `BaseEntity` with `id`, `createdAt`, `updatedAt`. Intersection types model this perfectly.

---

## 🆚 `type` vs `interface` — The Key Differences

You'll learn `interface` tomorrow (Day 19). For now, understand the core distinction:

| Feature                        | `type`  | `interface` |
|--------------------------------|---------|-------------|
| Define object shapes           | ✅      | ✅          |
| Extend / inherit               | `&`  | `extends`   |
| Union types (`A \| B`)          | ✅      | ❌          |
| Tuple types                    | ✅      | ❌          |
| Declaration merging            | ❌      | ✅          |
| Used in NestJS DTOs            | Both work | Preferred   |

**Rule of Thumb for now:**
- Use `type` for data shapes, unions, tuples, and utility types
- Use `interface` when building class contracts (Day 19)

---

## 🏗️ Real-World: 5 Type Aliases (Deliverable)

```ts
// 1. User — core entity
type User = {
  readonly id: number;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  isActive: boolean;
};

// 2. Product — e-commerce item
type Product = {
  readonly id: number;
  name: string;
  price: number;
  category: string;
  tags: string[];
  inStock: boolean;
  description?: string;
};

// 3. Order — links users to products
type Order = {
  readonly orderId: string;
  userId: number;
  products: Product[];
  totalAmount: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  placedAt: Date;
};

// 4. ApiResponse — generic wrapper (preview of generics)
type ApiResponse<T> = {
  success: boolean;
  data: T;
  message: string;
  statusCode: number;
};

// 5. Coordinate — a utility tuple alias
type Coordinate = {
  x: number;
  y: number;
  label?: string;
};
```

---

## 🧠 Mental Model Summary

| Concept | Mental Model |
|--------|--------------|
| `type User = {...}` | A **passport template** — every user object must match this exact form |
| `property?` | A **dashed field** on the passport — optional, may be blank |
| `readonly id` | A **laminated field** — printed once, can never be altered |
| `TypeA & TypeB` | **Merging two passports** — the result has requirements of both |
| Nested types | **Folders inside folders** — structured data all the way down |

---

## ❓ Comprehension Questions

Answer without looking at notes.

**Q1.** What is the difference between these two?
```ts
type User = { name: string; age?: number };
type User = { name: string; age: number | undefined };
```
Answer 1: In 
```ts 
type User = { name: string; age?: number };
```
the `age` property is optional because it is dashed with `?`
while in 
```ts
type User = { name: string; age: number | undefined};
```
the age prpertyi is required and expected to be specifically number or undefined using pipe as the `or`


**Q2.** Will TypeScript catch this error? Why?
```ts
type Point = { x: number; y: number };
const p: Point = { x: 10, y: 20, z: 30 };
```
Answer 2: Typescript will definetly catch the error, reason being that the shape of `Point` type alias has been defined, and adding another item in a box that has a apce for a specific ammount of items whch has been put there already will instantly cause a problem because the box mayy not cloase and will most likely break down.

**Q3.** What does the `&` operator do when combining two type aliases? Write an example.

Answer 3: The `&` Operator combines two or more fifferint type aliases into one giant one, making all properties in the new alias to be required. Exmaple:
```ts
type User = {
  name: string;
  age: number;
  courses: string[]
};

type Personal = {
 readonly id: string;
 location: string;
 isActive: boolean
}

type myData = User & Personal;

const kingsley: myData ={
  name: "Kingsley",
  age: 25,
  courses: ["TypeScript", "JavaScript", "Nestjs", "Next.js"]
  id: "1234-ABCD",
  location: "123, Downhill street, CA."
  isActive: true 

}
```
**Q4.** Why would you mark a property `readonly`? Give a real NestJS use case.
Any property that shouldn't be modified after creation e.g a user id whould be marked as readonly. Example:
```ts
type UserData = {
  name: string;
  readonly id: string;
  email: string;
  phoneNumber? : string
  location: string | undefined
}

const User1: UserData ={
  name: "Kingsley",
  id: "1234-ABCD",
  email: "king@dev",
  phoneNumber: "1234567890",
  location: "123, Downhill street, CA.",
  
}
```
**Q5.** You have this type:
```ts
type Order = {
  readonly orderId: string;
  status: "pending" | "shipped" | "delivered";
  items: string[];
};
```
A function receives an `Order` and tries to do `order.orderId = "NEW-ID"`. What does TypeScript say?

`Error, Can not assign to orderId because it has a readonly property`
---

## ✅ Day 18 Checklist

- [x] Define a type alias with `type Name = { ... }`
- [x] Use optional properties with `?`
- [x] Use `readonly` to protect immutable fields
- [x] Define nested object types (object inside an object)
- [x] Combine type aliases using intersection `&`
- [x] Create 5 meaningful type aliases for real-world entities
- [x] Understand when to use `type` vs `interface` (preview)
- [x] Use a Union Type (`"admin" | "editor"`) inside a type alias
- [x] Know that TypeScript blocks both missing AND extra properties

---

**Next Up → Day 19: Interfaces** (`interface` vs `type`, `extends`, class contracts) 🚀
