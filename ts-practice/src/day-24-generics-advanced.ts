// ============================================================
// 📘 DAY 24: Generics Advanced — Practice File
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================
// UPGRADE: Today we add GUARDRAILS to the open <T> slots from Day 23.
// We also layer deeper on Transformer and Stack.
//
// 🔴 = By Heart (must write from memory)
// 🟡 = Good to Know (understand, outsource syntax)
// 🔵 = Recognize (just know it exists)
// ============================================================

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 1: Constraints — The Problem & Solution
// ─────────────────────────────────────────────────────────────

// ❌ WITHOUT a constraint — T is wide open, TypeScript can't trust it
// function printName<T>(item: T): void {
//   console.log(item.name); // Error! T could be number, boolean...
// }

// ✅ WITH a constraint — T must at least have { name: string }
function printName<T extends { name: string }>(item: T): void {
  console.log(item.name); 
  // Safe! The guardrail guarantees `name` exists.
}

printName({ name: "Kingsley", role: "engineer" }); // ✅ Has 'name'
printName({ name: "NestJS", version: 10 });        // ✅ Has 'name'
// printName({ id: 1 });                           // ❌ Missing 'name'
// printName(42);                                   // ❌ number has no 'name'

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 2: Constraining to an Interface
// ─────────────────────────────────────────────────────────────

// Define a minimum shape that all "database entities" must have
interface HasId {
  id: number;
}

// This function works on ANY array of items that have an `id`
function findById<T extends HasId>(items: T[], targetId: number): T | undefined {
  return items.find(item => item.id === targetId);
}

// Works with Users
interface User { id: number; name: string; email: string; }
const users: User[] = [
  { id: 1, name: "Kingsley", email: "king@dev.com" },
  { id: 2, name: "Alice", email: "alice@dev.com" },
];

// Works with Products — same function, different data shape
interface Product { id: number; name: string; price: number; }
const products: Product[] = [
  { id: 101, name: "Laptop", price: 1500000 },
  { id: 102, name: "Phone", price: 800000 },
];

console.log("Found User:", findById(users, 1));
console.log("Found Product:", findById(products, 102));

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 3: keyof — Extract Property Names as a Type
// ─────────────────────────────────────────────────────────────

// keyof turns an object type into a union of its key names
type UserKeys = keyof User; // "id" | "name" | "email"

// The most important pattern: safe property access
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const king = { id: 1, name: "Kingsley", email: "king@dev.com", active: true };

const userName  = getProperty(king, "name");    // type: string
const userId    = getProperty(king, "id");      // type: number
const isActive  = getProperty(king, "active");  // type: boolean
// const bad    = getProperty(king, "address"); // ❌ "address" is not a key

console.log("\n── keyof Demos ──");
console.log("Name:", userName);
console.log("ID:", userId);
console.log("Active:", isActive);

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 4: Constrained Transformer (Day 23 → Day 24)
// ─────────────────────────────────────────────────────────────
//
// Day 23 version: transform<T, U>(arr: T[], fn: (item: T) => U): U[]
//   → T was wide open. You could pass ["hello", "world"] or anything.
//
// Day 24 upgrade: T must extend a database entity shape.
//   → Now only structured data with id/createdAt can enter the machine.

interface DbEntity {
  id: number;
  createdAt: string;
}

// The Constrained Transformer — only accepts database entities
function transformEntities<T extends DbEntity, U>(
  entities: T[],
  fn: (entity: T) => U
): U[] {
  return entities.map(fn);
}

// Build a type that extends DbEntity (has id + createdAt, plus extras)
interface UserRecord extends DbEntity {
  name: string;
  email: string;
}

const userRecords: UserRecord[] = [
  { id: 1, name: "Kingsley", email: "king@dev.com", createdAt: "2026-01-01" },
  { id: 2, name: "Alice",    email: "alice@dev.com", createdAt: "2026-02-15" },
  { id: 3, name: "Bob",      email: "bob@dev.com",   createdAt: "2026-03-20" },
];

