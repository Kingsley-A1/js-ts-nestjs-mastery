# 🏋️ Day 26: Decorators (Preview) — Challenges & Hints

**Date:** May 21, 2026
**Rules:** Type every line manually. No `any`. No copy-paste.

---

## 🔴 BY HEART Challenges (Must master — erase and redo until effortless)

---

### ⚔️ Challenge 1 — The First Class Decorator

**Mission:** Write the smallest useful class decorator you can.

**Requirements:**
1. Create a decorator called `Registered`.
2. It should accept `(target, context)`.
3. Log the class name using `context.name`.
4. Apply it to a class called `AppController`.
5. Create one instance so you can see the full flow.

> 💡 **Hint:** The decorator runs when the class is defined, not when the instance method is called.

---

### ⚔️ Challenge 2 — The Decorator Factory

**Mission:** Build a decorator that accepts configuration.

**Requirements:**
1. Create `Feature(featureName: string)`.
2. Return the actual class decorator from inside it.
3. Store the feature name in a `WeakMap`.
4. Apply `@Feature("users")` to a class.
5. Read the stored feature value afterward.

> 💡 **Hint:** `@Feature("users")` means the outer function runs first and returns the real decorator.

---

### ⚔️ Challenge 3 — The Method Logger

**Mission:** Wrap a method so it logs before and after the real call.

**Requirements:**
1. Write a method decorator called `LogCall`.
2. Capture the method name from `context.name`.
3. Return a replacement function.
4. Log the arguments before calling the original method.
5. Log the result after calling the original method.
6. Test it on a class method like `add(a, b)`.

> 💡 **Hint:** The replacement function should call `originalMethod.call(this, ...args)`.

---

### ⚔️ Challenge 4 — The Simple Decorated Service

**Mission:** Combine a class decorator and a method decorator in one service.

**Requirements:**
1. Create `ServiceTag(tag: string)` as a class decorator factory.
2. Create `Audit(action: string)` as a method decorator factory.
3. Make a class called `UserService`.
4. Add methods `listUsers()` and `addUser(name: string)`.
5. Decorate the class with a service tag.
6. Decorate both methods with audit actions.
7. Log both the stored tag and one stored audit action.

> 💡 **Hint:** Use `WeakMap` for class-level storage and `Map` for method-name storage.

---

## 🟡 GOOD TO KNOW Challenges (Understand, but don't drill)

---

### ⚔️ Challenge 5 — Context + Metadata Preview

**Mission:** Read information from the decorator context and store one piece of app metadata.

**Requirements:**
1. Write a decorator `DescribeMethod`.
2. Log `context.kind`, `context.name`, `context.static`, and `context.private`.
3. Write another decorator factory `RequiresRole(role: string)`.
4. Store the required role in a `Map` using the method name.
5. Apply it to a method like `deleteUser()`.
6. Read the stored role later and print it.

> 💡 **Hint 1:** The `context` object describes what is being decorated.
> 💡 **Hint 2:** This is a lightweight preview of what frameworks call metadata.

---

## 🔵 RECOGNIZE Challenge (Skim, don't drill)

---

### ⚔️ Challenge 6 — Spot the NestJS Pattern (Read-Only)

**Mission:** Read these examples and explain the pattern in one short comment above each.

```ts
@Feature("users")
class UserController {}

class ProductService {
  @LogCall
  findAll(): string[] {
    return ["phone", "laptop"];
  }
}

const examples = ["@Controller()", "@Get()", "@Injectable()"];
```

Write one short comment above:

1. `@Feature("users")`
2. `@LogCall`
3. The array of NestJS decorators

> 💡 **Hint:** You are not expected to know NestJS decorator internals yet. Just identify the shape and purpose.

---

## ✅ Challenge Completion Tracker

| # | Challenge | Tier | Done? |
|---|-----------|------|-------|
| 1 | First Class Decorator | 🔴 By Heart | [ ] |
| 2 | Decorator Factory | 🔴 By Heart | [ ] |
| 3 | Method Logger | 🔴 By Heart | [ ] |
| 4 | Simple Decorated Service | 🔴 By Heart | [ ] |
| 5 | Context + Metadata Preview | 🟡 Good to Know | [ ] |
| 6 | Spot the NestJS Pattern | 🔵 Recognize | [ ] |