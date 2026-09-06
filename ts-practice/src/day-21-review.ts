// ============================================================
// 📘 DAY 21: REST DAY — Week 3 Review Practice File
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================
// This file consolidates Days 15-20.
// Run with: npx tsc --noEmit  (to type-check)
// Then:     npx tsc && node day-21-review.js  (to run)
// ============================================================

// ─────────────────────────────────────────────────────────────
// RECAP 1: Type Aliases (Day 18)
// ─────────────────────────────────────────────────────────────

// These are the building blocks. Define shapes with `type`.

type ID = string | number; // a union primitive alias (Day 20)
type Role = "admin" | "editor" | "viewer"; // a literal union alias (Day 20)
type Status = "active" | "inactive" | "banned";

// A fully composed type alias using primitives, literals, and optionals
type UserProfile = {
    readonly id: ID;
    username: string;
    email: string;
    role: Role;
    status: Status;
    bio?: string; // optional (Day 18)
    readonly createdAt: Date; // immutable (Day 18)
};

const king: UserProfile = {
    id: 1,
    username: "king_dev",
    email: "king@nestmastery.dev",
    role: "admin",
    status: "active",
    createdAt: new Date("2026-01-04"),
};

console.log("── Day 18 Recap: Type Alias ──");
console.log(`User: ${king.username} | Role: ${king.role} | Status: ${king.status}`);

type SecondID = string | number; //This is a union type
type SecondStatus = "active" | "inactive" | "banned"; // this is a union literal type
type SecondRole = "admin" | "editor" | "viewer"; // this is a union literal type

type SecondUserProfile = {
    readonly id: SecondID;
    username: string;
    email: string;
    role: SecondRole;
    status: SecondStatus;
    bio?: string; // optional (Day 18)
    readonly createdAt: Date; // immutable (Day 18)
};

const kingsley: SecondUserProfile = {
    id: "2",
    username: "kingsley_dev",
    email: "[EMAIL_ADDRESS]",
    role: "admin",
    status: "active",
    createdAt: new Date("2026-01-04"),
};

console.log("── Day 18 Second Recap: Type Alias ──");
console.log(`User: ${kingsley.username} | Role: ${kingsley.role} | Status: ${kingsley.status}`);



// ─────────────────────────────────────────────────────────────
// RECAP 2: Interfaces & extends (Day 19)
// ─────────────────────────────────────────────────────────────

// Interfaces shine for object shapes that build on each other.

interface BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}

interface Product extends BaseEntity {
    name: string;
    price: number;
    inStock: boolean;
    category: string;
}

// AdminProduct extends Product, which extends BaseEntity
// It inherits ALL properties from both parent interfaces
interface AdminProduct extends Product {
    supplierId: number;
    costPrice: number; // the price we pay, not the selling price
}

const keyboard: AdminProduct = {
    id: 10,
    name: "Keychron Q1 Pro",
    price: 95000,
    inStock: true,
    category: "Accessories",
    supplierId: 500,
    costPrice: 65000,
    createdAt: new Date(),
    updatedAt: new Date(),
};

console.log("\n── Day 19 Recap: Interface extends ──");
console.log(`Product: ${keyboard.name} | Profit: ₦${(keyboard.price - keyboard.costPrice).toLocaleString()}`);


//User Registration Using Interface and Extends
interface BaseData {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}

interface UserData extends BaseData {
    name: string;
    email: string;
    role: Role;
    status: Status;
}
//Admin Extends UserData and Adds extra properties
interface AdminData extends UserData {
    permissions: string[];
}

const user1: UserData = {
    id: 1,
    name: "Kingsley",
    email: "[EMAIL_ADDRESS]",
    role: "admin",
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
};

const admin1: AdminData = {
    id: 2,
    name: "Kingsley Admin",
    email: "[EMAIL_ADDRESS]",
    role: "admin",
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
    permissions: ["all"],
};

// ─────────────────────────────────────────────────────────────
// RECAP 3: Arrays & Tuples (Day 17)
// ─────────────────────────────────────────────────────────────

