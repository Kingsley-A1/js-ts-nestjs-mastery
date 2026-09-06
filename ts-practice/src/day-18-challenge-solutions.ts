//Challange 1a
//Creating a User Type Alias

type User = {
    readonly id: number;
    userName: string;
    email: string;
    role: "admin" | "editor" | "viewer";
    readonly createdAt: Date;
    isActive: boolean;
}

type Product = {
    readonly id: number;
    name: string;
    price: number;
    category: string;
    tags: string[];
    inStock: boolean;
    description?: string;
}

type Order = {
    readonly orderId: string;
    userId: number;
    products: Product[];
    totalAmount: number;
    status: "pending" | "processing" | "delivered" | "cancelled";
    placedAt: Date;
}

type Address = {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode?: number;
}
//Question: Can I Use Index Signature to solve make the type Address more robust?
type UserProfile = User & { address: Address };

//Challange 1b
// Create one valid object for each type and `console.log` it.

const newUser: User = {
    id: 1,
    userName: "Kingsley",
    email: "[EMAIL_ADDRESS]",
    role: "admin",
    createdAt: new Date(),
    isActive: true,
}
console.log(newUser)

const newProduct: Product = {
    id: 1,
    name: "Laptop",
    price: 450000,
    category: "Electronics",
    tags: ["Electronics", "Laptops"],
    inStock: true,
}
console.log(newProduct)

const newOrder: Order = {
    orderId: "1",
    userId: 1,
    products: [newProduct],
    totalAmount: 450000,
    status: "pending",
    placedAt: new Date(),
}
console.log(newOrder)

const newAddress: Address = {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    country: "USA",
    postalCode: 12345,
}
console.log(newAddress)

const newUserProfile: UserProfile = {
    id: 1,
    userName: "Kingsley",
    email: "[EMAIL_ADDRESS]",
    role: "admin",
    createdAt: new Date(),
    address: newAddress,
    isActive: true,
}
console.log(newUserProfile)
//Solved completely.

//⚔️ Challenge 2 — The Shape Enforcer
//  1. Using your `User` type from Challenge 1, write:
//    - `function getUserDisplayName(user: User): string` → returns `"Kingsley (admin)"`
//    - `function deactivateUser(user: User): User` → returns the same user with `isActive: false`
//    - `function isAdmin(user: User): boolean` → returns `true` if `role === "admin"`

function getUserDisplayName(user: User): string {
    return `${user.userName} (${user.role})`;
}
console.log(getUserDisplayName(newUser))

function deactivateUser(user: User): User {
    return { ...user, isActive: false };
}
console.log(deactivateUser(newUser))

function isAdmin(user: User): boolean {
    return user.role === "admin";
}
console.log(isAdmin(newUser))

//**Try to** call `getUserDisplayName` with a plain object missing a field — observe the error.

//Function call with an object missing a field
console.log(getUserDisplayName({ id: 2, userName: "John", email: "[EMAIL_ADDRESS]", isActive: true, role: "admin", createdAt: new Date() }))

//Done!


//⚔️ Challenge 3 — The Nested Object Deep-Dive
type Company = {
    name: string;
    foundedYear: number;
    headquarters: Address;   // nested type from Challenge 1
    employees: User[];        // array of User objects
    isPublic: boolean;
}

const newCompany: Company = {
    name: "NestCorp",
    foundedYear: 2010,
    headquarters: newAddress,
    employees: [newUser],
    isPublic: true,
}
console.log(newCompany)

//Write a function `getCompanyInfo(company: Company): string` that returns:
//`"NestCorp (Founded: 2010) — HQ: Lagos, Nigeria — Staff: 2"`
function getCompanyInfo(company: Company): string {
    return `${company.name} (Founded: ${company.foundedYear}) — HQ: ${company.headquarters.city}, ${company.headquarters.country} — Staff: ${company.employees.length}`;
}
console.log(getCompanyInfo(newCompany))

//Write a function `getActiveEmployees(company: Company): User[]` that returns only active users
function getActiveEmployees(company: Company): User[] {
    return company.employees.filter(e => e.isActive);
}
console.log(getActiveEmployees(newCompany))

