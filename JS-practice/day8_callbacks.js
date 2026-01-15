//Async JS
console.log("Hello!");

setTimeout(() => {
    console.log("World! after 2 seconds")
}, 2000)

console.log("Coding while waiting for pizza!")

//Making my own calllback
// function fetchUser(userId, callback){
//     setTimeout(() => {
//         const user = {
//             id: userId,
//             name: "King",
//             role: "admin"
//         }
//         callback(user)
//     },2000)
    
// }
// //using the function

// console.log("Requesting user...");
// fetchUser(1, (user) => {
//     console.log("The user fetched is ", user)
// })

// console.log("Fetching user...");

//Nodejs Error-first callback pattern
function getUser(userId, callback){
    setTimeout(() => {
     //If error state
        if(userId <= 0){
                 // ERROR! Call callback with error as first argument

            callback(new Error("Invalid user ID"), null);
            return;
        }
    //If data is present
        const user = {
            id: userId,
            name: "King Madu",
            role: "Developer"
        }
        callback(null, user);
    },2000);
}

//USING IT
console.log("Requesting user...");
getUser(1, (error, user) => {
    if (error){
        console.log("ERROR:", error);
        return;
    }
    console.log("SUCCESS:" , user)
})

//Using it with an invalid ID
console.log("Requesting user...");
getUser(-1, (error, user) => {
    if (error){
        console.log("ERROR:", error);
        return;
    }
    console.log("SUCCESS:" , user)
})

// 🏋️ Micro-Challenge #1: Basic CallbacK
function greetUser(name, callback){
    setTimeout(() => {
        const greeting = `Hello ${name};`
        callback(greeting)
    }, 1000)
}

//using the greetUser function
console.log("Greeting user..");
greetUser("King", function(greeting){
    console.log(greeting)
})

// 🏋️ Micro-Challenge #2: Error-First Pattern
function divideNumbers(num1, num2, callback){
    if(num2 === 0){
        setTimeout(() => {
            callback(new Error("Cannot divide by zero"))
        }, 1000)
    }else{
        const result = num1/num2;
        setTimeout(() => {
            callback(null, result)
        }, 1000)
    }
}

//usage
console.log("Dividing numbers...")
divideNumbers(6,3, (error, result) => {
    if(error){
        console.log("ERROR:", error)
    }else{
        console.log("SUCCESS:", result)
    }
})


divideNumbers(6,0, (error, result) => {
    if(error){
        console.log("ERROR:", error)
    }else{
        console.log("SUCCESS:", result)
    }
})

// 🏋️ Micro-Challenge #3: Sequential Callbacks
function fetchUser(userId, callback){
    setTimeout(()=> {
        if(userId <= 0){
            callback(new Error("Invalid user ID"), null)
            return
        }
        callback(null, {id: userId, name: "King Madu", role: "Developer"})
    }, 500);
}

function fetchPosts(userId, callback){
    setTimeout(() => {
 callback(null,[
    {id:1, title: "Learning JS"},
    {id:2, title: "Learning Node"},
    {id:3, title: "Learning Typescript"}
 ])       
 
    }, 500);
}

//usage
fetchUser(1, (error, user) => {
    if(error) return console.log("ERROR:", error)
    // console.log("SUCCESS:", user)
    fetchPosts(user.id, (error, posts) => {
        if(error) return console.log("ERROR:", error)
        console.log(`User: ${name} has ${posts.length} posts`);
    })
})

// 🏋️ Micro-Challenge #4: The Real World — File Reading (Node.js)
const fs = require("fs");

fs.readFile('test.txt', 'utf8',
    (err, data) => {
        if(err){
            console.log("Error reading file:", err.message);
            return
        }
        console.log("File content:", data);
    });
