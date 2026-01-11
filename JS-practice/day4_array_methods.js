//The map() array method
// const users = [
//     {name: "Kingsley", age: 25, isLearning: true},
//     {name: "John", age: 30, isLearning: false},
//     {name: "Jane", age: 22, isLearning: true},
// ];

// const upperCasenames = users.map(users => users.name.toUpperCase());
// console.log(upperCasenames);

// const doubleAge = users.map(users => users.age * 2);
// console.log(doubleAge);


//The filter method returns a new array when a certain condition is true

const tenants = [
    {name: "Kingsley", age: 25, paidRent: true},
    {name: "John", age: 30, paidRent: false},
    {name: "Jane", age: 22, paidRent: true},
];

//The filter method returns a new array when a certain condition is true

const paidTenants = tenants.filter( tenants => tenants.paidRent === true );
console.log(paidTenants);   


//The find method returns the first element that matches a certain condition
const findPaidTenant = tenants.find(tenants => tenants.paidRent == true);
console.log(findPaidTenant.name);

//The reduce method returns the sum of all elements in an array
const totalTenantAge = tenants.reduce((total, tenants) => tenants.age, 0);
const tTa = tenants.reduce((total, tenants) => tenants.age, 0);
console.log(tTa);


const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 300, inStock: true },
    { name: "Watch", price: 200, inStock: true }
];

//Get the name of products under 500
const result = products.filter(product => product.inStock)
.filter(product => product.price < 500)
.map(product => product.name);

console.log(result);


// Micro-Challenge #1: Transform
const originalNums = [2, 4, 6, 8, 10];
const trippledNums = originalNums.map(originalNums => originalNums * 3);
console.log(trippledNums);

//🏋️ Micro-Challenge #2: Filter

const items = [
    { name: "Laptop", price: 1200,id: 1 },
    { name: "Mouse", price: 25,id: 2 },
    { name: "Keyboard", price: 75,id: 3 },
    { name: "Monitor", price: 400,id: 4 },
    { name: "USB Cable", price: 10,id: 5 }
];

const cheapItems = items.filter(items => items.price < 500);
console.log(cheapItems);


//🏋️ Micro-Challenge #3: Find
const findItemById = items.find(items => items.id === 3);
console.log(findItemById);

// 🏋️ Micro-Challenge #4: The Ultimate Chain ⛓️
const users = [
    { id: 1, name: "Kingsley", active: true, role: "admin" },
    { id: 2, name: "Ada", active: false, role: "user" },
    { id: 3, name: "Chidi", active: true, role: "user" },
    { id: 4, name: "Bola", active: true, role: "moderator" },
    { id: 5, name: "Emeka", active: false, role: "user" }
];
const isActive =  users.filter(users => users.active)
.filter(users => users.role == "user")
.map(users => users.name);
console.log(isActive);