//Write a function `promoteToAdmin(company: Company, userId: number): Company` that returns a new company where the matching user has `role: "admin"`
function promoteToAdmin(company: Company, userId: number): Company {
    const updated = company.employees.map(e =>
        e.id === userId ? { ...e, role: "admin" as const } : e
    );
    return { ...company, employees: updated };
}
console.log(promoteToAdmin(newCompany, 1))

//Done!

//⚔️ Challenge 4 — The API Response Wrapper
//  1. Define: `type ApiResponse<T> = { success: boolean; data: T; message: string; statusCode: number; }`
type ApiResponse<T> = {
    success: boolean;
    data: T;
    message: string;
    statusCode: number;
}

//2. Write a function `createSuccessResponse<T>(data: T, message: string): ApiResponse<T>`
function createSuccessResponse<T>(data: T, message: string): ApiResponse<T> {
    return {
        success: true,
        data,
        message,
        statusCode: 200,
    };
}
console.log(createSuccessResponse(newUser, "User fetched"))

//3. Write a function `createErrorResponse(message: string): ApiResponse<null>`
function createErrorResponse(message: string): ApiResponse<null> {
    return {
        success: false,
        data: null,
        message,
        statusCode: 404,
    };
}
console.log(createErrorResponse("User not found"))

//4. Use `ApiResponse<User>` to wrap a user result
const userResult: ApiResponse<User> = createSuccessResponse(newUser, "User fetched")
console.log(userResult)

//5. Use `ApiResponse<Product[]>` to wrap a list of products
const productResult: ApiResponse<Product[]> = createSuccessResponse([newProduct], "Products fetched")
console.log(productResult)

//6. Use `ApiResponse<null>` to model a 404 error response
const errorResult: ApiResponse<null> = createErrorResponse("User not found")
console.log(errorResult)

//Done!

//⚔️ Challenge 5 — The Type Transformer (Boss Challenge)
//  1. Define these three related types:
//    - `type CreateUserDto` — only `username`, `email`, `password` (no id, no role, no timestamps)
type CreateUserDto = {
    username: string;
    email: string;
    password: string;
}

//    - `type UpdateUserDto` — same as `User` but ALL fields are optional (you'll use TypeScript's `Partial<>` utility — hint below)
type UpdateUserDto = Partial<User>

//    - `type ArchivedUser` — all `User` fields + `readonly archivedAt: Date` + `readonly archiveReason: string`
type ArchivedUser = User & {
    readonly archivedAt: Date;
    readonly archiveReason: string;
}

//2. Write `function registerUser(dto: CreateUserDto): User` — returns a full `User` with generated `id`, default `role: "viewer"`, and `isActive: true`
function registerUser(dto: CreateUserDto): User {
    return {
        id: Math.floor(Math.random() * 1000),
        userName: dto.username,
        email: dto.email,
        role: "viewer",
        isActive: true,
        createdAt: new Date(),
    };
}
console.log(registerUser({ username: "John", email: "[EMAIL_ADDRESS]", password: "password" }))

//3. Write `function updateUser(user: User, updates: UpdateUserDto): User` — merges updates onto the user
function updateUser(user: User, updates: UpdateUserDto): User {
    return { ...user, ...updates };
}
console.log(updateUser(newUser, { role: "admin", isActive: false }))

//4. Write `function archiveUser(user: User, reason: string): ArchivedUser` — returns a new archived user
function archiveUser(user: User, reason: string): ArchivedUser {
    return {
        ...user,
        archivedAt: new Date(),
        archiveReason: reason,
    };
}
console.log(archiveUser(newUser, "User archived"))

//5. Use the functions to: register a user, update their role, then archive them
const registeredUser = registerUser({ username: "John", email: "[EMAIL_ADDRESS]", password: "password" })
const updatedUser = updateUser(registeredUser, { role: "admin" })
const archivedUser = archiveUser(updatedUser, "User archived")
console.log(registeredUser)
console.log(updatedUser)
console.log(archivedUser)

//Done!


