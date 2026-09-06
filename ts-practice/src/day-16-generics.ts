
// ============================================================
// 📘 TypeScript Generics — A Clear, Practical Guide
// ============================================================
// Generic types let you write REUSABLE functions/interfaces that
// work with ANY type — while still being type-safe.
//
// Think of <T> as a PLACEHOLDER for a type.
// You decide what T is when you actually CALL the function.
// ============================================================


// ────────────────────────────────────────────────────────────
// 1️⃣  BASIC GENERIC FUNCTION: <T> as a "Type Slot"
// ────────────────────────────────────────────────────────────
// This function accepts TWO values of the same type T,
// and returns them as an array of that same type.
//
// "T" is just a name — it could be "Kingsley" or "ItemType",
// but by convention we use T (short for "Type").

function makeArray<T>(item1: T, item2: T): T[] {
    return [item1, item2];
}

// ✅ TypeScript INFERS what T is from the arguments you pass:
console.log(makeArray('hello', 'world'));           // T = string  → ['hello', 'world']
console.log(makeArray(1, 2));                       // T = number  → [1, 2]
console.log(makeArray(true, false));                // T = boolean → [true, false]
console.log(makeArray({ name: 'John' }, { name: 'Jane' })); // T = {name: string}

// 🚫 This would be a TYPE ERROR — T cannot be BOTH string and number:
// console.log(makeArray('hello', 2));  // ❌ Argument of type 'number' is not assignable to type 'string'

// 🚫 This would be a TYPE ERROR — makeArray needs EXACTLY 2 arguments:
// console.log(makeArray(42));  // ❌ Expected 2 arguments, but got 1


// ────────────────────────────────────────────────────────────
// 2️⃣  GENERIC WITH ARRAY INPUT: <T>(item: T[])
// ────────────────────────────────────────────────────────────
// Instead of two separate items, this version accepts an array.
// T[] means "an array of whatever type T turns out to be."

function makeArray2<T>(item: T[]): T[] {
    return item;
}

console.log(makeArray2([1, 2, 3, 4, 5]));                    // T = number  → [1, 2, 3, 4, 5]
console.log(makeArray2(['hello', 'world', 'kingsley']));      // T = string  → ['hello', 'world', 'kingsley']


// ────────────────────────────────────────────────────────────
// 3️⃣  WHY NOT JUST USE `any`? — The Danger of Losing Type Safety
// ────────────────────────────────────────────────────────────
// `any` also works at runtime, BUT it DISABLES TypeScript's
// type checking. You lose all intellisense & safety benefits.
//
// With `any`, TypeScript stops protecting you from mistakes:

function makeArrayWithAny(anyItem: any) {
    return anyItem;
}

// These both work at runtime, just like the generic version...
console.log(makeArrayWithAny([1, 2, 3, 4, 5]));
console.log(makeArrayWithAny(['hello', 'world', 'kingsley']));

// But `any` has no guardrails — TypeScript won't catch bad code:
// makeArrayWithAny(99999).toUpperCase()  ← This would CRASH at runtime,
//                                          but TypeScript wouldn't warn you!
//
// With generics → TypeScript KNOWS the return type, so it CAN warn you. ✅
// With `any`    → TypeScript has NO idea what comes back.               ❌


// ────────────────────────────────────────────────────────────
// 4️⃣  GENERICS WITH INTERFACES: Typed API Responses
// ────────────────────────────────────────────────────────────
// Real-world use case: fetching data from a database or API.
// You want ONE fetch function that can return DIFFERENT shapes of data.

interface Product {
    name: string;
    price: number;
}

interface User {
    username: string;
    email: string;
}

// By passing <T>, the caller TELLS the function what shape to expect back.
// `as T` is a type assertion — it says "trust me, this data is of type T".
async function fetchFromDB<T>(): Promise<T> {
    // In real code, this would be a database/API call.
    // We cast the result to T so TypeScript treats it as that type.
    return {
        name: 'Broken product',
        price: 100,
    } as T;
}

// ✅ Call it with <Product> → TypeScript knows the result has .name and .price
const result = await fetchFromDB<Product>();
console.log(result.name);   // ✅ TypeScript is happy — Product HAS a .name
console.log(result.price);  // ✅ TypeScript is happy — Product HAS a .price

// ✅ Same function, different type — call it with <User>
const userResult = await fetchFromDB<User>();
console.log(userResult.username); // ✅ TypeScript knows <User> has .username
// console.log(userResult.price); // ❌ Would error — User does NOT have .price


// ────────────────────────────────────────────────────────────
// 📌 QUICK RECAP — When to Use Generics
// ────────────────────────────────────────────────────────────
//
//  ✅ Use Generics when:
//     - A function should work with MULTIPLE types but still be type-safe
//     - You want TypeScript to INFER the return type automatically
//     - You're building reusable utilities (e.g. wrappers, fetchers, data structures)
//
//  ❌ Avoid `any` when:
//     - You want TypeScript to actually PROTECT you from bugs
//     - You want intellisense/autocomplete to work correctly
//
// Generic = Flexible + Safe 🔒
// any     = Flexible + Dangerous ⚠️
// ────────────────────────────────────────────────────────────