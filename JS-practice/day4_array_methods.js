// const users = [
//     {name: "Kingsley", age: 25, isLearning: true},
//     {name: "John", age: 30, isLearning: false},
//     {name: "Jane", age: 22, isLearning: true},
// ];

// const upperCasenames = users.map(users => users.name.toUpperCase());
// console.log(upperCasenames);

// const doubleAge = users.map(users => users.age * 2);
// console.log(doubleAge);


//The filter methood

const tenants = [
    {name: "Kingsley", age: 25, paidRent: true},
    {name: "John", age: 30, paidRent: false},
    {name: "Jane", age: 22, paidRent: true},
];


const paidTenants = tenants.filter( tenants => tenants.paidRent === true );
console.log(paidTenants.name);


//FIND METHOD
const findPaidTenant = tenants.find(tenants => tenants.paidRent == true);
console.log(findPaidTenant.name);