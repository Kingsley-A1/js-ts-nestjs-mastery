// ============================================================
// 📘 DAY 16: Basic Types — string, number, boolean
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================

// ─────────────────────────────────────────────────────────────
// SECTION 1: Explicit Type Annotations
// ─────────────────────────────────────────────────────────────

// Exercise 1: string
let firstName: string = "Kingsley";
let lastName: string = "Madubugwu";
let fullName: string = `${firstName} ${lastName}`;
console.log("Full Name:", fullName);

// Exercise 2: number
let age: number = 25;
let price: number = 4999.99;
let discount: number = 0.15;
let finalPrice: number = price - price * discount;
console.log("Final Price After Discount: ₦" + finalPrice.toFixed(2));

// Exercise 3: boolean
let isLoggedIn: boolean = true;
let hasAdminAccess: boolean = false;
let isVerified: boolean = true;
console.log("Is user logged in?", isLoggedIn);
console.log("Has admin access?", hasAdminAccess);

// ─────────────────────────────────────────────────────────────
// SECTION 2: Type Inference (TypeScript reads the value)
// ─────────────────────────────────────────────────────────────

// TypeScript infers the types from the assigned values
let country = "Nigeria";        // inferred: string
let foundingYear = 1960;        // inferred: number
let isIndependent = true;       // inferred: boolean

// The type is LOCKED once inferred — the lines below would cause errors:
// country = 100;         // ❌ Type 'number' is not assignable to type 'string'
// foundingYear = "1960"; // ❌ Type 'string' is not assignable to type 'number'

console.log(`${country} gained independence in ${foundingYear}.`);

// ─────────────────────────────────────────────────────────────
// SECTION 3: Typed Function — NestJS-Style
// ─────────────────────────────────────────────────────────────

// This mimics how a NestJS controller receives user data
function createUserProfile(
  username: string,
  age: number,
  isVerified: boolean
): string {
  const status: string = isVerified ? "✅ Verified" : "❌ Not Verified";
  return `Username: ${username} | Age: ${age} | Status: ${status}`;
}

console.log(createUserProfile("king99", 25, true));
console.log(createUserProfile("guest", 30, false));

// ❌ Uncomment these to see TypeScript catch the errors:
// createUserProfile(25, "king99", true);       // Wrong types
// createUserProfile("king99", "25", true);     // age must be a number
// createUserProfile("king99", 25, "true");     // isVerified must be a boolean

// ─────────────────────────────────────────────────────────────
// SECTION 4: Real-World Variable Set (10 Typed Variables)
// ─────────────────────────────────────────────────────────────

const email: string = "kingsley@nestmastery.dev";
const phoneNumber: string = "+234-800-0000-000";
const productName: string = "NestJS Pro Course";
const coursePrice: number = 25000;
const studentCount: number = 1024;
const averageRating: number = 4.8;
const isPremium: boolean = true;
const isPublished: boolean = true;
const hasCertificate: boolean = true;
const isDiscounted: boolean = false;

console.log("\n── Product Snapshot ──");
console.log("Product:", productName);
console.log("Price: ₦" + coursePrice);
console.log("Rating:", averageRating, "⭐");
console.log("Students:", studentCount);
console.log("Premium:", isPremium);
console.log("Published:", isPublished);

// ─────────────────────────────────────────────────────────────
// SECTION 5: The `any` Danger — DO NOT USE IN PRODUCTION
// ─────────────────────────────────────────────────────────────

// ❌ BAD — any turns off all safety:
let dangerousVariable: any = "hello";
dangerousVariable = 999;    // TypeScript looks away
dangerousVariable = false;  // TypeScript still says nothing
// This is why any is banned in professional NestJS codebases

// ✅ GOOD — stay typed:
let safeVariable: string = "hello";
// safeVariable = 999; // ❌ TypeScript catches this immediately

// ─────────────────────────────────────────────────────────────
// ❓ ANSWER YOUR COMPREHENSION QUESTIONS IN THE COMMENTS BELOW
// ─────────────────────────────────────────────────────────────

// Q1: What is the difference between:
//   let a = "hello";       → TypeScript INFERS the type as string
//   let b: string = "hello"; → We EXPLICITLY annotate the type
// Both are locked as strings. Explicit annotation is clearer to teammates.

// Q2: Will this compile?
//   let score: number = 100;
//   score = score + " points"; // ❌ No — TS error: string not assignable to number
// Fix: let result: string = score + " points"; // Use a NEW typed variable

// Q3: boolean prevents: using 1/0, "true"/"false", or null as a boolean flag.

// Q4: Inference example:
//   let city = "Calabar"; // TypeScript infers: string

// Q5: The JSON sends age as "25" (string) not 25 (number). TypeScript will show:
//   "Argument of type 'string' is not assignable to parameter of type 'number'"
//   This is found at COMPILE TIME — before the bug ever reaches production.


interface myObject {
    name: string;
    age: number;
    location: string;
    isVerified: boolean;
}

let myObject: myObject = {
    name: 'Kingsley',
    age: 25,
    location: 'Nigeria',
    isVerified: true,
}


console.log(`My name is ${myObject.name}, I am ${myObject.age} years old, and I am from ${myObject.location}.`)

//Making an inerfec with a Generic Type

interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}
let userResponse: ApiResponse<myObject> = {
    data: myObject,
    message: 'User profile fetched successfully',
    success: true,
}

console.log(userResponse)