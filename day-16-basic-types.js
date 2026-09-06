// ============================================================
// 📘 DAY 16: Basic Types — string, number, boolean
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================
// ─────────────────────────────────────────────────────────────
// SECTION 1: Explicit Type Annotations
// ─────────────────────────────────────────────────────────────
// Exercise 1: string
let firstName = "Kingsley";
let lastName = "Madubugwu";
let fullName = `${firstName} ${lastName}`;
console.log("Full Name:", fullName);
// Exercise 2: number
let age = 25;
let price = 4999.99;
let discount = 0.15;
let finalPrice = price - price * discount;
console.log("Final Price After Discount: ₦" + finalPrice.toFixed(2));
// Exercise 3: boolean
let isLoggedIn = true;
let hasAdminAccess = false;
let isVerified = true;
console.log("Is user logged in?", isLoggedIn);
console.log("Has admin access?", hasAdminAccess);
// ─────────────────────────────────────────────────────────────
// SECTION 2: Type Inference (TypeScript reads the value)
// ─────────────────────────────────────────────────────────────
// TypeScript infers the types from the assigned values
let country = "Nigeria"; // inferred: string
let foundingYear = 1960; // inferred: number
let isIndependent = true; // inferred: boolean
// The type is LOCKED once inferred — the lines below would cause errors:
// country = 100;         // ❌ Type 'number' is not assignable to type 'string'
// foundingYear = "1960"; // ❌ Type 'string' is not assignable to type 'number'
console.log(`${country} gained independence in ${foundingYear}.`);
// ─────────────────────────────────────────────────────────────
// SECTION 3: Typed Function — NestJS-Style
// ─────────────────────────────────────────────────────────────
// This mimics how a NestJS controller receives user data
function createUserProfile(username, age, isVerified) {
    const status = isVerified ? "✅ Verified" : "❌ Not Verified";
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
const email = "kingsley@nestmastery.dev";
const phoneNumber = "+234-800-0000-000";
const productName = "NestJS Pro Course";
const coursePrice = 25000;
const studentCount = 1024;
const averageRating = 4.8;
const isPremium = true;
const isPublished = true;
const hasCertificate = true;
const isDiscounted = false;
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
let dangerousVariable = "hello";
dangerousVariable = 999; // TypeScript looks away
dangerousVariable = false; // TypeScript still says nothing
// This is why any is banned in professional NestJS codebases
// ✅ GOOD — stay typed:
let safeVariable = "hello";
let myObject = {
    name: 'Kingsley',
    age: 25,
    location: 'Nigeria',
    isVerified: true,
};
console.log(`My name is ${myObject.name}, I am ${myObject.age} years old, and I am from ${myObject.location}.`);
let userResponse = {
    data: myObject,
    message: 'User profile fetched successfully',
    success: true,
};
console.log(userResponse);
export {};
//# sourceMappingURL=day-16-basic-types.js.map