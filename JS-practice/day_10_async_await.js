//The Promise version(The recap)
/** 
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
-----------------------------------------------------------------
END
-----------------------------------------------------------------
*/

// YOUR TASK:
// Write an async function called "getUser" that:
// 1. Uses try/catch
// 2. Tries to await fetchUser(1) and logs the user
// 3. Then tries to await fetchUser(-1) and logs the user
// 4. Catches any error and logs: "Error: [error message]"

// Call your function at the end!

//1. async keyword makes async function look like sync function
//2. What happens when we hit await fetchUser(1)? It logs it using the
//console.log(User 1:, user1)
//  Why does the second fetchUser(-1) never log? Because the first fetchUser(1) is successful and logs the user, but when it tries to execute fetchUser(-1), it throws an error due to the invalid user ID. This error is caught by the catch block, which prevents any further code execution within the try block, including logging user2.
// 3. The catch block captures the error thrown by fetchUser(-1) and logs the error message.

function fetchFromAPI(endpoint, delay, data, fail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail)return reject(new Error(`Failed to fetch data from ${endpoint}`));
      resolve(
        `Fetched data from ${endpoint} after ${delay} ms and the data returned is ${data}`,
      );
    }, delay);
  });
}

//Task: create an async function called fetchSequential
async function fetchSequential() {
  const startTime = Date.now();
  const users = await fetchFromAPI('/users', 1000, 'User data');
  const posts = await fetchFromAPI('/posts', 1500, 'Post data');

  // console.log(users);
  // console.log(posts);
  const endTime = Date.now();
  const totalTime = endTime - startTime;
  console.log(`Total time taken is ${totalTime} ms to fetch sequentially`);
  //The backticks method of console logging is called
}

fetchSequential();

//Create a functin called fetchParallel

async function fetchParallel() {
  const startTimeParallel = Date.now();
  // const userPromise = fetchFromAPI('/users', 1000);
  // const postPromise = fetchFromAPI('/posts', 1500);

  const [userPromise, postPromise] = await Promise.all([
    fetchFromAPI('/users', 1000, 'User data'),
    fetchFromAPI('/posts', 1500, 'Post data'),
  ]);

  console.log(userPromise);
  console.log(postPromise);

  const endTimeParallel = Date.now();
  const totalTimeParallel = endTimeParallel - startTimeParallel;
  console.log(`It took ${totalTimeParallel} ms to fetch in parallel`);
}
//Function call
fetchParallel();

async function fetchParallelSettled() {
  const startTimeParallelSettled = Date.now();
  const results = await Promise.allSettled([
    fetchFromAPI('/users', 1000, 'User data'),
    fetchFromAPI('/posts', 1500, 'Post data', true), // ❌ Let's make this one fail!
  ]);
  const endTimeParallelSettled = Date.now();
  const totalTimeParallelSettled =
    endTimeParallelSettled - startTimeParallelSettled;
  console.log(
    `It took ${totalTimeParallelSettled} ms to fetch in parallel with allSettled`,
  );
  
  // Let's look at the "structure" of the results
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`✅ Success [${index}]:`, result.value);
    } else {
      console.log(`❌ Error [${index}]:`, result.reason.message);
    }
  });
}
fetchParallelSettled();
//End of fetchParallelSettled function creation
