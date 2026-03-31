// //  Micro-Challenge #1: Create Your Profile
// // const profile = {
// //     name: "Kingsley",
// //     age: 25,
// //     isLearning: true,

// // }
// // console.log(`${profile.name} is ${profile.age} years old and  is he learning ${profile.isLearning}`)

// // const skills = ["JavaScript", "TypeScript", "NestJS"]
// // console.log(`I am taking ${skills[0]} first, afterwards, I will take ${skills[1]} and finally ${skills[2]}!`)

// //Array nested in an object
// const profile = {
//   name: 'Kingsley',
//   age: 25,
//   isLearning: true,
//   skills: ['JavaScript', 'TypeScript', 'NestJS'],
// };
// console.log(
//   `${profile.name} is ${profile.age} years old and he is currenly learning ${profile.skills[0]}!`,
// );
// //Destructuring objects
// const { name, skills } = profile;
// console.log(profile);
// console.log(name);
// console.log(skills);

// //Micro Challange 3
// //Destructuring arrays
// const [firstSkill, secondSkill] = skills;
// console.log(firstSkill); //js
// console.log(secondSkill); //ts

// //Micro Challange 4: The  Spread operator(...)
// const allSkills = [...skills, 'PostgreSQL', 'Docker'];
// // console.log(allSkills);

// const updatedProfile = { ...profile, isLearning: false, level: 'intermediate' };
// console.log(updatedProfile, ...allSkills);

// const product = {
//   name2: 'Laptop',
//   price: 999,
//   tags: ['electronics', 'computers', 'sale'],
// };

// const { name2, tags } = product;

// const allTags = [...tags, 'brand new'];
// console.log(allTags);

// const day1 = { time: '2:00 PM', lesson: 'Object & Arrrays', isCompleted: true };

// const { time, lesson, isCompleted, restTime = '2:30 PM' } = day1;
// console.log(day1);

// const products = [
//   { name: 'Laptop', price: 1000, inStock: true },
//   { name: 'Phone', price: 500, inStock: false },
//   { name: 'Tablet', price: 300, inStock: true },
//   { name: 'Watch', price: 200, inStock: true },
// ];

// const productInStock = products.filter((product) => product.inStock);
// const productInStockUnder500 = productInStock.filter(
//   (product) => product.price < 500,
// );
// const productInStockUnder500Name = productInStockUnder500.map(
//   (product) => product.name,
// );
// console.log(productInStockUnder500Name);

// //Short form of the above code
// const result = products //Assign a new variable to the result of the filter method
//   .filter((p) => p.inStock)
//   .filter((p) => p.price < 500)
//   .map((p) => p.name);
// console.log(result);
// const firstProductUnder500 = products.find((p) => p.price <= 500);
// console.log(firstProductUnder500);

// const totalPrice = products.reduce(
//   (total, product) => product.price + total,
//   0,
// );
// console.log(totalPrice);

const orders = [
  { id: 1, customer: 'Kingsley', status: 'pending', isVIP: true },
  { id: 2, customer: 'Alice', status: 'delivered', isVIP: false },
  { id: 3, customer: 'Bob', status: 'pending', isVIP: true },
];

const vipPendingOrders = orders.filter(
  (order) => order.isVIP && order.status === 'pending',
);
console.log(vipPendingOrders);
console.log('═══════════════════════════════════════════════════');
const namesOfVIPPendingCustomers = vipPendingOrders.map(
  (order) => order.customer,
);
console.log(namesOfVIPPendingCustomers);

const namesOfVIPPendingCustomersShort = orders
  .filter((order) => order.isVIP && order.status === 'pending')
  .map((order) => order.customer);
console.log(namesOfVIPPendingCustomersShort);

//Destructuring to pass only what's needed
const destructuredOrders = orders.map(({ customer, status, isVIP }) => ({
  customer,
  status,
  isVIP,
}));
console.log(destructuredOrders);
//Destructuring to pass only what's needed isVIP and status
// const destructuredVIPPendingOrders = orders.filter(
//   ({ isVIP, status }) => isVIP && status === 'pending',

// );

// console.log(destructuredVIPPendingOrders);

// const namesOfVIPPendingCustomersDestructured = destructuredVIPPendingOrders.map(
//   ({ customer }) => customer,
// );
// console.log(namesOfVIPPendingCustomersDestructured);

const namesOfVIPPendingCustomersShortDestructured = orders
  .filter(({ isVIP, status }) => isVIP && status === 'pending')
  .map(({ customer }) => customer);
console.log(namesOfVIPPendingCustomersShortDestructured);
