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
      resolve({ id: userId, userName: 'King Madu' });
    }, 300);
    reject(new Error('Invalid user ID'));
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
    reject(new Error('Invalid user ID'));
  });
}

// YOUR TASK: Chain these to log:
// "Kingsley has 2 posts"
// Use .then() chaining, not nesting!
getUser(1)
  .then((userName) => {
    console.log(userName);
  })
  .then((posts) => console.log(posts.length))
  .catch((error) => console.log(error));

fetchPosts(1)
  .then((posts) => console.log(posts.length))
  .catch((error) => console.log(error));
console.log(`${userName} has ${posts.length} posts`);
