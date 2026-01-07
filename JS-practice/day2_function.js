// function logType(value) {
//     console.log(`${typeof value}: ${value}`)
// }

// logType("Hello");
// logType(123);
// logType(true);
// logType(null);
// logType(undefined);


// function logType(value){
//     console.log(`${typeof logType}: ${value}`  )
// }

//  Micro-Challenge #2: Arrow Function Conversion
// const logType = (value) => {
//     console.log(`${value} is of type of ${typeof value}`)
// }

// logType("Hello");
// logType(123);
// logType(true);
// logType(null);
// logType(undefined);

// 🎯 Micro-Challenge #3: Functions with Multiple Parameters
// const add = (a, b) =>  a + b;
// console.log(add(2, 4));

//Micro CHALLENGE 4: Default parameterfunction
// const greet = (name, greeting = "Hello") => {
//     console.log(`${greeting}, ${name}!`)
// }
// greet("Hassan")
// greet("King", "Welcome");



//  Micro-Challenge #5: Callbacks (The Foundation of Async JS
// const processNumber = (num, callback) => {
//     return callback(num)
// }

// console.log(processNumber(10, (num) => num * 2))
// console.log()

const calculate = (a, b, opertation) => {
    return opertation(a, b)
}
console.log(calculate(2, 3, (a, b) => a + b))
console.log(calculate(2, 3, (a, b) => a - b))
console.log(calculate(2, 3, (a, b) => a * b))
console.log(calculate(2, 3, (a, b) => a / b))