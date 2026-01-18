//The map() array method transform data into a new array
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
  { name: 'Kingsley', age: 25, paidRent: true },
  { name: 'John', age: 30, paidRent: false },
  { name: 'Jane', age: 22, paidRent: true },
];

//The filter method returns a new array when a certain condition is true

const paidTenants = tenants.filter((tenants) => tenants.paidRent === true);
console.log(`Paid tenants: ${paidTenants}`);

//The find method returns the first element that matches a certain condition
const findPaidTenant = tenants.find((tenants) => tenants.paidRent == true);
console.log(`Paid tenant: ${findPaidTenant.name}`);

//The reduce method returns the sum of all elements in an array
const totalTenantAge = tenants.reduce((total, tenants) => tenants.age, 0);
console.log(`Total tenant age: ${totalTenantAge}`);

const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Phone', price: 500, inStock: false },
  { name: 'Tablet', price: 300, inStock: true },
  { name: 'Watch', price: 200, inStock: true },
];

//Get the name of products under 500
const result = products
  .filter((product) => product.inStock)
  .filter((product) => product.price < 500)
  .map((product) => product.name);

console.log(`Products under 500: ${result}`);

// Micro-Challenge #1: Transform
const originalNums = [2, 4, 6, 8, 10];
const trippledNums = originalNums.map((originalNum) => originalNum * 3);
console.log(`Tripled numbers: ${trippledNums}`);

//🏋️ Micro-Challenge #2: Filter

const items = [
  { name: 'Laptop', price: 1200, id: 1 },
  { name: 'Mouse', price: 25, id: 2 },
  { name: 'Keyboard', price: 75, id: 3 },
  { name: 'Monitor', price: 400, id: 4 },
  { name: 'USB Cable', price: 10, id: 5 },
];

const cheapItems = items.filter((item) => item.price < 500);
console.log(cheapItems);

//🏋️ Micro-Challenge #3: Find
const findItemById = items.find((item) => item.id === 3);
console.log(findItemById);

// 🏋️ Micro-Challenge #4: The Ultimate Chain ⛓️
const users = [
  { id: 1, name: 'Kingsley', active: true, role: 'admin' },
  { id: 2, name: 'Ada', active: false, role: 'user' },
  { id: 3, name: 'Chidi', active: true, role: 'user' },
  { id: 4, name: 'Bola', active: true, role: 'moderator' },
  { id: 5, name: 'Emeka', active: false, role: 'user' },
];
const isActive = users
  .filter((user) => user.active)
  .filter((user) => user.role == 'user')
  .map((user) => user.name);
console.log(isActive);

// .filter() returns a new array if a certain defined condition is met, or
//reurns an empty array if not met.

// find() returns a single item taht matches the first call
//How keyword searching works in real lif using the array methods
const searchedItem = 'Mouse';
const foundItem = items.find((item) =>
  item.name.toLowerCase().includes(searchedItem.toLowerCase()),
);
console.log(`The searched item is ${foundItem?.name}`);

// The .includes() method takes a string as an argument and returns a boolean value
