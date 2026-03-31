//The Promise version(The recap)

const { resolve } = require('path');

function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: 'Kingsley',
        role: 'admin',
      });
    }, 1000);
  });
}

const fetchPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, post: 'Learning TS' },
        { id: 2, post: 'Learning JS' },
      ]);
    }, 1000);
  });
};

//Consuming the promise

//FETCHING DATA
fetchUser(1)
  .then((user) => {
    console.log('User', user);

    return fetchPosts(user.id);
  })

  .then((post) => {
    console.log('Posts:', post);
  })

  .catch((error) => {
    console.log('Error:', error);
  });

//The async/await version
//Create getUserPosts function
async function getUserPosts() {
  try {
    const user = await fetchUser(1);
    console.log('User', user);

    const posts = await fetchPosts(user.id);
    console.log('Posts', posts);
  } catch (error) {
    console.log('Error fetching data', error);
  }
}

getUserPosts();

//🏋️ Micro-Challenge #1: Basic Async/Await
//Create wait function
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited ${ms} milliseconds`);
    }, ms);
  });
}

async function runwait() {
  const result1 = await wait(1000);
  console.log(result1);

  const result2 = await wait(2000);
  console.log(result2);
}

runwait();

// 🏋️ Micro-Challenge #2: Error Handling with try/catch

function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId <= 0) {
        reject(new Error('Invalid user ID'));
      } else {
        resolve({ id: userId, name: 'Kingsley' });
      }
    }, 500);
  });
}

async function getUser() {
  try {
    const user1 = await fetchUser(1);
    console.log('User 1:', user1);

    const user2 = await fetchUser(-1);
    console.log('User 2:', user2);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

getUser();
// YOUR TASK:
// Write an async function called "getUser" that:
// 1. Uses try/catch
// 2. Tries to await fetchUser(1) and logs the user
// 3. Then tries to await fetchUser(-1) and logs the user
// 4. Catches any error and logs: "Error: [error message]"

// Call your function at the end!

// 🏋️ Micro-Challenge #3: Chaining Async Operations
