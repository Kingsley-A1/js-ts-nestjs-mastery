# 📚 Day 26: Decorators (Preview) — Complete Notes

**Date:** May 21, 2026
**Topic:** `@decorator` syntax, decorator factories, and metadata preview

---

## 🎯 Knowledge Priority System

> Continue using the Day 24 priority system: own the decorator mental model now, then learn NestJS-specific decorators on top of it later.

| Tier | Label | Meaning | Action |
|------|-------|---------|--------|
| 🔴 | **By Heart** | Indispensable — you MUST be able to write this from memory | Type it, erase it, retype it |
| 🟡 | **Good to Know** | Useful, but easily outsourced to docs or AI when needed | Understand the concept, look up the syntax |
| 🔵 | **Recognize** | Just know it exists — look it up if you ever need it | Skim once, don't practice |

---

## 🔴 BY HEART — What a Decorator Actually Is

### The One-Sentence Rule

> A decorator is a function attached with `@` syntax that runs when a class or method is defined.

That is the core idea. A decorator is not magic. It is a function hook attached to a class member.

```ts
function Registered(target: Function, context: ClassDecoratorContext): void {
  console.log(`${String(context.name)} has been registered`);
}

@Registered
class AppController {}
```

When TypeScript processes `AppController`, the `Registered` function runs.

**Mental Model:** A decorator is a checkpoint that can inspect, tag, or wrap a class or method during definition.

---

## 🔴 BY HEART — Class Decorators

Class decorators attach behavior or information to the class itself.

```ts
const featureRegistry = new WeakMap<Function, string>();

function Feature(featureName: string) {
  return function (target: Function, context: ClassDecoratorContext): void {
    featureRegistry.set(target, featureName);
  };
}

@Feature("users")
class UserService {}
```

### Why this matters

This is the basic framework pattern:

1. You write `@Something(...)`.
2. That call returns the real decorator.
3. The decorator runs and stores information or changes behavior.

This is the mental bridge to NestJS decorators like `@Controller()` and `@Injectable()`.

---

## 🔴 BY HEART — Method Decorators

Method decorators can wrap an existing method with extra behavior.

```ts
function LogCall<This, Args extends unknown[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
) {
  const methodName = String(context.name);

  return function replacementMethod(this: This, ...args: Args): Return {
    console.log(`Calling ${methodName} with`, args);
    const result = originalMethod.call(this, ...args);
    console.log(`Result from ${methodName}:`, result);
    return result;
  };
}
```

### What changed?

The original method still exists, but the decorator returns a new function that adds work before or after it.

**Mental Model:** A method decorator is a wrapper around a method call.

---

## 🔴 BY HEART — Decorator Factory + Simple Service (Day 26 Deliverable)

This is the Day 26 pattern to own:

- a class decorator to tag a class
- a method decorator to add cross-cutting behavior
- a registry to preview metadata storage

```ts
const serviceTags = new WeakMap<Function, string>();
const auditRegistry = new Map<string, string>();

function ServiceTag(tag: string) {
  return function (target: Function, context: ClassDecoratorContext): void {
    serviceTags.set(target, tag);
  };
}

function Audit(action: string) {
  return function <This, Args extends unknown[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
  ) {
    auditRegistry.set(String(context.name), action);

    return function auditedMethod(this: This, ...args: Args): Return {
      console.log(`[AUDIT] ${action}`);
      return originalMethod.call(this, ...args);
    };
  };
}

@ServiceTag("users")
class UserService {
  @Audit("LIST_USERS")
  listUsers(): string[] {
    return ["Kingsley", "Alice"];
  }
}
```

**Why this matters:** This is the exact kind of mental model you need before NestJS starts using decorators for routes, dependency injection, guards, and metadata.

---

## 🟡 GOOD TO KNOW — The `context` Object

Decorators receive a `context` object that describes what is being decorated.

Useful pieces include:

- `context.kind`
- `context.name`
- `context.static`
- `context.private`

```ts
function DescribeMethod<This, Args extends unknown[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
): void {
  console.log(context.kind);
  console.log(String(context.name));
  console.log(context.static);
  console.log(context.private);
}
```

> **Action:** Understand what the context object is for. Do not try to memorize every possible property yet.

---

## 🟡 GOOD TO KNOW — Metadata Preview

One common decorator job is storing information that the app can look up later.

In full frameworks, this is often done with metadata systems. For now, a plain `Map` or `WeakMap` is enough to understand the concept.

```ts
const roleRequirements = new Map<string, string>();

function RequiresRole(role: string) {
  return function <This, Args extends unknown[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
  ) {
    roleRequirements.set(String(context.name), role);
    return originalMethod;
  };
}
```

This is enough to understand the big idea: decorators can attach information to your app structure.

---

## 🔵 RECOGNIZE — Decorators in NestJS

You do not need to build NestJS decorators today. You only need to recognize the shape.

You will soon see things like:

```ts
@Controller("users")
class UsersController {}

@Injectable()
class UsersService {}
```

And inside controllers:

```ts
@Get()
findAll() {}

@Post()
create() {}
```

> **Action:** Recognize the pattern. Today's goal is understanding what decorators are doing conceptually, not memorizing every framework decorator.

---

## 🧠 Mental Model Summary

| Concept | Meaning | Best Use |
|---------|---------|----------|
| Decorator | A function attached with `@` syntax | Add behavior or store information |
| Class decorator | Runs on a class definition | Tag or register classes |
| Method decorator | Wraps or augments a method | Logging, auditing, guards |
| Decorator factory | A function returning a decorator | Configurable decorators like `@Feature("users")` |
| Metadata preview | Store information externally | Route info, roles, tags, config |

---

## ✅ Day 26 Checklist

- [ ] 🔴 Explain what a decorator is in one sentence
- [ ] 🔴 Write a basic class decorator
- [ ] 🔴 Write a decorator factory like `@Feature("users")`
- [ ] 🔴 Write a method decorator that wraps the original method
- [ ] 🔴 Build a simple decorated service with one class decorator and one method decorator
- [ ] 🟡 Recognize what the `context` object provides
- [ ] 🟡 Understand the idea of metadata storage with `Map` or `WeakMap`
- [ ] 🔵 Recognize `@Controller`, `@Get`, and `@Injectable` when they appear in NestJS

---

**Next Up → Day 27: Utility Types** (`Partial`, `Pick`, `Omit`, `Record`) 🚀