const tags: string[] = ["typescript", "nestjs", "backend"]; // typed array
const page: [number, number] = [1, 20]; // tuple: [currentPage, pageSize]
const log: [Date, string, "info" | "warn" | "error"] = [new Date(), "Server started", "info"];

console.log("\n── Day 17 Recap: Arrays & Tuples ──");
console.log(`Tags: ${tags.join(", ")}`);
console.log(`Page ${page[0]}, Size ${page[1]}`);
console.log(`[${log[2].toUpperCase()}] ${log[1]}`);

// ─────────────────────────────────────────────────────────────
// RECAP 4: Union Types & Narrowing (Day 20)
// ─────────────────────────────────────────────────────────────

// A function that accepts a Union type and handles each case explicitly
function describeValue(val: string | number | boolean): string {
    if (typeof val === "string") {
        return `String of length ${val.length}: "${val}"`;
    } else if (typeof val === "number") {
        return `Number: ${val.toFixed(2)}`;
    } else {
        // TypeScript knows val is boolean here — no check needed
        return `Boolean: ${val ? "TRUE" : "FALSE"}`;
    }
}

console.log("\n── Day 20 Recap: Union & Narrowing ──");
console.log(describeValue("Hello World"));
console.log(describeValue(99.9));
console.log(describeValue(false));

// ─────────────────────────────────────────────────────────────
// RECAP 5: Discriminated Unions (Day 20 — Advanced)
// ─────────────────────────────────────────────────────────────

type ApiSuccess<T> = {
    outcome: "success"; // the discriminant
    payload: T;
    statusCode: 200 | 201;
};

type ApiError = {
    outcome: "error"; // the discriminant
    message: string;
    statusCode: 400 | 401 | 403 | 404 | 500;
};

type ApiResult<T> = ApiSuccess<T> | ApiError;

function handleResult<T>(result: ApiResult<T>): void {
    if (result.outcome === "success") {
        // TS narrows to ApiSuccess<T> — .payload is available
        console.log(`✅ [${result.statusCode}] Success:`, result.payload);
    } else {
        // TS narrows to ApiError — .message and .statusCode are available
        console.error(`❌ [${result.statusCode}] Error: ${result.message}`);
    }
}

const successResult: ApiResult<string[]> = {
    outcome: "success",
    payload: ["user-1", "user-2", "user-3"],
    statusCode: 200,
};

const errorResult: ApiResult<never> = {
    outcome: "error",
    message: "Resource not found",
    statusCode: 404,
};

console.log("\n── Day 20 Recap: Discriminated Unions ──");
handleResult(successResult);
handleResult(errorResult);

// ─────────────────────────────────────────────────────────────
// RECAP 6: Combining Everything — A Mini Data Model
// ─────────────────────────────────────────────────────────────

// This is what real NestJS data models look like in TypeScript:

interface Order extends BaseEntity {
    customerId: number;
    products: Product[];
    status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
    totalAmount: number;
}

function summariseOrder(order: Order): string {
    return (
        `Order #${order.id} | ` +
        `Items: ${order.products.length} | ` +
        `Status: ${order.status.toUpperCase()} | ` +
        `Total: ₦${order.totalAmount.toLocaleString()}`
    );
}

const myOrder: Order = {
    id: 1001,
    customerId: king.id as number,
    products: [keyboard],
    status: "pending",
    totalAmount: keyboard.price,
    createdAt: new Date(),
    updatedAt: new Date(),
};


console.log("\n── Full Recap: Combined Data Model ──");
console.log(summariseOrder(myOrder));
console.log("\n✅ Week 3 Review Complete — You know your TypeScript Basics!");

interface Customer extends Order {
    shippingAddress: string;
    billingAddress: string;
    phoneNumber: string;
    email: string;
    orderHistory: Order[];
    deliveryNote?: string;
}

const customer: Customer = {
    id: 1002,
    customerId: king.id as number,
    products: [keyboard],
    status: "pending",
    totalAmount: keyboard.price,
    createdAt: new Date(),
    updatedAt: new Date(),
    shippingAddress: "123 Main St",
    billingAddress: "123 Main St",
    phoneNumber: "1234567890",
    email: "[EMAIL_ADDRESS]",
    orderHistory: [myOrder],
    deliveryNote: "Leave at the door",
};