# 🏋️ Day 27: Utility Types — Challenges & Hints

**Date:** May 22, 2026
**Rules:** Type every line manually. No `any`. No copy-paste.

---

## 🔴 BY HEART Challenges (Must master — erase and redo until effortless)

---

### ⚔️ Challenge 1 — The Patch Object

**Mission:** Use `Partial<T>` for an update object.

**Requirements:**
1. Create an interface `User` with at least `id`, `name`, `email`, and `isActive`.
2. Write `type UserPatch = Partial<User>`.
3. Create a patch object with only one or two fields.
4. Write `updateUser(user: User, updates: Partial<User>): User`.
5. Return a new object with the updates applied.

> 💡 **Hint:** `Partial<User>` means you can provide only the fields you want to change.

---

### ⚔️ Challenge 2 — The Public Card

**Mission:** Use `Pick<T, K>` to create a smaller user view.

**Requirements:**
1. Start from a full `User` type.
2. Create `type UserCard = Pick<User, "id" | "name" | "email">`.
3. Build one object of that type.
4. Confirm `password` is not allowed in the card object.

> 💡 **Hint:** `Pick` is for keeping only the fields you explicitly name.

---

### ⚔️ Challenge 3 — The Safe Response

**Mission:** Use `Omit<T, K>` to remove a sensitive field.

**Requirements:**
1. Start from a `User` type with a `password` field.
2. Create `type PublicUser = Omit<User, "password">`.
3. Write a function that takes a full `User`.
4. Return a version without the password.
5. Confirm the return type does not include `password`.

> 💡 **Hint:** This is a common backend pattern for safe API responses.

---

### ⚔️ Challenge 4 — The Role Map

**Mission:** Use `Record<K, T>` to build a lookup object.

**Requirements:**
1. Create a union type like `type Role = "admin" | "student"`.
2. Create `type RoleLabels = Record<Role, string>`.
3. Build an object with both keys.
4. Confirm TypeScript requires every key from the union.

> 💡 **Hint:** `Record` is strongest when the keys are a known union, not random strings.

---

### ⚔️ Challenge 5 — Use All Four Together

**Mission:** Build a mini user API type system from one base type.

**Requirements:**
1. Start from one full `User` type.
2. Create `CreateUserInput` with `Pick`.
3. Create `UpdateUserInput` with `Partial<Pick<...>>`.
4. Create `SafeUserResponse` with `Omit`.
5. Create `UserDirectory` with `Record<number, SafeUserResponse>`.
6. Make one example value for each derived type.

> 💡 **Hint:** This is the Day 27 deliverable. If you understand this section, you understand the practical point of utility types.

---

## 🔵 RECOGNIZE Challenge (Skim, don't drill)

---

### ⚔️ Challenge 6 — Spot the Other Utility Types (Read-Only)

**Mission:** Read these examples and explain each in one short comment.

```ts
type LockedUser = Readonly<User>;
type ReadySettings = Required<Settings>;
type StatusResult = ReturnType<typeof getStatus>;
```

Write one short comment above:

1. `Readonly<User>`
2. `Required<Settings>`
3. `ReturnType<typeof getStatus>`

> 💡 **Hint:** These are useful, but Day 27 is mainly about owning `Partial`, `Pick`, `Omit`, and `Record` first.

---

## ✅ Challenge Completion Tracker

| # | Challenge | Tier | Done? |
|---|-----------|------|-------|
| 1 | Patch Object | 🔴 By Heart | [ ] |
| 2 | Public Card | 🔴 By Heart | [ ] |
| 3 | Safe Response | 🔴 By Heart | [ ] |
| 4 | Role Map | 🔴 By Heart | [ ] |
| 5 | Use All Four Together | 🔴 By Heart | [ ] |
| 6 | Spot the Other Utility Types | 🔵 Recognize | [ ] |