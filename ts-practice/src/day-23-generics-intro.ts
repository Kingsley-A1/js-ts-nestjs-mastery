// ============================================================
// 📘 DAY 23: Generics Intro — Practice File
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================
// NORTH STAR: Every example here builds toward Day 24 (Constraints).
// By the end, you should feel that adding `<T extends SomeType>`
// is just a natural guardrail you add to what you already know.
// ============================================================

// ─────────────────────────────────────────────────────────────
// SECTION 1: The Problem — Why NOT `any`?
// ─────────────────────────────────────────────────────────────

// ❌ BAD: Three identical factories. Screaming DRY violation.
function wrapString(value: string): string[] { return [value]; }
function wrapNumber(value: number): number[] { return [value]; }
// function wrapBoolean(value: boolean): boolean[] { return [value]; }
// ... and so on for every type forever

// ❌ WRONG FIX: `any` kills all type safety
function wrapAny(value: any): any[] { return [value]; }
const bad = wrapAny("hello");
// bad[0].nonExistentMethod(); // TypeScript won't catch this — runtime crash!

// ─────────────────────────────────────────────────────────────
// SECTION 2: The Solution — The Generic `<T>` Declaration
// ─────────────────────────────────────────────────────────────

// ✅ ONE factory that handles ALL types safely
// Reading it aloud:
// "wrap is a function that introduces a type placeholder T.
//  It takes a value of type T and returns an array of T."
function wrap<T>(value: T): T[] {
  return [value];
}

// Explicit type argument (you tell TypeScript what T is)
const wrappedString = wrap<string>("NestJS");     // Returns: string[]
const wrappedNumber = wrap<number>(2026);          // Returns: number[]
const wrappedBool = wrap<boolean>(true);         // Returns: boolean[]

console.log("Wrapped String:", wrappedString);
console.log("Wrapped Number:", wrappedNumber);
console.log("Wrapped Bool:  ", wrappedBool);

// ─────────────────────────────────────────────────────────────
// SECTION 3: Type Inference — Let TypeScript Fill In `T`
// ─────────────────────────────────────────────────────────────

// TypeScript reads the argument and infers T automatically
const inferredStr = wrap("TypeScript");   // T inferred as: string
const inferredNum = wrap(42);             // T inferred as: number
const inferredObj = wrap({ id: 1, name: "Kingsley" }); // T inferred as: object

// Both styles produce IDENTICAL results.
// Inferred style is cleaner — use it when T is obvious from context.
console.log("\nInferred String:", inferredStr);
console.log("Inferred Object:", inferredObj);

// ─────────────────────────────────────────────────────────────
// SECTION 4: Single Parameter Generics — Array Utilities
// ─────────────────────────────────────────────────────────────

// Pattern: T[] as parameter → T as return
// "Give me an array of anything, I'll give back one item of that same thing"

function getFirst<T>(arr: T[]): T {
  return arr[0]!; // The ! says: I know this exists (non-null assertion)
}

function getLast<T>(arr: T[]): T {
  return arr[arr.length - 1]!;
}

function getMiddle<T>(arr: T[]): T {
  return arr[Math.floor(arr.length / 2)]!;
}

const skills = ["TypeScript", "NestJS", "PostgreSQL", "Docker"];
const scores = [85, 92, 78, 100, 60];

console.log("\n── Array Utilities ──");
console.log("First skill:", getFirst(skills));   // TypeScript — T inferred as string
console.log("Last score: ", getLast(scores));    // 60          — T inferred as number
console.log("Middle skill:", getMiddle(skills)); // PostgreSQL

// ─────────────────────────────────────────────────────────────
// SECTION 5: Multiple Type Parameters `<T, U>`
// ─────────────────────────────────────────────────────────────

// T and U are INDEPENDENT placeholders — they do not have to match
function createPair<K, V>(key: K, value: V): { key: K; value: V } {
  return { key, value };
}

const pair1 = createPair("username", "Kingsley");      // K=string, V=string
const pair2 = createPair("userId", 101);               // K=string, V=number
const pair3 = createPair("isAdmin", true);             // K=string, V=boolean
const pair4 = createPair(1, ["read", "write"]);        // K=number, V=string[]

console.log("\n── Key-Value Pairs ──");
console.log(pair1); // { key: 'username', value: 'Kingsley' }
console.log(pair2); // { key: 'userId', value: 101 }
console.log(pair3);
console.log(pair4);

// ─────────────────────────────────────────────────────────────
// SECTION 6: Generic Interfaces — The NestJS Core Pattern
// ─────────────────────────────────────────────────────────────

// ONE interface to wrap every API response — user, product, order, anything
interface ApiResponse<T> {
  success: boolean;
  data: T;          // T = the actual payload — changes per endpoint
  message: string;
  statusCode: number;
}

