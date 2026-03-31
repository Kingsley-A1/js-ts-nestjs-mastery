// // ═══════════════════════════════════════════════════════════════════════════
// // DAY 11: ERROR HANDLING - The Art of Failing Gracefully
// // ═══════════════════════════════════════════════════════════════════════════

// // 🎯 MISSION: Learn to handle errors like a professional backend engineer.
// //
// // Why this matters for NestJS:
// // - NestJS uses custom error classes extensively (NotFoundException, BadRequestException)
// // - You'll write error handlers that tell users EXACTLY what went wrong
// // - Good error handling = better debugging + happier users

// // ═══════════════════════════════════════════════════════════════════════════
// // PART 1: The Problem - Silent Failures (What NOT to do)
// // ═══════════════════════════════════════════════════════════════════════════

// function getUserById_Bad(userId, users) {
//   const user = users.find((u) => u.id === userId);
//   return user; // ❌ What if user is undefined? The app breaks silently later!
// }

// // This is dangerous:
// const users = [
//   { id: 1, name: 'King', email: 'king@someone.com' },
//   { id: 2, name: 'John', email: 'john@someone.com' },
// ];

// const result = getUserById_Bad(999, users);
// console.log('Silent failure example:', result); // undefined - no error!
// // console.log(result.name); // 💥 CRASH! "Cannot read property 'name' of undefined"

// console.log('---\n');

// // ═══════════════════════════════════════════════════════════════════════════
// // PART 2: The Basic Solution - throw keyword
// // ═══════════════════════════════════════════════════════════════════════════

// // "throw" = Stop everything and say "Something is wrong!"

// function getUserById_Better(userId, users) {
//   const user = users.find((u) => u.id === userId);

//   if (!user) {
//     throw new Error(`User with ID ${userId} not found`); // ✅ Explicit error
//   }

//   return user;
// }

// // How to use it safely with try/catch:
// try {
//   const user = getUserById_Better(1, users);
//   console.log('✅ Found user:', user.name);

//   const missingUser = getUserById_Better(999, users); // This will throw
//   console.log('This line never runs');
// } catch (error) {
//   console.log('❌ Caught error:', error.message);
// }

// console.log('---\n');

// // ═══════════════════════════════════════════════════════════════════════════
// // PART 3: The Problem with Generic Errors
// // ═══════════════════════════════════════════════════════════════════════════

// // Imagine you're building an API. Different errors need different responses:
// // - User not found → 404 status code
// // - Wrong password → 401 status code
// // - Invalid email format → 400 status code
// //
// // How do you tell them apart if they're all just "Error"?

// function login_Generic(email, password) {
//   if (!email) {
//     throw new Error('Something went wrong'); // ❌ Too vague!
//   }

//   if (!email.includes('@')) {
//     throw new Error('Something went wrong'); // ❌ Same message for different problem!
//   }

//   if (password.length < 8) {
//     throw new Error('Something went wrong'); // ❌ User has no idea what to fix!
//   }

//   return { token: 'abc123' };
// }

// // The problem: All errors look the same to your code!

// console.log('---\n');

// // ═══════════════════════════════════════════════════════════════════════════
// // PART 4: Custom Error Classes - The Professional Solution
// // ═══════════════════════════════════════════════════════════════════════════

// // Step 1: Create custom error types that EXTEND the built-in Error class

// class NotFoundError extends Error {
//   constructor(message) {
//     super(message); // Call the parent Error constructor
//     this.name = 'NotFoundError'; // Give it a unique name
//     this.statusCode = 404; // Add custom properties
//   }
// }

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = 'ValidationError';
//     this.statusCode = 400;
//   }
// }

// class UnauthorizedError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = 'UnauthorizedError';
//     this.statusCode = 401;
//   }
// }

// class TimeoutError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = 'TimeoutError';
//     this.statusCode = 408;
//   }
// }
// class UknownError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = 'UknownError';
//     this.statusCode = 500;
//   }
// }

// // Step 2: Use them in your functions