// Transformation 1: UserRecord[] → string[] (extract names)
const names = transformEntities(userRecords, (u) => u.name);

// Transformation 2: UserRecord[] → object[] (build display cards)
const cards = transformEntities(userRecords, (u) => ({
  label: `${u.name} (${u.email})`,
  joinedOn: u.createdAt,
}));

// Transformation 3: UserRecord[] → number[] (extract IDs)
const ids = transformEntities(userRecords, (u) => u.id);

// ❌ This FAILS — plain strings don't extend DbEntity
// transformEntities(["hello", "world"], s => s.length);

console.log("\n── Constrained Transformer ──");
console.log("Names:", names);
console.log("Cards:", cards);
console.log("IDs:", ids);

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 5: Constrained Stack (Day 23 → Day 24)
// ─────────────────────────────────────────────────────────────
//
// Day 23 version: class Stack<T> — T was wide open
//   → You could push anything: numbers, strings, objects, undefined
//
// Day 24 upgrade: T must extend HasId
//   → Now we can ADD a findById method because every item is guaranteed
//     to have an `id` property. Without the constraint, this is impossible.

class EntityStack<T extends HasId> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // 🆕 NEW METHOD — only possible BECAUSE of the constraint
  // Without `T extends HasId`, writing `item.id` would be an error.
  findById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }
}

// Build a stack of Users (Users have id — satisfies HasId)
const userStack = new EntityStack<User>();
userStack.push({ id: 1, name: "Kingsley", email: "king@dev.com" });
userStack.push({ id: 2, name: "Alice", email: "alice@dev.com" });
userStack.push({ id: 3, name: "Bob", email: "bob@dev.com" });

// The new findById method — only works because T extends HasId
const foundUser = userStack.findById(2);

// ❌ This would FAIL — strings don't have `id`
// const badStack = new EntityStack<string>();

console.log("\n── Constrained Stack ──");
console.log("Stack size:", userStack.size);
console.log("Top:", userStack.peek());
console.log("Found by ID 2:", foundUser);
console.log("Popped:", userStack.pop());
console.log("New size:", userStack.size);

// ─────────────────────────────────────────────────────────────
// 🟡 SECTION 6: Generic Defaults
// ─────────────────────────────────────────────────────────────

// Give T a default value — just like default function parameters
interface ApiResponse<T = null> {
  success: boolean;
  data: T;
  message: string;
}

// When T is not specified, it defaults to null
const errorResp: ApiResponse = {
  success: false,
  data: null,
  message: "Not found",
};

// When T is specified, it overrides the default
const userResp: ApiResponse<User> = {
  success: true,
  data: { id: 1, name: "Kingsley", email: "king@dev.com" },
  message: "User fetched",
};

console.log("\n── Generic Defaults ──");
console.log("Error data:", errorResp.data);      // null
console.log("User data:", userResp.data.name);   // "Kingsley"

// ─────────────────────────────────────────────────────────────
// 🟡 SECTION 7: Multiple Constraints with &
// ─────────────────────────────────────────────────────────────

interface Named { name: string; }
interface Timestamped { createdAt: string; }

// T must have BOTH name AND createdAt
function logEntry<T extends Named & Timestamped>(item: T): string {
  return `[${item.createdAt}] ${item.name}`;
}

console.log("\n── Multiple Constraints ──");
console.log(logEntry({ name: "Deploy v2.0", createdAt: "2026-05-19" }));

// ─────────────────────────────────────────────────────────────
// 🔵 SECTION 8: Recognize — `infer` (Read, Don't Drill)
// ─────────────────────────────────────────────────────────────

// "If T is a Promise of something, figure out what that something is"
type Unwrap<T> = T extends Promise<infer U> ? U : T;

type A = Unwrap<Promise<string>>;  // string
type B = Unwrap<Promise<number>>;  // number
type C = Unwrap<boolean>;          // boolean (not a Promise → returns as-is)

// You will rarely write `infer` yourself.
// But you'll see it in NestJS internals and utility libraries.
// Just know it means: "TypeScript, figure out this type for me."