// Helper factory functions with correct generic return types
function createSuccess<T>(data: T, message: string): ApiResponse<T> {
  return { success: true, data, message, statusCode: 200 };
}

function createError(message: string, code: number = 500): ApiResponse<null> {
  return { success: false, data: null, message, statusCode: code };
}

// Simple interfaces for demo
interface User { id: number; name: string; email: string; }
interface Product { id: number; name: string; price: number; }

// T = User
const userResponse = createSuccess<User>(
  { id: 1, name: "Kingsley", email: "king@dev.com" },
  "User fetched successfully"
);

// T = Product[] (an array is a perfectly valid type argument)
const productsResponse = createSuccess<Product[]>(
  [
    { id: 1, name: "Laptop", price: 1500000 },
    { id: 2, name: "Phone", price: 800000 },
  ],
  "Products fetched"
);

// T = null (error case — no data)
const notFoundResponse = createError("User not found", 404);

console.log("\n── API Responses ──");
console.log("User response status:", userResponse.statusCode);
console.log("User name via .data:", userResponse.data.name);   // ✅ Full autocomplete!
console.log("Products count:", productsResponse.data.length);  // ✅ TypeScript knows it's an array
console.log("Error response:", notFoundResponse.message, `(${notFoundResponse.statusCode})`);

// ─────────────────────────────────────────────────────────────
// SECTION 7: Generic Transformation — `<T, U>` with Callbacks
// ─────────────────────────────────────────────────────────────

// "Give me an array of T items and a conversion function.
//  I'll return an array of U items."
// This is a type-safe wrapper around .map() — understand this and
// you understand how TypeScript's built-in map works.

function transform<T, U>(arr: T[], fn: (item: T) => U): U[] {
  return arr.map(fn);
}

// string[] → number[] (lengths)
const wordLengths = transform(
  ["TypeScript", "NestJS", "Generics"],
  (word) => word.length
);

// number[] → string[] (labels)
const labels = transform(
  [1, 2, 3],
  (n) => `Item ${n}`
);

// number[] → boolean[] (truthy check)
const flags = transform(
  [10, 0, 5, 0, 3],
  (n) => n > 0
);

console.log("\n── Transformations ──");
console.log("Word lengths:", wordLengths);   // [10, 6, 8]
console.log("Labels:", labels);              // ["Item 1", "Item 2", "Item 3"]
console.log("Truthy flags:", flags);         // [true, false, true, false, true]

// ─────────────────────────────────────────────────────────────
// SECTION 8: Generic Class — The Stack
// ─────────────────────────────────────────────────────────────

// A Stack is Last-In, First-Out (LIFO) — like a stack of plates.
// Generics make it work with ANY type while staying fully type-safe.

class Stack<T> {
  // The internal store — a typed array
  private items: T[] = [];

  // PUSH: add one item to the top
  push(item: T): void {
    this.items.push(item);
  }

  // POP: remove and return the top item
  pop(): T | undefined {
    return this.items.pop();
  }

  // PEEK: look at the top without removing it
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // SIZE: how many items are in the stack
  get size(): number {
    return this.items.length;
  }

  // IS EMPTY: clean boolean check
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// A stack that ONLY holds numbers
const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
// numberStack.push("hello"); // ❌ Error: string not assignable to number

// A stack that ONLY holds strings
const taskQueue = new Stack<string>();
taskQueue.push("Validate input");
taskQueue.push("Write to DB");
taskQueue.push("Send email");

console.log("\n── Generic Stack ──");
console.log("Number stack size:", numberStack.size);     // 3
console.log("Top of stack:", numberStack.peek());         // 30
console.log("Popped:", numberStack.pop());                // 30
console.log("New top:", numberStack.peek());              // 20

console.log("Next task:", taskQueue.pop());               // "Send email"
console.log("Task queue size:", taskQueue.size);          // 2

// ─────────────────────────────────────────────────────────────
// 🔮 SECTION 9: Day 24 Preview — Constraints
// ─────────────────────────────────────────────────────────────

// Right now, T accepts ANYTHING — even types with no properties.
// Tomorrow you'll add a GUARDRAIL: "T must have at least these properties."
// This is called a CONSTRAINT and uses the `extends` keyword.

// PREVIEW (read but don't worry about mastering yet):
// function logName<T extends { name: string }>(item: T): void {
//   console.log(item.name); // Safe! TS knows T has `name` because of the constraint
// }
//
// logName({ name: "Kingsley", age: 25 });  // ✅ Has 'name'
// logName({ id: 1, price: 100 });          // ❌ Missing 'name' property

// Today: T is a wide-open slot.
// Tomorrow: T extends SomeShape — a slot with a guardrail.
// That's the ONLY conceptual leap from today to tomorrow.
