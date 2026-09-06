# 📚 Day 19: Interfaces & Contracts — Complete Notes

**Date:** May 02, 2026
**Topic:** `interface` vs `type`, `extends`, and Building Contracts

---

## 🎯 What is an Interface?

An `interface` in TypeScript is specifically designed to define the shape of an object or a class. It acts as a strict "contract" that an object must adhere to.
What is a class? @Agent answer below
@Agent : Answer below
In TypeScript, a **class** is a blueprint for creating objects (instances). It is a fundamental concept in Object-Oriented Programming (OOP) that combines data (properties) and the functions that operate on that data (methods) into a single unit.

```ts
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: "Kingsley",
  email: "king@dev.com",
  isActive: true,
};
```
*Notice how similar this looks to a `type` alias! The main differences lie in how they are extended and merged.*

---

## 🏗️ Extending Interfaces (`extends`)

Interfaces shine when building object hierarchies. While `type` uses intersection (`&`), `interface` uses the `extends` keyword (just like classes in Object-Oriented Programming).

```ts
interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

// User inherits everything from BaseEntity
interface User extends BaseEntity {
  username: string;
  role: "admin" | "user";
}

const admin: User = {
  id: 101,
  username: "king",
  role: "admin",
  createdAt: new Date(),
  updatedAt: new Date(),
};
```

You can also extend multiple interfaces:
```ts
interface HasTimestamps { createdAt: Date; updatedAt: Date; }
interface HasSoftDelete { deletedAt?: Date; isDeleted: boolean; }

// Extending multiple interfaces
interface Article extends HasTimestamps, HasSoftDelete {
  title: string;
  content: string;
}
```

---

## 🧩 Declaration Merging

This is a superpower exclusive to `interface`. If you declare the same interface twice, TypeScript **merges** them together instead of throwing an error.

```ts
interface Window {
  title: string;
}

// Somewhere else in your code (or in a 3rd party library):
interface Window {
  resize(): void;
}

// The final Window interface now has BOTH:
const myWindow: Window = {
  title: "App",
  resize: () => console.log("Resizing..."),
};
```
> **NestJS / Express Relevance:** This is exactly how you add custom properties (like `user`) to the Express `Request` object globally in a backend app!

---

## 🆚 `interface` vs `type` — The Ultimate Showdown

When should you use which?

| Feature | `interface` | `type` (Type Alias) |
| :--- | :--- | :--- |
| **Primary Use Case** | Object shapes, Class contracts | Object shapes, Unions, Primitives |
| **Inheritance** | `extends` | Intersection (`&`) |
| **Declaration Merging** | ✅ Yes | ❌ No (Throws error) |
| **Can represent Primitives?** | ❌ No | ✅ Yes (`type ID = string`) |
| **Can represent Unions?** | ❌ No | ✅ Yes (`type Role = "A" \| "B"`) |
| **Performance** | Slightly faster for TS compiler | Can be slower for complex intersections |

**The NestJS Golden Rule:**
- Use **`interface`** for data contracts, repository definitions, and object shapes that might be extended.
- Use **`type`** for complex type math, unions (e.g., `"success" | "error"`), tuples, or renaming primitives.

---

## 📝 Defining Function Signatures in Interfaces

Interfaces can also describe functions, such as methods inside a class or an object.

```ts
interface UserRepository {
  // Method signatures
  findOne(id: number): User | undefined;
  create(user: Omit<User, "id">): User;
  delete(id: number): boolean;
}
```
*This is heavily used in NestJS for Dependency Injection — you inject the `interface` contract rather than a concrete implementation!*

---

## ✅ Day 19 Checklist

- [ ] Define an object shape using `interface`
- [ ] Extend an interface using `extends`
- [ ] Extend multiple interfaces
- [ ] Understand Declaration Merging
- [ ] Articulate the difference between `interface` and `type`
- [ ] Define method signatures inside an interface

---

**Next Up → Day 20: Classes & OOP in TypeScript**
