# 📚 Day 22: Functions & Types — Complete Notes

**Date:** May 10, 2026
**Topic:** Param types, Return types, and mastering the "Mini-Factory"

---

## 🎯 The Core Problem: Why are functions so confusing?

If functions have been a deep pain point for you, it's usually because programming tutorials overcomplicate them. Let's destroy the confusion right now.

**A function is just a Mini-Factory.**
1. **Raw Materials (Parameters/Arguments):** What you send INTO the factory.
2. **The Gears (Logic):** What happens INSIDE the factory.
3. **The Finished Product (Return Value):** What comes OUT of the factory.

In plain JavaScript, functions are terrifying because there are no security guards. You can send a `dog` into a `car` factory, and JavaScript won't stop you until the factory explodes at runtime.

**In TypeScript, we put strict Security Guards at the Entrance and the Exit.**

---

## 🧱 The Two Security Guards

Let's build a simple function to add two numbers.

```ts
//   Entrance Guard 1      Entrance Guard 2       Exit Guard
//         ↓                     ↓                    ↓
function addNumbers(num1: number, num2: number): number {
  // --- The Gears (Logic) ---
  const sum = num1 + num2;
  
  // --- The Delivery Truck (Return) ---
  return sum; 
}
```

### 1. The Entrance Guards (Parameter Types)
`(num1: number, num2: number)`
This tells TypeScript: "If anyone tries to pass a string or a boolean into this factory, reject it immediately."

### 2. The Exit Guard (Return Type)
`: number` (placed right after the parentheses).
This tells TypeScript: "This factory MUST spit out a number. If the developer forgets to `return` something, or tries to return a string, throw an error."

---

## 🆚 Regular Functions vs Arrow Functions

There are two ways to write functions. In NestJS, you will see and use **both**. They do the exact same thing, they just look slightly different.

### The Regular Function (Classic)
```ts
function multiply(a: number, b: number): number {
  return a * b;
}
```

### The Arrow Function (Modern & Clean)
You store the function in a variable, and use the `=>` arrow to point to the logic.
```ts
const multiply = (a: number, b: number): number => {
  return a * b;
};
```

---

## 🔑 Optional and Default Parameters

Sometimes, raw materials are optional.

### 1. Optional Parameters (`?`)
Use `?` to tell the Entrance Guard: "This item is allowed, but not required."
*(Rule: Optional parameters must always come LAST).*

```ts
function greet(firstName: string, lastName?: string): string {
  if (lastName) {
    return `Hello ${firstName} ${lastName}`;
  }
  return `Hello ${firstName}`;
}

greet("Kingsley");           // ✅ Allowed (lastName is undefined)
greet("Kingsley", "Madu");   // ✅ Allowed
```

### 2. Default Parameters (`=`)
Instead of making it optional, you can give it a default value if the user forgets it.

```ts
function applyDiscount(price: number, discountPercentage: number = 10): number {
  return price - (price * (discountPercentage / 100));
}

applyDiscount(1000);      // ✅ Uses default 10 (Result: 900)
applyDiscount(1000, 20);  // ✅ Overrides default with 20 (Result: 800)
```

---

## 🛑 The `void` Type — Actions Without Products

Not every factory produces a product. Sometimes, you just hire someone to sweep the floor. They do an action, but they don't hand you an item back.

If a function does **not** have a `return` keyword, its return type is `void`.

```ts
function logToDatabase(message: string): void {
  console.log(`[DB LOG]: ${message}`);
  // No "return" keyword here!
}

// ❌ You cannot store the result of a void function
// const result = logToDatabase("User logged in"); // result will be undefined
```

> **NestJS Relevance:** If you have an endpoint that just deletes a user but doesn't send any data back to the frontend, its return type will be `Promise<void>`.

---

## 📦 Passing Objects into Functions

In professional backend development, passing 10 parameters `(a, b, c, d, ...)` is messy. Instead, we pack them into a single Box (an Object) and pass the Box.

```ts
// 1. Define the Box Blueprint
interface UserRegistrationDto {
  username: string;
  email: string;
  age: number;
}

// 2. The Factory only takes ONE parameter: The Box
function registerUser(dto: UserRegistrationDto): string {
  return `User ${dto.username} registered with email ${dto.email}!`;
}

// 3. Passing the Box
registerUser({
  username: "King",
  email: "king@dev.com",
  age: 25
});
```
*This is exactly how NestJS Controllers work using DTOs (Data Transfer Objects)!*

---

## 🧩 Defining a "Function Type"

Sometimes you want to pass a function into another function, or enforce that a variable holds a specific kind of function. You can create a blueprint for the function itself!

```ts
// A blueprint for a function that takes two numbers and returns a number
type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

// ❌ TypeScript enforces the blueprint
// const sayHi: MathOperation = (name) => `Hi ${name}`; // Error!
```

---

## 🧠 Mental Model Summary

- **Function** = A Mini-Factory.
- **Parameters (`param: type`)** = The Entrance Security Guard (checks raw materials).
- **Return Type (`): type {`)** = The Exit Security Guard (checks the finished product).
- **`void`** = The factory did its job, but didn't hand you a physical item back.
- **Arrow vs Regular** = Just two different ways to build the exact same factory.

---

## ✅ Day 22 Checklist

- [x] Understand what Parameters and Return Values are (Input vs Output).
- [x] Add types to parameters.
- [x] Add an explicit return type to a function.
- [x] Know the difference between regular `function() {}` and arrow `() => {}` syntax.
- [x] Use an optional parameter (`?`).
- [x] Use a default parameter (`=`).
- [x] Understand the `void` return type.
- [x] Pass a typed object/interface as a function parameter (NestJS DTO style).
