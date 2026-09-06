📚 Day 16: Generics & Utility Types — Complete Notes

Date: April 9, 2026

Topic: Building Reusable, Type-Safe Blueprints

🎯 The Core Problem: Duplicate Blueprints

Without Generics, if you want an API response for a User and a Product, you have to write the exact same blueprint twice. This violates the DRY (Don't Repeat Yourself) principle.

🧬 The Solution: Generics (<T>)

Generics act as a placeholder variable for a Type.
Think of <T> as an empty box. When you call the function or use the interface, you tell TypeScript exactly what to put inside the box.

1. Generic Interfaces

interface ApiResponse<T> {
  status: 'success' | 'error';
  data: T; // This will become whatever we put in the <T> box
}

// We pass the User blueprint into the box
const userResponse: ApiResponse<User> = {
  status: 'success',
  data: { name: 'Kingsley', isAdmin: true }
};


2. Generic Functions

To use a Generic in a function, you must announce it with the <T> "megaphone" before the parentheses.

// "I am using a type called T. I take an array of T, and I return an array of T."
function reverseArray<T>(items: T[]): T[] {
  return items.reverse();
}

const numbers = reverseArray<number>([1, 2, 3]); // Enforces numbers
const names = reverseArray<string>(['King', 'Alice']); // Enforces strings


🛑 The Danger Zone: any vs as

In professional backend engineering, we must maintain strict type safety.

any (The Virus): Tells the compiler to turn off. You lose all autocomplete and all safety. Do not use this.

as (Type Assertion): Tells the compiler, "Trust me, I know what this raw data is." You keep your perfect autocomplete, but if you lie to the compiler (e.g., the data is missing a property), you will cause a runtime error.

// Fetching raw JSON from a database
async function getUserFromDB<T>() {
  const rawData = { name: "King" }; // Let's pretend this came from a database
  
  // We use "as T" to force the compiler to treat this raw data as our blueprint
  return rawData as T; 
}


✅ Day 16 Checklist

[x] Understand why we need Generics (preventing duplicate code).

[x] Use <T> to define a Generic interface.

[x] Use <T> to define a Generic function.

[x] Understand why any destroys your Developer Experience (autocomplete).

[x] Use as to perform a Type Assertion on raw data.

[x] Understand the boolean type (true or false).

Next Up: Phase 3 — NestJS Mastery! 🚀