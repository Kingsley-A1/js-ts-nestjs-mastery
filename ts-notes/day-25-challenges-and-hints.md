# 🏋️ Day 25: Classes in TypeScript — Challenges & Hints

**Date:** May 20, 2026
**Rules:** Type every line manually. No `any`. No copy-paste.

---

## 🔴 BY HEART Challenges (Must master — erase and redo until effortless)

---

### ⚔️ Challenge 1 — The Public User Class

**Mission:** Build a simple class with public properties and a public method.

**Requirements:**
1. Create a class called `UserProfile`.
2. Add `public name: string` and `public role: string`.
3. Add a constructor that sets both values.
4. Add a method `getLabel(): string` that returns `"name (role)"`.
5. Create one instance and log both a property and the method result.

> 💡 **Hint:** While learning, write `public` explicitly even though it is the default. It helps you see the access level clearly.

---

### ⚔️ Challenge 2 — The Private Bank Account

**Mission:** Hide internal state with `private`.

**Requirements:**
1. Create a class called `BankAccount`.
2. Add `public owner: string`.
3. Add `private balance: number`.
4. Add a constructor that sets both values.
5. Add `deposit(amount: number): void`.
6. Add `getBalance(): number`.
7. Try reading `account.balance` directly and confirm TypeScript blocks it.

> 💡 **Hint:** If something is `private`, outside code must go through a `public` method to reach it safely.

---

### ⚔️ Challenge 3 — The Readonly Identity

**Mission:** Use `readonly` for a value that should never change after creation.

**Requirements:**
1. Create a class called `Product`.
2. Add `readonly sku: string`.
3. Add `public name: string` and `public price: number`.
4. Set all values in the constructor.
5. Add a method that updates the `price`.
6. Try changing `sku` after creating the object and confirm TypeScript blocks it.

> 💡 **Hint:** `readonly` does not stop you from reading the property. It only stops reassignment after initialization.

---

### ⚔️ Challenge 4 — The Typed User Class

**Mission:** Combine `public`, `private`, and `readonly` in one class.

**Requirements:**
1. Create a class called `UserAccount`.
2. Add `readonly id: number`.
3. Add `public name: string` and `public email: string`.
4. Add `private password: string`.
5. Add a constructor that sets all four values.
6. Add `updateEmail(newEmail: string): void`.
7. Add `checkPassword(input: string): boolean`.
8. Confirm `user.password` fails and `user.id = 99` fails.

> 💡 **Hint:** Ask yourself of each field: should outside code change this, read this, or never touch this directly?

---

## 🟡 GOOD TO KNOW Challenges (Understand, but don't drill)

---

### ⚔️ Challenge 5 — Constructor Shorthand + Getter

**Mission:** Use TypeScript's constructor shorthand and expose a computed value.

**Requirements:**
1. Create a class called `CourseProgress`.
2. Use constructor parameter properties for `public title: string` and `readonly courseId: string`.
3. Add a private field called `lessonsCompleted` starting at `0`.
4. Add a method `completeLesson(): void`.
5. Add a getter called `progress` that returns something like `"2 lessons completed"`.
6. Create an instance, call `completeLesson()` a few times, then log `course.progress`.

> 💡 **Hint 1:** A getter is accessed like a property: `course.progress`, not `course.progress()`.
> 💡 **Hint 2:** Constructor parameter properties are created by adding `public`, `private`, or `readonly` directly in the constructor parameters.

---

## 🔵 RECOGNIZE Challenge (Skim, don't drill)

---

### ⚔️ Challenge 6 — Spot `protected` and `static` (Read-Only)

**Mission:** Read these examples and explain each one in a short comment.

```ts
class BaseLogger {
  protected logs: string[] = [];
}

class FileLogger extends BaseLogger {
  add(message: string): void {
    this.logs.push(message);
  }
}

class MathHelper {
  static square(value: number): number {
    return value * value;
  }
}
```

Write one short comment above:

1. `protected logs`
2. `this.logs.push(message)` inside the subclass
3. `static square`

> 💡 **Hint:** `protected` is for the class plus its subclasses. `static` belongs to the class itself, not to each object.

---

## ✅ Challenge Completion Tracker

| # | Challenge | Tier | Done? |
|---|-----------|------|-------|
| 1 | Public User Class | 🔴 By Heart | [ ] |
| 2 | Private Bank Account | 🔴 By Heart | [ ] |
| 3 | Readonly Identity | 🔴 By Heart | [ ] |
| 4 | Typed User Class | 🔴 By Heart | [ ] |
| 5 | Constructor Shorthand + Getter | 🟡 Good to Know | [ ] |
| 6 | Spot `protected` and `static` | 🔵 Recognize | [ ] |