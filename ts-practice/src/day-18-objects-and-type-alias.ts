// ============================================================
// 📘 DAY 18: Objects & Type Aliases — Practice File
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================

// ─────────────────────────────────────────────────────────────
// SECTION 1: Basic Type Alias — The Blueprint Syntax
// ─────────────────────────────────────────────────────────────

// type AliasName = { property: Type, ... }
type User = {
  readonly id: number;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";  // Union type inside a type alias
  isActive: boolean;
  readonly createdAt: Date;
};

// ✅ Valid — matches every required field exactly
const kingsley: User = {
  id: 1,
  name: "Kingsley",
  email: "king@dev.com",
  role: "admin",
  isActive: true,
  createdAt: new Date(),
};

console.log("User:", kingsley);

// ❌ Missing fields — TypeScript catches it (try uncommenting)
// const broken: User = { id: 2, name: "Alice" };
// Error: Property 'email', 'role', 'isActive', 'createdAt' are missing

// ❌ Extra fields — TypeScript blocks unknown properties (try uncommenting)
// const extra: User = { id: 3, name: "Bob", email: "b@b.com", role: "viewer",
//   isActive: true, createdAt: new Date(), unknown: "???" };
// Error: Object literal may only specify known properties

// ─────────────────────────────────────────────────────────────
// SECTION 2: Optional Properties — The `?` Operator
// ─────────────────────────────────────────────────────────────

type Product = {
  readonly id: number;
  name: string;
  price: number;
  category: string;
  tags: string[];          // typed array inside a type alias
  inStock: boolean;
  description?: string;    // Optional — may or may not be present
  discount?: number;       // Optional
};

// ✅ Both valid — optional fields can be omitted
const laptop: Product = {
  id: 1,
  name: "MacBook Pro",
  price: 1500000,
  category: "Electronics",
  tags: ["laptop", "apple", "work"],
  inStock: true,
};

