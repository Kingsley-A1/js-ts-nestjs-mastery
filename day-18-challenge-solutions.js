//Challange 1a
//Creating a User Type Alias
//Challange 1b
// Create one valid object for each type and `console.log` it.
const newUser = {
    id: 1,
    userName: "Kingsley",
    email: "[EMAIL_ADDRESS]",
    role: "admin",
    createdAt: new Date(),
    isActive: true,
};
console.log(newUser);
const newProduct = {
    id: 1,
    name: "Laptop",
    price: 450000,
    category: "Electronics",
    tags: ["Electronics", "Laptops"],
    inStock: true,
};
console.log(newProduct);
const newOrder = {
    orderId: "1",
    userId: 1,
    products: [newProduct],
    totalAmount: 450000,
    status: "pending",
    placedAt: new Date(),
};
console.log(newOrder);
const newAddress = {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    country: "USA",
    postalCode: 12345,
};
console.log(newAddress);
const newUserProfile = {
    id: 1,
    userName: "Kingsley",
    email: "[EMAIL_ADDRESS]",
    role: "admin",
    createdAt: new Date(),
    address: newAddress,
    isActive: true,
};
console.log(newUserProfile);
//Solved completely.
//⚔️ Challenge 2 — The Shape Enforcer
//  1. Using your `User` type from Challenge 1, write:
//    - `function getUserDisplayName(user: User): string` → returns `"Kingsley (admin)"`
//    - `function deactivateUser(user: User): User` → returns the same user with `isActive: false`
//    - `function isAdmin(user: User): boolean` → returns `true` if `role === "admin"`
function getUserDisplayName(user) {
    return `${user.userName} (${user.role})`;
}
console.log(getUserDisplayName(newUser));
function deactivateUser(user) {
    return { ...user, isActive: false };
}
console.log(deactivateUser(newUser));
function isAdmin(user) {
    return user.role === "admin";
}
console.log(isAdmin(newUser));
export {};
//**Try to** call `getUserDisplayName` with a plain object missing a field — observe the error.
//Function call with an object missing a field
// console.log(getUserDisplayName({ id: 2, userName: "John", email: "[EMAIL_ADDRESS]", isActive: true, role: "admin", createdAt: new Date() }))
//# sourceMappingURL=day-18-challenge-solutions.js.map