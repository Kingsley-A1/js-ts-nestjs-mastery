// ============================================================
// 📘 DAY 17: Arrays & Tuples — Practice File
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================

// ─────────────────────────────────────────────────────────────
// SECTION 1: Typed Arrays — string[], number[], boolean[]
// ─────────────────────────────────────────────────────────────

// Syntax: Type[]
let techSkills: string[] = ["TypeScript", "NestJS", "PostgreSQL", "Docker"];
let testScores: number[] = [88, 92, 75, 100, 60];
let featureFlags: boolean[] = [true, false, true, true, false];
let anyFeattureFlags: any[] = [true, false, 1, "hello", null, undefined, {}];
console.log("Skills:", techSkills);
console.log("Scores:", testScores);
console.log("Flags:", featureFlags);
console.log("Any Flags:", anyFeattureFlags);

// Alternative syntax — Array<Type> (Generic form — same thing)
function printArray<T>(arr: T[]) {
    return arr;
}
let courseNames = printArray<string>(["Algorithms", "System Design", "NestJS"]);
console.log("Course Names:", courseNames);
// ─────────────────────────────────────────────────────────────
// SECTION 2: Array Type Safety In Action
// ─────────────────────────────────────────────────────────────

// .push() is type-safe
techSkills.splice(1, 0, "Redis");         // ✅ string — allowed
// techSkills.push(42);           // ❌ Error: number is not assignable to string
console.log("Tech Skills:", techSkills);
// .map() — returned array is also typed
const upperSkills: string[] = techSkills.map(skill => skill.toUpperCase());
console.log("Uppercased:", upperSkills);
// TS knows each `skill` is a string, so .toUpperCase() is available

// .filter() — typed result
const highScores: number[] = testScores.filter(score => score >= 80);
console.log("High Scores:", highScores);

// .find() — returns string | undefined
const foundSkill: string | undefined = techSkills.find(s => s === "NestJS");
console.log("Found:", foundSkill);

const foundSkill2 = techSkills.find(s => s === "Next.js");
console.log("Found 2:", foundSkill2);
// .reduce() — typed accumulator
const totalScore: number = testScores.reduce((acc, score) => acc + score, 0);
const average: number = totalScore / testScores.length;
console.log("Average Score:", average.toFixed(2));

const totalScore2: number = testScores.reduce((acc, score) => acc + score, 0);
console.log("Total Score:", totalScore2);
//Explanation of reduce
//The reduce method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final value of the accumulator (which may be a DOM node, an object, an array, a number, or any other value) is returned only once.

// ─────────────────────────────────────────────────────────────
// SECTION 3: Readonly Arrays — Immutable+ Collections++
// ─────────────────────────────────────────────────────────────

// Use readonly for config/permission lists that should never change
const ALLOWED_ROLES: readonly string[] = ["admin", "editor", "viewer"];
const HTTP_METHODS: readonly string[] = ["GET", "POST", "PUT", "DELETE", "PATCH"];

// ALLOWED_ROLES.push("hacker");   // ❌ Error — readonly array is sealed
// ALLOWED_ROLES[0] = "superuser"; // ❌ Error — index is read-only

console.log("Allowed Roles:", ALLOWED_ROLES);

// You can still READ from readonly arrays
console.log("First method:", HTTP_METHODS[0]);
console.log("Has DELETE?", HTTP_METHODS.includes("DELETE")); // ✅ Fine

// ─────────────────────────────────────────────────────────────
// SECTION 4: Tuples — Fixed-Length, Mixed-Type Arrays
// ─────────────────────────────────────────────────────────────

// Syntax: [TypeA, TypeB, TypeC]
let userEntry: [number, string, boolean] = [1, "Kingsley", true];
//              id ↑    name ↑   isAdmin ↑

// Destructure — give positions meaningful names
const [userId, userName, isAdmin] = userEntry;
console.log(`\nUser #${userId}: ${userName} | Admin: ${isAdmin}`);

// Named tuple (TS 4.0+) — labels for readability
type Coordinate = [x: number, y: number, z: number];
const origin: Coordinate = [0, 0, 0];
const point: Coordinate = [10, 25, 5];
console.log("Point:", point);

// ─────────────────────────────────────────────────────────────
// SECTION 5: Tuple Type Aliases — Real-World Patterns
// ─────────────────────────────────────────────────────────────

// Pattern 1: CSV / Database Row
type UserRow = [id: number, name: string, email: string, age: number];

