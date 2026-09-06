// ============================================================
// 📘 DAY 18: Objects & Type Aliases — Practice File
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================
// ✅ Valid — matches every required field exactly
const kingsley = {
    id: 1,
    name: "Kingsley",
    email: "king@dev.com",
    role: "admin",
    isActive: true,
    createdAt: new Date(),
};
console.log("User:", kingsley);
// ✅ Both valid — optional fields can be omitted
const laptop = {
    id: 1,
    name: "MacBook Pro",
    price: 1500000,
    category: "Electronics",
    tags: ["laptop", "apple", "work"],
    inStock: true,
};
const phone = {
    id: 2,
    name: "iPhone 15",
    price: 800000,
    category: "Electronics",
    tags: ["phone", "apple"],
    inStock: true,
    description: "Latest iPhone with 48MP camera",
    discount: 5,
};
console.log("\nLaptop:", laptop.name, "| Has description?", !!laptop.description);
console.log("Phone:", phone.name, "| Discount:", phone.discount + "%");
const record = {
    id: 101,
    createdAt: new Date("2026-01-01"),
    name: "Kingsley",
    email: "king@dev.com",
};
// record.id = 999;       // ❌ Error: Cannot assign to 'id' — it's readonly
record.name = "King"; // ✅ Fine — name is mutable
console.log("\nRecord ID (immutable):", record.id);
console.log("Updated Name:", record.name);
const userWithAddress = {
    id: 1,
    name: "Kingsley",
    address: {
        street: "12 Tech Lane",
        city: "Calabar",
        state: "Cross River",
        country: "Nigeria",
        postalCode: "540001",
    },
};
// Deep property access — TypeScript provides autocomplete at every level
console.log("\nCity:", userWithAddress.address.city);
console.log("Country:", userWithAddress.address.country);
const newOrder = {
    orderId: "ORD-001",
    userId: 1,
    items: [laptop, phone],
    totalAmount: laptop.price + phone.price,
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
    isDeleted: false,
};
console.log("\nOrder ID:", newOrder.orderId);
console.log("Order Total: ₦" + newOrder.totalAmount.toLocaleString());
console.log("Status:", newOrder.status);
// Demonstrate all 5 types
const electronicsCategory = {
    id: 1,
    name: "Electronics",
    slug: "electronics",
};
const userApiResponse = {
    success: true,
    data: kingsley,
    message: "User fetched successfully",
    statusCode: 200,
    timestamp: new Date().toISOString(),
};
const paginatedProducts = {
    items: [laptop, phone],
    total: 50,
    page: 1,
    pageSize: 2,
    hasNextPage: true,
};
console.log("\n── 5 Type Alias Snapshot ──");
console.log("User:", kingsley.name, "|", kingsley.role);
console.log("Product:", laptop.name, "| ₦" + laptop.price.toLocaleString());
console.log("Category:", electronicsCategory.name, "(/" + electronicsCategory.slug + ")");
console.log("API Response:", userApiResponse.message, "(" + userApiResponse.statusCode + ")");
console.log("Pagination: Page", paginatedProducts.page, "| Has more?", paginatedProducts.hasNextPage);
// ─────────────────────────────────────────────────────────────
// SECTION 7: Functions That Accept Typed Objects
// ─────────────────────────────────────────────────────────────
// NestJS services receive and return typed objects like this every day
function getUserDisplayName(user) {
    return `${user.name} (${user.role})`; // e.g. "Kingsley (admin)"
}
function deactivateUser(user) {
    return { ...user, isActive: false }; // spread + override — immutable update
}
function isAdmin(user) {
    return user.role === "admin";
}
function getAffordableProducts(products, budget) {
    return products.filter(p => p.price <= budget);
}
console.log("\n── Typed Function Results ──");
console.log("Display Name:", getUserDisplayName(kingsley));
console.log("Is Admin?", isAdmin(kingsley));
console.log("Deactivated:", deactivateUser(kingsley).isActive); // false
console.log("Affordable (₦900k):", getAffordableProducts([laptop, phone], 900000).map(p => p.name));
//What is hppening here with the key: string
const appConfig = {
    appName: "NestMastery API",
    port: 3000,
    debug: true,
    dbHost: "localhost",
    dbPort: 5432,
    useSsl: false,
};
function getConfigValue(config, key) {
    return config[key];
}
console.log("\n── App Config ──");
console.log("App Name:", getConfigValue(appConfig, "appName"));
console.log("Port:", getConfigValue(appConfig, "port"));
console.log("Missing Key:", getConfigValue(appConfig, "nonExistent")); // undefined
// A valid partial update — only include what's changing
const patchData = {
    name: "King Updated",
    isActive: false,
};
// No id, no email, no role — all optional via Partial<User>
function updateUser(user, updates) {
    return { ...user, ...updates }; // merge updates onto existing user
}
const updatedKingsley = updateUser(kingsley, patchData);
console.log("\nUpdated User:", updatedKingsley.name, "| Active:", updatedKingsley.isActive);
const activeGameCache = {
    cacheId: 1,
    playerName: "King",
    isPaused: false,
    firstScore: 1000,
    secondScore: 2000,
    thirdScore: 3000,
    finalScore: 6000,
    level: 3,
    difficulty: "hard",
    gameMode: "multiplayer",
    isAdvancedMode: true,
    playerBadge: "Elite",
};
console.log(activeGameCache);
const auditedProduct = {
    title: "Product 1",
    price: 100,
    createdBy: "Kingsley",
    updatedAt: "2022-01-01",
};
const databaseRow = {
    id: 101,
    email: "king@solopreneur.dev",
    subscription: "Pro",
    lifetimeValue: 1500
};
console.log(databaseRow);
function extractData(row, fieldName) {
    //const table = row as DbConfig;
    return row[fieldName];
}
console.log(extractData(databaseRow, "email"));
console.log(extractData(databaseRow, "subscription"));
export {};
//# sourceMappingURL=day-18-objects-and-type-alias.js.map