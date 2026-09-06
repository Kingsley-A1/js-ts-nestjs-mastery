# 📚 Day 27: Utility Types — Complete Notes

**Date:** May 22, 2026
**Topic:** `Partial`, `Pick`, `Omit`, and `Record`

---

## 🎯 Knowledge Priority System

> Continue using the Day 24 priority system: own the utility types you will use constantly in APIs and data shaping.

| Tier | Label | Meaning | Action |
|------|-------|---------|--------|
| 🔴 | **By Heart** | Indispensable — you MUST be able to write this from memory | Type it, erase it, retype it |
| 🟡 | **Good to Know** | Useful, but easily outsourced to docs or AI when needed | Understand the concept, look up the syntax |
| 🔵 | **Recognize** | Just know it exists — look it up if you ever need it | Skim once, don't practice |

---

## 🔴 BY HEART — `Partial<T>`

### The One-Sentence Rule

> `Partial<T>` keeps the same type shape, but makes every property optional.

This is useful for update operations, patch objects, and forms where only some fields may change.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UserPatch = Partial<User>;

const patch: UserPatch = {
  name: "Kingsley Madu",
};
```

**Mental Model:** `Partial<T>` means “same object, but I do not need to provide everything.”

---

## 🔴 BY HEART — `Pick<T, K>`

### The One-Sentence Rule

> `Pick<T, K>` creates a new type by keeping only the keys you choose.

This is useful when you want a smaller version of a bigger type.

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserCard = Pick<User, "id" | "name" | "email">;
```

**Mental Model:** `Pick` means “take only these fields.”

---

## 🔴 BY HEART — `Omit<T, K>`

### The One-Sentence Rule

> `Omit<T, K>` creates a new type by removing the keys you do not want.

This is useful for safe API responses when some fields should never leave the server.

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, "password">;
```

**Mental Model:** `Omit` means “same type, minus these fields.”

---

## 🔴 BY HEART — `Record<K, T>`

### The One-Sentence Rule

> `Record<K, T>` builds an object type whose keys come from `K` and whose values are all type `T`.

This is useful for lookup tables, config maps, labels, and keyed dictionaries.

```ts
type Role = "admin" | "student";

type RoleLabels = Record<Role, string>;

const roleLabels: RoleLabels = {
  admin: "Administrator",
  student: "Student",
};
```

**Mental Model:** `Record` means “make me an object with these keys and one shared value type.”

---

## 🔴 BY HEART — The Day 27 Deliverable: Use All Four Together

This is the Day 27 pattern to own:

- `Pick` for input shapes
- `Partial` for updates
- `Omit` for safe output
- `Record` for maps and lookup objects

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "student";
  isActive: boolean;
}

type CreateUserInput = Pick<User, "name" | "email" | "password">;
type UpdateUserInput = Partial<Pick<User, "name" | "email" | "role" | "isActive">>;
type SafeUserResponse = Omit<User, "password">;
type UserDirectory = Record<number, SafeUserResponse>;
```

**Why this matters:** In real backend work, you rarely use one giant type everywhere. You derive smaller, safer, purpose-specific types from a trusted base type.

---

## 🟡 GOOD TO KNOW — Utility Types Can Be Combined

Utility types are often stacked together.

```ts
type UserContactPatch = Partial<Pick<User, "name" | "email">>;
```

Read that out loud as:

> “Take only `name` and `email`, then make both optional.”

That gives you a neat update object for just contact information.

---

## 🔵 RECOGNIZE — Other Utility Types

You do not need to drill these yet, but you should recognize them when you see them.

### `Readonly<T>`

Makes every property read-only.

### `Required<T>`

Makes every property required.

### `ReturnType<typeof fn>`

Extracts the return type of a function.

> **Action:** Recognize them. Day 27 is about mastering the big four first.

---

## 🧠 Mental Model Summary

| Utility Type | Meaning | Best Use |
|--------------|---------|----------|
| `Partial<T>` | Make every property optional | Update objects, patch payloads |
| `Pick<T, K>` | Keep only selected fields | DTOs, summaries, smaller views |
| `Omit<T, K>` | Remove selected fields | Safe API responses, hide secrets |
| `Record<K, T>` | Build an object from keys and one value type | Lookups, labels, config maps |

---

## ✅ Day 27 Checklist

- [ ] 🔴 Explain `Partial<T>` simply
- [ ] 🔴 Explain `Pick<T, K>` simply
- [ ] 🔴 Explain `Omit<T, K>` simply
- [ ] 🔴 Explain `Record<K, T>` simply
- [ ] 🔴 Use all four on top of one base type
- [ ] 🟡 Combine utility types like `Partial<Pick<...>>`
- [ ] 🔵 Recognize `Readonly`, `Required`, and `ReturnType`

---

**Next Up → Day 28: Typed Express API Project** 🚀