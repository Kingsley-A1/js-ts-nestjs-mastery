// ============================================================
// 🏋️ DAY 21: REST DAY — Challenge Solutions
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================

// ─────────────────────────────────────────────────────────────
// ⚔️ Challenge 1 — Type the Raw JSON File
// Define interfaces for: Owner, InventoryItem, StoreAddress, Store
// Then write getDiscountedItems() and getStoreInfo()
// ─────────────────────────────────────────────────────────────

interface Owner {
    name: string;
    email: string;
    phoneNumber: string;
}

interface InventoryItem {
    name: string;
    price: number;
    discount: number;
    category: string;
    tags: string[];
    inStock: boolean;
    rating: number;
    imageUrl: string;
    description?: string;
}

interface StoreAddress {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

interface Store {
    id: number;
    name: string;
    owner: Owner;
    address: StoreAddress;
    inventory: InventoryItem[];
    isOpen: boolean;
}

function getDiscountedItems(store: Store): InventoryItem[] {
    return store.inventory.filter(item => item.discount > 0);
}

function getStoreInfo(store: Store): string {
    return `${store.name} is located in ${store.address.city}, ${store.address.country}`;
}

const store: Store = {
    id: 1,
    name: "Kingsley's Store",
    owner: {
        name: "Kingsley",
        email: "[EMAIL_ADDRESS]",
        phoneNumber: "1234567890",
    },
    address: {
        street: "123 Main St",
        city: "Lagos",
        state: "Lagos",
        postalCode: "123456",
        country: "Nigeria",
    },
    inventory: [
        {
            name: "Laptop",
            price: 100000,
            discount: 10,
            category: "Electronics",
            tags: ["electronics", "computer"],
            inStock: true,
            rating: 4.5,
            imageUrl: "https://example.com/laptop.jpg",
        },
        {
            name: "Mouse",
            price: 1000,
            discount: 0,
            category: "Accessories",
            tags: ["accessories"],
            inStock: true,
            rating: 4,
            imageUrl: "https://example.com/mouse.jpg",
        },
    ],
    isOpen: true,
};

console.log(getDiscountedItems(store));
console.log(getStoreInfo(store));
// ─────────────────────────────────────────────────────────────
// ⚔️ Challenge 2 — Write From Memory
// type Role, type ID, interface User, interface AdminUser,
// function promoteUser(), function printUser()
// ─────────────────────────────────────────────────────────────

type Role = "admin" | "editor" | "viewer";

type ID = string | number;
interface User {
    id: ID,
    username: string,
    role: Role,
    createdAt: Date
}
interface AdminUser extends User {
    permissions: string[]
}

function promoteUser(user: User): AdminUser {
    return {
        ...user,
        permissions: ["read", "write", "delete"]
    }
}

function printUser(user: User): void {
    console.log(`User: ${user.username}, Role: ${user.role} - Joined Date: ${user.createdAt.toISOString()}`);
}

const myUser: User = {
    id: 1,
    username: "Kingsley",
    role: "admin",
    createdAt: new Date()
}

console.log(printUser(myUser));
console.log(promoteUser(myUser));

// ─────────────────────────────────────────────────────────────
// ⚔️ Challenge 3 — Fix The Bugs (6 errors)
// Copy the buggy code from the challenges file, paste it here,
// then fix all 6 errors until `npx tsc --noEmit` passes cleanly.
// ─────────────────────────────────────────────────────────────


// ❌ Buggy code — identify and fix all 6 errors

type OrderStatus = "pending" | "shipped" | "delivered";

interface Customer {
    id: number;
    name: string;
    email: string;
}

interface OrderItem {
    productId: number;
    quantity: number;
    unitPrice: number;
}

interface Order {
    orderId: string;
    customer: Customer;
    items: OrderItem[];
    status: OrderStatus;
    totalAmount: number;
}

// Bug 1: Missing required field
const customer1: Customer = {
    id: 1,
    name: "Kingsley",
    email: "[EMAIL_ADDRESS]",
};

// Bug 2: Wrong type for a field
const item1: OrderItem = {
    productId: 1,  // should be a number
    quantity: 2,
    unitPrice: 15000,
};

// Bug 3: Literal type mismatch
const order1: Order = {
    orderId: "ORD-099",
    customer: customer1,
    items: [item1],
    status: "pending",   // not in OrderStatus!
    totalAmount: 30000,
};

// Bug 4: Calling a string method on a number
function formatAmount(amount: number) {
    return amount.toFixed(2);
}

// Bug 5: Function return type mismatch
function getStatus(order: Order): OrderStatus {
    return order.status;
}

// Bug 6: Accessing a non-existent property
function getCustomerEmail(customer: Customer): string {
    return customer.email;
}

console.log(formatAmount(order1.totalAmount));
console.log(getCustomerEmail(customer1));
console.log(getStatus(order1));
console.log(getCustomerEmail(customer1))