// function getUserById_Pro(userId, users, timeout) {
//   if (!userId || userId <= 0) {
//     throw new ValidationError('User ID must be a positive number');
//   }

//   const user = users.find((u) => u.id === userId);

//   if (!user) {
//     throw new NotFoundError(`User with ID ${userId} not found`);
//   }
//   if ((timeout) => 500) {
//     throw new TimeoutError('Timeout in fetching user data');
//   }

//   return user;
// }

// function login_Pro(email, password, validPassword = 'secret123') {
//   if (!email) {
//     throw new ValidationError('Email is required');
//   }

//   if (!email.includes('@')) {
//     throw new ValidationError('Email must be valid');
//   }

//   if (!password) {
//     throw new ValidationError('Password is required');
//   }

//   if (password.length < 8) {
//     throw new ValidationError('Password must be at least 8 characters');
//   }

//   if (password !== validPassword) {
//     throw new UnauthorizedError('Invalid credentials');
//   }

//   return { token: 'jwt-token-here' };
// }

// // Step 3: Handle different errors differently

// function handleUserRequest(userId) {
//   try {
//     const user = getUserById_Pro(userId, users);
//     console.log(`✅ Success: Found ${user.name}`);
//     return { success: true, data: user };
//   } catch (error) {
//     // Now we can check what TYPE of error it is!
//     if (error instanceof NotFoundError) {
//       console.log(`❌ ${error.statusCode}: ${error.message}`);
//       return { success: false, statusCode: 404, message: error.message };
//     } else if (error instanceof ValidationError) {
//       console.log(`❌ ${error.statusCode}: ${error.message}`);
//       return { success: false, statusCode: 400, message: error.message };
//     } else {
//       console.log('❌ 500: Internal server error');
//       return {
//         success: false,
//         statusCode: 500,
//         message: 'Something went wrong',
//       };
//     }
//   }
// }

// console.log('🧪 Testing custom errors:\n');

// // Test valid user
// handleUserRequest(1);

// // Test missing user
// handleUserRequest(999);

// // Test invalid ID
// handleUserRequest(-5);

// console.log('---\n');

// // ═══════════════════════════════════════════════════════════════════════════
// // PART 5: Async Error Handling (Combining Day 10 + Day 11)
// // ═══════════════════════════════════════════════════════════════════════════

// // Simulated async database call
// function fetchUserFromDB(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId === 1) {
//         resolve({ id: 1, name: 'King', email: 'king@example.com' });
//       } else {
//         reject(new NotFoundError(`User ${userId} not found in database`));
//       }
//     }, 500);
//   });
// }

// // ❌ WRONG WAY - Forgot to use try/catch with async
// // async function getUser_Wrong(userId) {
// //   const user = await fetchUserFromDB(userId); // This will crash if it rejects!
// //   return user;
// // }

// // ✅ RIGHT WAY - Always wrap await in try/catch
// async function getUser_Correct(userId) {
//   try {
//     const user = await fetchUserFromDB(userId);
//     console.log(`✅ Async success: Found ${user.name}`);
//     return { success: true, data: user };
//   } catch (error) {
//     if (error instanceof NotFoundError) {
//       console.log(`❌ Async error: ${error.message}`);
//       return { success: false, statusCode: 404, message: error.message };
//     }
//     console.log('❌ Unexpected async error:', error.message);
//     return { success: false, statusCode: 500, message: 'Server error' };
//   }
// }

// // Test async error handling
// (async () => {
//   console.log('🧪 Testing async error handling:\n');
//   await getUser_Correct(1); // Success
//   await getUser_Correct(999); // Error
//   console.log('---\n');
// })();

// // ═══════════════════════════════════════════════════════════════════════════
// // PART 6: Error Wrapper Function (The Deliverable)
// // ═══════════════════════════════════════════════════════════════════════════

// // A reusable function that wraps ANY async function with error handling
// // This is what you'll use in NestJS services!