const phone: Product = {
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

// ─────────────────────────────────────────────────────────────
// SECTION 3: Readonly Properties — Immutable Fields
// ─────────────────────────────────────────────────────────────

type DatabaseRecord = {
  readonly id: number;          // Set once — can never be changed
  readonly createdAt: Date;
  name: string;                 // Mutable — can be updated
  email: string;
};

const record: DatabaseRecord = {
  id: 101,
  createdAt: new Date("2026-01-01"),
  name: "Kingsley",
  email: "king@dev.com",
};

// record.id = 999;       // ❌ Error: Cannot assign to 'id' — it's readonly
record.name = "King";     // ✅ Fine — name is mutable

console.log("\nRecord ID (immutable):", record.id);
console.log("Updated Name:", record.name);

// ─────────────────────────────────────────────────────────────
// SECTION 4: Nested Object Types
// ─────────────────────────────────────────────────────────────

type Address = {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode?: string;
};

type UserWithAddress = {
  id: number;
  name: string;
  address: Address;       // ← nested type alias
};

const userWithAddress: UserWithAddress = {
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

// ─────────────────────────────────────────────────────────────
// SECTION 5: Intersection Types — Merging Aliases with `&`
// ─────────────────────────────────────────────────────────────

// Timestamps mixin — shared across many entity types
type Timestamps = {
  readonly createdAt: Date;
  readonly updatedAt: Date;
};

// Soft delete mixin
type SoftDelete = {
  isDeleted: boolean;
  deletedAt?: Date;
};

// Order type = its own fields + Timestamps + SoftDelete
type Order = {
  readonly orderId: string;
  userId: number;
  items: Product[];
  totalAmount: number;
  status: "pending" | "processing" | "delivered" | "cancelled";
} & Timestamps & SoftDelete;

const newOrder: Order = {
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

// ─────────────────────────────────────────────────────────────
// SECTION 6: 5 Deliverable Type Aliases (from Plan)
// ─────────────────────────────────────────────────────────────

// 1. User — already defined above ↑

// 2. Product — already defined above ↑

// 3. Category — organisational unit
type Category = {
  readonly id: number;
  name: string;
  slug: string;           // URL-friendly version e.g. "electronics"
  parentId?: number;      // Optional parent category (subcategory support)
};

// 4. ApiResponse — generic wrapper for any endpoint response
export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message: string;
  statusCode: number;
  timestamp: string;
};

// 5. PaginatedResult — wraps any list with pagination metadata
export type PaginatedResult<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasNextPage: boolean;
};

// Demonstrate all 5 types
const electronicsCategory: Category = {
  id: 1,
  name: "Electronics",
  slug: "electronics",
};

const userApiResponse: ApiResponse<User> = {
  success: true,
  data: kingsley,
  message: "User fetched successfully",
  statusCode: 200,
  timestamp: new Date().toISOString(),
};

const paginatedProducts: PaginatedResult<Product> = {
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

function getUserDisplayName(user: User): string {
  return `${user.name} (${user.role})`;  // e.g. "Kingsley (admin)"
}

function deactivateUser(user: User): User {
  return { ...user, isActive: false };   // spread + override — immutable update
}

function isAdmin(user: User): boolean {
  return user.role === "admin";
}

function getAffordableProducts(products: Product[], budget: number): Product[] {
  return products.filter(p => p.price <= budget);
}

console.log("\n── Typed Function Results ──");
console.log("Display Name:", getUserDisplayName(kingsley));
console.log("Is Admin?", isAdmin(kingsley));
console.log("Deactivated:", deactivateUser(kingsley).isActive); // false
console.log("Affordable (₦900k):", getAffordableProducts([laptop, phone], 900000).map(p => p.name));

// ─────────────────────────────────────────────────────────────
// SECTION 8: Index Signatures — Dynamic Keys
// ─────────────────────────────────────────────────────────────

// When you don't know the exact property names upfront
type Config = {
  [key: string]: string | number | boolean;
};
//What is hppening here with the key: string
const appConfig: Config = {
  appName: "NestMastery API",
  port: 3000,
  debug: true,
  dbHost: "localhost",
  dbPort: 5432,
  useSsl: false,
};

function getConfigValue(config: Config, key: string): string | number | boolean | undefined {
  return config[key];
}

console.log("\n── App Config ──");
console.log("App Name:", getConfigValue(appConfig, "appName"));
console.log("Port:", getConfigValue(appConfig, "port"));
console.log("Missing Key:", getConfigValue(appConfig, "nonExistent")); // undefined

// ─────────────────────────────────────────────────────────────
// SECTION 9: Utility Types Preview — Partial, Required
// ─────────────────────────────────────────────────────────────

// Partial<T> — makes ALL properties optional (used in PATCH endpoints)
type UpdateUserDto = Partial<User>;

// A valid partial update — only include what's changing
const patchData: UpdateUserDto = {
  name: "King Updated",
  isActive: false,
};
// No id, no email, no role — all optional via Partial<User>

function updateUser(user: User, updates: UpdateUserDto): User {
  return { ...user, ...updates }; // merge updates onto existing user
}

const updatedKingsley = updateUser(kingsley, patchData);
console.log("\nUpdated User:", updatedKingsley.name, "| Active:", updatedKingsley.isActive);

//Building a custom caching engine for your NestJS application to temporarily store data in memory.
export type MemoryCache = {
  cacheId: number;
  [key: string]: string | number | boolean;
}

const activeGameCache: MemoryCache = {
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

//Create a type called AuditLogs that requires createdBy (string) and updatedAt (string).
type AuditLog = {
  createdBy: string;
  updatedAt: string;
}

//Create a type called Product that requires title (string) and price (number).
type Product3 = {
  title: string;
  price: number;
}

type AuditedProduct = Product3 & AuditLog;

const auditedProduct: AuditedProduct = {
  title: "Product 1",
  price: 100,
  createdBy: "Kingsley",
  updatedAt: "2022-01-01",
}


//Bracket Notation with variables as keys -env
type DbConfig = {
  readonly id: number;
  [key: string]: string | number | boolean
}
const databaseRow: DbConfig = {
  id: 101,
  email: "king@solopreneur.dev",
  subscription: "Pro",
  lifetimeValue: 1500
};
console.log(databaseRow);
function extractData(row: DbConfig, fieldName: keyof DbConfig) {
  //const table = row as DbConfig;
  return row[fieldName];
}

console.log(extractData(databaseRow, "email"));
console.log(extractData(databaseRow, "subscription"));