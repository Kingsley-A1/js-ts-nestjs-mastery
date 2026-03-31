// 🏋️ Micro-Challenge #1: Create a Promise
// Convert this callback function to return a Promise:

const { resolve } = require('path');

// CALLBACK VERSION:
function wait(ms, callback) {
  setTimeout(() => {
    callback('Done waiting!');
  }, ms);
}

// YOUR TASK - Make it return a Promise:
function waitPromise(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Done waiting after ${ms / 100} seconds`);
    }, ms);
  });
}

// Usage should be:
waitPromise(1000).then((message) => console.log(message)); // "Done waiting!"

// 🏋️ Micro-Challenge #2: Error Handling
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId <= 0) {
        reject(new Error('Invalid user ID'));
      } else {
        resolve({ id: userId, name: 'King Madu' });
      }
    }, 500);
  });
}

//usage
fetchUser(1)
  .then((user) => console.log(user))
  .catch((error) => console.log(error));

fetchUser(-1)
  .then((user) => console.log(user))
  .catch((error) => console.log(error));

//  🏋️ Micro-Challenge #3: Promise Chain

function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId <= 0) {
        reject(new Error('Invalid user ID'));
      } else {
        resolve({ id: userId, name: 'King Madu' });
      }
    }, 500);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Learning JS' },
        { id: 2, title: 'Learning Node' },
        { id: 3, title: 'Learning Typescript' },
      ]);
    }, 300);
    
    setTimeout(() => {
        reject(new Error('Invalid user ID'));
    }, 300) 
    
  });
}

// YOUR TASK: Chain these to log:
// "Kingsley has 2 posts"
// Use .then() chaining, not nesting!
getUser(1)
    .then(user =>{
        savedUser = user;
        return fetchPosts(user.id)
    })
    .then(posts => {
        savedPosts = posts;
        console.log(`${savedUser.name} has ${savedPosts.length} posts`);
    })
    .catch(err => {
        console.log(err);
    })
  //🏋️ Micro-Challenge #4: Promise.all

const promise1 = fetchUser(1);
const promise2 = fetchUser(2);
const promise3 = fetchUser(3);

// Wait for ALL to complete:
Promise.all([promise1, promise2, promise3])
    .then(users => {
        console.log("All users fetched:", users);  // Array of results
    })
    .catch(err => {
        console.log("One or more promises  failed:", err);  // If ANY fails
    });