// async function errorWrapper(asyncFunction, ...args) {
//   try {
//     const result = await asyncFunction(...args);
//     return { success: true, data: result };
//   } catch (error) {
//     // Centralized error handling
//     if (error instanceof NotFoundError) {
//       return { success: false, statusCode: 404, message: error.message };
//     } else if (error instanceof ValidationError) {
//       return { success: false, statusCode: 400, message: error.message };
//     } else if (error instanceof UnauthorizedError) {
//       return { success: false, statusCode: 401, message: error.message };
//     } else {
//       // Unknown errors
//       console.error('Unexpected error:', error);
//       return {
//         success: false,
//         statusCode: 500,
//         message: 'Internal server error',
//       };
//     }
//   }
// }

// // Now you can wrap ANY async function without repeating try/catch everywhere!
// (async () => {
//   console.log('🧪 Testing error wrapper:\n');

//   const result1 = await errorWrapper(fetchUserFromDB, 1);
//   console.log('Wrapper result 1:', result1);

//   const result2 = await errorWrapper(fetchUserFromDB, 999);
//   console.log('Wrapper result 2:', result2);

//   console.log('---\n');
// })();

// ═══════════════════════════════════════════════════════════════════════════
// 🏋️ MICRO-CHALLENGE #1: Create a Custom Error
// ═══════════════════════════════════════════════════════════════════════════

// YOUR TASK:
// 1. Create a "DuplicateError" class
//    - Extends Error
//    - statusCode = 409 (Conflict)
//    - Used when trying to create a user that already exists

// 2. Write a function "createUser(email, users)"
//    - Throws ValidationError if email is missing or invalid
//    - Throws DuplicateError if email already exists in users array
//    - Returns the new user if successful
//
// function createUser(email, users) {
//   if (!email) {
//     throw new ValidationError('Email is missing! Please input your email.');
//     //Validtion: Check if email format is incorrect
//   }
//   if (!email.includes('@')) {
//     throw new ValidationError('Email is invalid! Please input a valid email.');
//   }

//   //Check for duplicate email
//   const existingUser = users.find((u) => u.email === email);
//   if (existingUser) {
//     throw new DuplicateError(`User with email ${email} already exists!`);
//   }
//   const newUser = {
//     id: Date.now(), // Simple unique ID based on timestamp
//     email: email,
//     createdAt: new Date().toISOString(),
//   };
//   users.push(newUser);
//   console.log('✅ User created successfully:', newUser);
//   return newUser;
// }
// createUser();

// Step 1: Create custom error types that EXTEND the built-in Error class

class NotFoundError extends Error {
  constructor(message) {
    super(message); // Call the parent Error constructor
    this.name = 'NotFoundError'; // Give it a unique name
    this.statusCode = 404; // Add custom properties
    Error.captureStackTrace(this, this.constructor); // Capture stack trace for better debugging
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedError';
    this.statusCode = 401;
  }
}

class TimeoutError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TimeoutError';
    this.statusCode = 408;
  }
}
class UknownError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UknownError';
    this.statusCode = 500;
  }
}
class DuplicateError extends Error {
  constructor(message) {
    super(message); //Calling the parent message constructor
    this.name = 'DuplicateError';
    this.statusCode = 409;
  }
}

async function errorWrapper2(asyncFunction, ...args) {
  try {
    const result = await asyncFunction(...args);
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof NotFoundError) {
      console.log(`❌ Error ${error.statusCode}: ${error.message}`);
      return { success: false, statusCode: 400, message: error.message };
    }
    if (error instanceof ValidationError) {
      console.log(`❌ Error ${error.statusCode}: ${error.message}`);
      return { success: false, statusCode: 401, message: error.message };
    }
    if (error instanceof UnauthorizedError) {
      console.log(`❌ Error ${error.statusCode}: ${error.message}`);
      return { success: false, statusCode: 402, message: error.message };
    } else {
      console.log('❌ Error 500: Internal server error');
      return {
        success: false,
        statusCode: 500,
        message: 'Something went wrong',
      };
    }
  }
}