const users: UserRow[] = [
  [1, "Kingsley", "king@dev.com", 25],
  [2, "Alice", "alice@dev.com", 30],
  [3, "Bob", "bob@dev.com", 22],
];

// Extract just emails using map + tuple destructuring
const emails: string[] = users.map(([, , email]) => email);
console.log("\nUser Emails:", emails);

// Pattern 2: Function returning multiple values
function getMinMax(nums: number[]): [number, number] {
  return [Math.min(...nums), Math.max(...nums)];
}

const [min, max] = getMinMax(testScores);
console.log(`Min Score: ${min} | Max Score: ${max}`);

// Pattern 3: Simulate React-style useState pair
function createState<T>(initial: T): [T, (newVal: T) => void] {
  let current = initial;
  const setter = (newVal: T) => { current = newVal; };
  return [current, setter];
}

const [count, setCount] = createState<number>(0);
console.log("Initial count:", count);
setCount(5); // This won't update 'count' (closed over), but shows the typing

// ─────────────────────────────────────────────────────────────
// SECTION 6: 10 Typed Arrays (Deliverable from Plan)
// ─────────────────────────────────────────────────────────────

const studentNames: string[] = ["Kingsley", "Alice", "Bob", "Carol", "Dan"];
const studentGrades: number[] = [95, 88, 72, 100, 65];
const isPassed: boolean[] = studentGrades.map(g => g >= 70);
const permissions: readonly string[] = ["read", "write", "delete", "manage"];
const coordinates: [number, number][] = [[0, 0], [1, 5], [3, 8], [10, 2]];
const productTuple: [string, number, boolean] = ["NestJS Course", 25000, true];
const tagCloud: string[] = ["typescript", "nestjs", "backend", "api", "node"];
const monthlyRevenue: number[] = [45000, 62000, 38000, 71000, 55000, 80000];
const activeMonths: boolean[] = monthlyRevenue.map(r => r > 50000);
const matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log("\n── 10 Typed Arrays Snapshot ──");
console.log("Students:", studentNames);
console.log("Grades:", studentGrades);
console.log("Passed:", isPassed);
console.log("Permissions:", permissions);
console.log("Coordinates:", coordinates);
console.log("Product Tuple:", productTuple);
console.log("Tags:", tagCloud);
console.log("Revenue:", monthlyRevenue);
console.log("Active Months:", activeMonths);
console.log("Matrix:", matrix);

// ─────────────────────────────────────────────────────────────
// SECTION 7: 2D Arrays (Multi-Dimensional)
// ─────────────────────────────────────────────────────────────

// Access matrix cells
console.log("\n── Matrix Access ──");
console.log("Row 0:", matrix[0]);          // [1, 2, 3]
// With strict TS, matrix[1] is `number[] | undefined` — use ! when you KNOW it exists
console.log("Cell [1][2]:", matrix[1]![2]); // 6 — ! = non-null assertion (I guarantee this index exists)

// Flatten a 2D array
const flatMatrix: number[] = matrix.flat();
console.log("Flat:", flatMatrix);           // [1,2,3,4,5,6,7,8,9]

// ─────────────────────────────────────────────────────────────
// SECTION 8: NestJS Real-World Simulation
// ─────────────────────────────────────────────────────────────

// Simulating what a NestJS service method looks like
interface Product {
  id: number;
  name: string;
  price: number;
  tags: string[];       // ← typed array inside an interface
  inStock: boolean;
}

const catalogue: Product[] = [
  { id: 1, name: "Laptop", price: 450000, tags: ["electronics", "work"], inStock: true },
  { id: 2, name: "Phone", price: 120000, tags: ["electronics", "mobile"], inStock: false },
  { id: 3, name: "Desk", price: 35000, tags: ["furniture", "work"], inStock: true },
];

// NestJS service-style functions — all return typed arrays
function getInStockProducts(products: Product[]): Product[] {
  return products.filter(p => p.inStock);
}

function getProductNames(products: Product[]): string[] {
  return products.map(p => p.name);
}

function getAllTags(products: Product[]): string[] {
  return [...new Set(products.flatMap(p => p.tags))];
}

console.log("\n── NestJS-Style Array Operations ──");
console.log("In Stock:", getInStockProducts(catalogue).map(p => p.name));
console.log("Names:", getProductNames(catalogue));
console.log("All Tags:", getAllTags(catalogue));
