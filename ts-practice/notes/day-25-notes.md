# 📚 Day 25: Classes in TypeScript — Complete Notes

**Date:** May 20, 2026
**Topic:** `public`, `private`, and `readonly`

---

## 🎯 Knowledge Priority System

> Continue using the Day 24 priority system: memorize the patterns you will write often, understand the ones you can look up, and only recognize the rare ones.

| Tier | Label | Meaning | Action |
|------|-------|---------|--------|
| 🔴 | **By Heart** | Indispensable — you MUST be able to write this from memory | Type it, erase it, retype it |
| 🟡 | **Good to Know** | Useful, but easily outsourced to docs or AI when needed | Understand the concept, look up the syntax |
| 🔵 | **Recognize** | Just know it exists — look it up if you ever need it | Skim once, don't practice |

---

## 🔴 BY HEART — `public` (What the Outside World Can Use)

### The One-Sentence Rule

> `public` means a property or method can be accessed from anywhere the object is available.

When you create an object from a class, `public` members become part of that object's usable API.

```ts
class UserProfile {
  public name: string;
  public role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }

  public getLabel(): string {
    return `${this.name} (${this.role})`;
  }
}

const user = new UserProfile("Kingsley", "Backend Student");

console.log(user.name);       // ✅ public
console.log(user.getLabel()); // ✅ public
```

**Important:** `public` is the default in TypeScript classes. Writing it explicitly is still useful while learning because it makes access control visible.

**Mental Model:** `public` is the front door. Anyone allowed to use the object can walk through that door.

---

## 🔴 BY HEART — `private` (Hide Internal State)

### The One-Sentence Rule

> `private` means only the class itself can directly read or change that property.

Use `private` for data you do not want outside code to touch directly: balances, passwords, counters, internal flags.

```ts
class BankAccount {
  public owner: string;
  private balance: number;

  constructor(owner: string, openingBalance: number) {
    this.owner = owner;
    this.balance = openingBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("Kingsley", 5000);
account.deposit(2000);
account.getBalance(); // ✅ allowed through a public method

// account.balance; // ❌ Error: Property 'balance' is private
```

**Why it matters:** `private` protects the class from unsafe outside edits. The class controls how changes happen.

**Mental Model:** `private` is the engine room. The driver can use the car, but not reach in and manually turn engine parts.

---

## 🔴 BY HEART — `readonly` (Write Once, Then Lock)

### The One-Sentence Rule

> `readonly` means the property can be assigned once, then it becomes immutable.

This is perfect for values that define identity and should not drift later: IDs, usernames, serial numbers, creation timestamps.

```ts
class Product {
  readonly sku: string;
  name: string;

  constructor(sku: string, name: string) {
    this.sku = sku;
    this.name = name;
  }
}

const product = new Product("SKU-1001", "Laptop");
product.name = "Gaming Laptop"; // ✅ normal update
// product.sku = "SKU-9999";    // ❌ Error: read-only property
```

**Key distinction:** `readonly` does not mean "hidden." It means "visible, but not reassignable."

**Mental Model:** `readonly` is a permanent label attached at creation time.

---

## 🔴 BY HEART — The Typed User Class (Day 25 Deliverable)

This is the Day 25 pattern to own fully:

- `readonly` for identity
- `public` for intentional external use
- `private` for secrets or internal state

```ts
class UserAccount {
  readonly id: number;
  public name: string;
  public email: string;
  private password: string;

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  updateEmail(newEmail: string): void {
    this.email = newEmail;
  }

  checkPassword(input: string): boolean {
    return this.password === input;
  }
}

const user = new UserAccount(1, "Kingsley", "king@dev.com", "safe-pass");

user.updateEmail("kingsley@mastery.dev"); // ✅ public method
console.log(user.id);                      // ✅ public read access
console.log(user.email);                   // ✅ public read access
// user.password = "hack";                // ❌ private
// user.id = 99;                           // ❌ readonly
```

**What this teaches:** access modifiers are not decoration. They define what is safe to expose, what must stay internal, and what must never change.

---

## 🟡 GOOD TO KNOW — Constructor Parameter Properties

TypeScript can create class properties directly from constructor parameters.

```ts
class AdminUser {
  constructor(
    public username: string,
    private permissions: string[],
    readonly staffId: string,
  ) {}

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }
}
```

This is shorthand for:

1. Declaring the class properties.
2. Accepting the constructor parameters.
3. Assigning them with `this.property = property`.

> **Action:** Understand this pattern, but do not worry about memorizing every variation yet.

---

## 🟡 GOOD TO KNOW — Getters

Getters let you expose a value without exposing the raw internal field.

```ts
class CourseProgress {
  private lessonsCompleted = 0;

  completeLesson(): void {
    this.lessonsCompleted += 1;
  }

  get progress(): string {
    return `${this.lessonsCompleted} lessons completed`;
  }
}
```

You use it like a property, not like a method:

```ts
const course = new CourseProgress();
course.completeLesson();
console.log(course.progress); // not course.progress()
```

---

## 🔵 RECOGNIZE — `protected` and `static`

You do not need to drill these yet, but you should recognize them when you see them.

### `protected`

`protected` is like `private`, except subclasses can use it too.

```ts
class BaseLogger {
  protected logs: string[] = [];
}

class FileLogger extends BaseLogger {
  add(message: string): void {
    this.logs.push(message); // ✅ allowed in subclass
  }
}
```

### `static`

`static` belongs to the class itself, not to each created object.

```ts
class MathHelper {
  static square(value: number): number {
    return value * value;
  }
}

MathHelper.square(4); // ✅ call on the class itself
```

> **Action:** Recognize both. You do not need to practice them heavily on Day 25.

---

## 🧠 Mental Model Summary

| Keyword | Meaning | Best Use |
|---------|---------|----------|
| `public` | Accessible everywhere | Data and methods meant for outside use |
| `private` | Accessible only inside the class | Passwords, balances, counters, internals |
| `readonly` | Can be assigned once, then locked | IDs, serial numbers, permanent identity |
| `protected` | Internal + subclass access | Base classes and inheritance |
| `static` | Belongs to the class itself | Utility helpers, counters, factories |

---

## ✅ Day 25 Checklist

- [ ] 🔴 Write a basic class with typed properties and methods
- [ ] 🔴 Use `public` intentionally
- [ ] 🔴 Use `private` to hide internal state
- [ ] 🔴 Use `readonly` for identity values that must not change
- [ ] 🔴 Build a typed `UserAccount` class with all three
- [ ] 🟡 Recognize constructor parameter properties
- [ ] 🟡 Understand how a getter works
- [ ] 🔵 Recognize `protected` and `static`

---

**Next Up → Day 26: Decorators (Preview)** (`@decorator` syntax and metadata) 🚀