//We can also use
async function errorWrapper3(asyncFunction, ...args) {
  try {
    const result = await asyncFunction(...args);
    return { success: true, data: result };
  } catch (error) {
    if (error.statusCode) {
      console.log(`❌ Error ${error.statusCode}: ${error.message}`);
      return {
        success: false,
        statusCode: error.statusCode,
        message: error.message,
      };
    }
  }
  console.log('❌ Error 500: Internal server error', error);
  return {
    success: false,
    statusCode: 500,
    message: 'Something went wrong',
  };
}

function createUser(user, email) {
  if (!email) {
    throw new ValidationError('Email is missing! Please input your email.');
    //Validtion: Check if email format is incorrect
  }
  if (!email.includes('@')) {
    throw new ValidationError('Email is invalid! Please input a valid email.');
  }
  const existingUser = user.find((u) => u.email === email);
  if (existingUser) {
    throw new DuplicateError(`User with email ${email} already exists!`);
  }
  const newUser = {
    id: Date.now(),
    email: email,
    createdAt: new Date().toISOString(),
  };
  user.push(newUser);
  console.log('✅ User created successfully:', newUser);
  return newUser;
}

//Test the error wrapper
(async () => {
  console.log('🧪 Testing createUser with error wrapper:\n');
  const users = [
    { id: 1, email: 'user1@example.com' },
    { id: 2, email: 'user2@example.com' },
  ];
  //Test 1: Valid Email
  const result1 = await errorWrapper3(createUser, users, 'king@example.com');
  console.log('Create user result 1:', result1);

  //Test 2: Missing Email
  const result2 = await errorWrapper3(createUser, users, '');
  console.log('Test 2: Missing Email', result2);

  //Test 3: Invalid Email
  const result3 = await errorWrapper3(createUser, users, 'invalid-email');
  console.log('Test 3: Invalid Email', result3);

  //Test 4: Duplicate Email
  const result4 = await errorWrapper3(createUser, users, 'user2@example.com');
  console.log('Test 4: Duplicate Email', result4);
})();

// 3. Test it with the errorWrapper

// async function errorwrapper2(email, users) {
//   try {
//     const myResult = await email(users);
//     return { success: true, data: myResult };
//   } catch (error) {
//     if (error instanceof NotFoundError) {
//       return { success: false, statusCode: 404, message: error.message };
//     } else if (error instanceof ValidationError) {
//       return { success: false, statusCode: 400, message: error.message };
//     } else if (error instanceof UnauthorizedError) {
//       return { success: false, statusCode: 401, message: error.message };
//     } else {
//       //Unknown errors
//       console.log('Uknown Error:', error);
//       return {
//         success: false,
//         statusCode: 500,
//         message: 'Internal server error',
//       };
//     }
//   }
// }
// errorwrapper2();

// Write your code here:

// ═══════════════════════════════════════════════════════════════════════════
// 🔗 HOW THIS CONNECTS TO NESTJS
// ═══════════════════════════════════════════════════════════════════════════

// In NestJS, you'll do this:
//
// import { NotFoundException, BadRequestException } from '@nestjs/common';
//
// async findOne(id: number) {
//   const user = await this.userRepository.findOne(id);
//   if (!user) {
//     throw new NotFoundException(`User with ID ${id} not found`);
//   }
//   return user;
// }
//
// NestJS automatically converts these to HTTP responses:
// - NotFoundException → 404 status code + JSON error message
// - BadRequestException → 400 status code + JSON error message
//
// What you're learning TODAY is the foundation of how NestJS works!

// ═══════════════════════════════════════════════════════════════════════════
// 📝 IN THE NUTSHELL: KEY INSIGHTS
// ═══════════════════════════════════════════════════════════════════════════

// 1. Always throw specific errors, never let undefined silently fail
// 2. Use custom error classes to differentiate error types
// 3. Every custom error should extend Error and have a meaningful name
// 4. Always wrap await calls in try/catch blocks
// 5. Error wrapper functions reduce code duplication
// 6. In production, NEVER expose raw error messages to users (security risk)
// 7. Log detailed errors server-side, send generic messages to clients

// console.log(
//   '\n✅ Day 11 Complete! You now understand professional error handling.',
// );
// console.log('💡 Next: Day 12 - ES6 Modules (Splitting code into files)');
