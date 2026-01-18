// //If/Else
// let name = "King";
// if (name === "King"){
//     console.log(`${name.toUpperCase()}, you are welcome!`)

// }else{
//     console.log(`${name.toUpperCase()}, WE KNOW YOU NOT!`)
// };

// //Else if - Multiple conditions
// let myName = " Queen";
// if (myName === "King"){
//     console.log(`${myName.toUpperCase()}, you are welcome!`)

// }else if (myName === "Queen"){
//     console.log(`${myName.toUpperCase()}, you are welcome!`)

// }else{
//     console.log(`${myName.toUpperCase()}, WE KNOW YOU NOT!`)
// };

// //Ternary Operator
// const status = "active";
// const message = status === "active" ? "User is active" : "User is not active";
// console.log(message);

// //Switch Statement
// const role = "admin";
// switch (role){
//     case "admin":
//         console.log("Full Acesss");
//         break;
//     case "moderator":
//         console.log("Limited Access")
//         break;
//     case "User":
//         console("Basic Access")
//         break;
//     default:
//         console.log("No Access")
//         break;
// }

// for (let i = 0; i <= 100; i++){
//     console.log(i)
// }

// //for of loop
// const numbers = [1, 2, 3, 4, 5];
// for (const number of numbers){
//     console.log(`${number} is in the array`)
// }

// let count = 0;
// while (count < 100){
//     console.log(count*2)
//     count++
// }

// //The Break statement
// for (let i = 0; i <= 100; i++){
//     if (i ===50){
//         break;
//     }
//     console.log(i)
// }

// //The continue statement
// for (let x = 10;  x <= 30; x--){
//     if (x === 25){
//         continue;
//     }
//     console.log(x)
// }

// 🏋️ Micro-Challenge #1: Grade Calculator
function getGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95)); // "A"
console.log(getGrade(82)); // "B"
console.log(getGrade(55)); // "F"

// 🏋️ Micro-Challenge #2: Role Access (Switch)
function getAccess(role) {
  switch (role) {
    case 'admin':
      return 'Full Access';
    case 'moderator':
      return 'Edit Access';
    case 'user':
      return 'Read Access';
    default:
      return 'No Access';
  }
  // Use a SWITCH statement
  // "admin" → "Full access"
  // "moderator" → "Edit access"
  // "user" → "Read access"
  // anything else → "No access"
}

console.log(getAccess('admin')); // "Full access"
console.log(getAccess('user')); // "Read access"
console.log(getAccess('hacker')); // "No access"

// 🏋️ Micro-Challenge #3: Loop Through Users
const users = [
  { name: 'Kingsley', active: true },
  { name: 'Ada', active: false },
  { name: 'Chidi', active: true },
];

for (const user of users) {
  if (user.active) {
    console.log(`${user.name} is active!`);
  }
}
// Use for...of to print only ACTIVE user names
// Expected output:
// "Active: Kingsley"
// "Active: Chidi"

// 🏋️ Micro-Challenge #4: Find First Admin (Break)
const staff = [
  { name: 'Kingsley', role: 'user' },
  { name: 'Ada', role: 'admin' },
  { name: 'Chidi', role: 'user' },
  { name: 'Bola', role: 'admin' },
];

for (const workers of staff) {
  if (workers.role === 'admin') {
    console.log(`${workers.name} is the first admin!`);
    break;
  }
}
// Loop through users
// When you find the FIRST admin, print their name and STOP
// Expected output: "First admin: Ada"

// 🏋️ Micro-Challenge #5: Find First non-admin (Continue)
const staff2 = [
  { name: 'Kingsley', role: 'user' },
  { name: 'Ada', role: 'admin' },
  { name: 'Chidi', role: 'user' },
  { name: 'Bola', role: 'admin' },
];

for (const workers of staff2) {
  if (workers.role === 'user') {
    console.log(`${workers.name} is not an admin!`);
    continue;
  }
}
// Loop through users
// When you find the FIRST admin, print their name and STOP
// Expected output: "First admin: Ada"
let i = [];
for (let i = 0; i <= 1000; i++) {
  if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else {
    console.log(i);
  }
}

// const results = [];
//  for (let i = 0; i <= 1000; i++) { if (i % 15 === 0)
//      results.push('FizzBuzz');
//     else if (i % 3 === 0) results.push('Fizz');
//      else if (i % 5 === 0) results.push('Buzz');
//       else results.push(i); }
// console.log(results);

const result = [];
for (let i = 0; i <= 1000; i++) {
  if (i % 3 === 0) {
    result.push('Fizz');
  } else if (i % 5 === 0) {
    result.push('Buzz');
  } else if (i % 15 === 0) {
    result.push('FizzBuzz');
  } else {
    result.push(i);
  }
}
console.log(result);
