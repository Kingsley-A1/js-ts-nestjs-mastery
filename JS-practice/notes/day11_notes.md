# 📚 Day 11: Error Handling — Complete Notes

> **Date:** February 8, 2026  
> **Topic:** Professional Error Handling with Custom Error Classes

---

## 🎯 The Core Problem: Silent Failures

```javascript
function getUser(id, users) {
  const user = users.find(u => u.id === id);
  return user; // ❌ Returns undefined if not found
}

const user = getUser(999, users);
console.log(user.name); // 💥 CRASH: "Cannot read property 'name' of undefined"
```

**The Problem:**
- The error happens **far away** from where it started
- No clear error message
- Hard to debug
- Bad user experience

---

## 🚨 The `throw` Keyword

### What `throw` Does

```javascript
function getUser(id, users) {
  const user = users.find(u => u.id === id);
  
  if (!user) {
    throw new Error(`User ${id} not found`); // ✅ Explicit error
  }
  
  return user;
}
```

### Execution Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                    HOW `throw` WORKS                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. JavaScript encounters `throw`                                 │
│   2. STOPS current function execution immediately                  │
│   3. Looks for the nearest `try/catch` block                       │
│   4. Jumps to `catch` block (skipping all code in between)         │
│   5. If no catch found, crashes the program                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Using try/catch

```javascript
try {
  const user = getUser(999, users); // throws error
  console.log(user.name); // ❌ This line NEVER runs
} catch (error) {
  console.log('Caught error:', error.message); // ✅ Runs this
}

console.log('Program continues'); // ✅ App doesn't crash
```

---

## ❓ Why `throw` Instead of `return`?

### ❌ Using `return` for Errors (Bad Pattern)

```javascript
function getUser(id, users) {
  const user = users.find(u => u.id === id);
  
  if (!user) {
    return new Error('User not found'); // ❌ Returns error object
  }
  
  return user;
}

// The caller must manually check
const result = getUser(999, users);

// ❌ Developer forgets to check and uses it as a user
console.log(result.name); // Might access .name on an Error object!

// ✅ Developer must remember to check
if (result instanceof Error) {
  console.log('Error:', result.message);
} else {
  console.log('User:', result.name);
}
```

**Problems with `return` for errors:**
1. Easy to forget to check if result is an error
2. No automatic error handling
3. Errors can be silently ignored
4. No stack trace jumping

### ✅ Using `throw` for Errors (Correct Pattern)

```javascript
function getUser(id, users) {
  const user = users.find(u => u.id === id);
  
  if (!user) {
    throw new Error('User not found'); // ✅ Forces handling
  }
  
  return user;
}

// ❌ If you forget try/catch, app crashes (which is GOOD!)
// You are FORCED to handle errors

// ✅ Proper usage
try {
  const user = getUser(999, users);
  console.log(user.name);
} catch (error) {
  console.log('Error:', error.message);
}
```

**Benefits of `throw`:**
1. **Impossible to ignore** — crashes if not caught
2. **Automatic** — jumps to catch block
3. **Stack traces** — shows where error originated
4. **Separation** — success path vs error path are separated

---

## 🔧 The Built-in Error Object

### Basic Usage

```javascript
throw new Error('Something went wrong');
```

### Error Properties

```javascript
try {
  throw new Error('Test error');
} catch (error) {
  console.log(error.message);    // "Test error"
  console.log(error.name);       // "Error"
  console.log(error.stack);      // Full stack trace
}
```

---

## 🎨 Custom Error Classes

### The Problem with Generic Errors

```javascript
function login(email, password) {
  if (!email) {
    throw new Error('Something went wrong'); // ❌ Too vague
  }
  
  if (!email.includes('@')) {
    throw new Error('Something went wrong'); // ❌ Same message
  }
  
  if (password.length < 8) {
    throw new Error('Something went wrong'); // ❌ No hint
  }
  
  return { token: 'abc123' };
}
```

**How do you:**
- Send different HTTP status codes?
- Give users specific feedback?
- Log different error types differently?

### The Solution: Custom Error Classes

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);              // Call parent Error constructor
    this.name = 'ValidationError'; // Unique identifier
    this.statusCode = 400;        // Custom property
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedError';
    this.statusCode = 401;
  }
}
```

### Anatomy of a Custom Error

```
class NotFoundError extends Error {
      ──────┬──────        ─┬───
            │               └── Inherit from built-in Error
            └─────────────────── Your custom name

  constructor(message) {
    super(message);   ◄── Call parent constructor
    ─────┬─────
         └── Must call super() before using 'this'
    
    this.name = 'NotFoundError'; ◄── Set error name
    this.statusCode = 404;       ◄── Add custom properties
  }
}
```

### Using Custom Errors

```javascript
function login(email, password) {
  if (!email) {
    throw new ValidationError('Email is required');
  }
  
  if (!email.includes('@')) {
    throw new ValidationError('Invalid email format');
  }
  
  if (password !== 'secret123') {
    throw new UnauthorizedError('Invalid credentials');
  }
  
  return { token: 'jwt-token' };
}
```

### Handling Different Error Types

```javascript
try {
  const result = login('bad-email', 'pass');
} catch (error) {
  // Check error TYPE using instanceof
  if (error instanceof ValidationError) {
    console.log(`Bad request (${error.statusCode}): ${error.message}`);
    // Send 400 response
  } else if (error instanceof UnauthorizedError) {
    console.log(`Unauthorized (${error.statusCode}): ${error.message}`);
    // Send 401 response
  } else if (error instanceof NotFoundError) {
    console.log(`Not found (${error.statusCode}): ${error.message}`);
    // Send 404 response
  } else {
    console.log('Unknown error:', error.message);
    // Send 500 response
  }
}
```

---

## ⏳ Async Error Handling

### The Problem

```javascript
// ❌ WRONG: Forgot try/catch
async function getUser(id) {
  const user = await fetchFromDB(id); // What if this rejects?
  return user; // App crashes!
}
```

### The Solution

```javascript
// ✅ CORRECT: Wrap in try/catch
async function getUser(id) {
  try {
    const user = await fetchFromDB(id);
    return user;
  } catch (error) {
    console.log('Database error:', error.message);
    throw error; // Re-throw if needed
  }
}
```

### Golden Rule

> **EVERY `await` must be inside a `try/catch` block**

---

## 🔄 Error Wrapper Pattern

### The Problem: Repeated try/catch

```javascript
// Without wrapper - repetitive
async function endpoint1() {
  try {
    const result = await operation1();
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof NotFoundError) {
      return { success: false, statusCode: 404, message: error.message };
    }
    // ... more error types
  }
}

async function endpoint2() {
  try {
    const result = await operation2();
    return { success: true, data: result };
  } catch (error) {
    // ❌ Same error handling repeated!
    if (error instanceof NotFoundError) {
      return { success: false, statusCode: 404, message: error.message };
    }
    // ...
  }
}
```

### The Solution: Centralized Error Wrapper

```javascript
async function errorWrapper(fn, ...args) {
  try {
    const result = await fn(...args);
    return { success: true, data: result };
  } catch (error) {
    // Handle ALL error types in ONE place
    if (error instanceof NotFoundError) {
      return { success: false, statusCode: 404, message: error.message };
    } else if (error instanceof ValidationError) {
      return { success: false, statusCode: 400, message: error.message };
    } else if (error instanceof UnauthorizedError) {
      return { success: false, statusCode: 401, message: error.message };
    } else if (error instanceof DuplicateError) {
      return { success: false, statusCode: 409, message: error.message };
    } else {
      console.error('Unexpected error:', error);
      return { success: false, statusCode: 500, message: 'Internal server error' };
    }
  }
}
```

### Usage

```javascript
// Clean and reusable!
const result1 = await errorWrapper(createUser, 'king@example.com', users);
const result2 = await errorWrapper(fetchUserFromDB, 123);
const result3 = await errorWrapper(deleteProduct, 456);
```

---

## 🎯 Smart Error Handling Pattern

Instead of checking every error type with `instanceof`, check for shared properties:

```javascript
async function errorWrapper(fn, ...args) {
  try {
    const result = await fn(...args);
    return { success: true, data: result };
  } catch (error) {
    // ✅ Smart: Check if it has statusCode (custom error)
    if (error.statusCode) {
      return {
        success: false,
        statusCode: error.statusCode,
        message: error.message,
      };
    }
    
    // Unknown error (no statusCode property)
    console.error('Unexpected error:', error);
    return {
      success: false,
      statusCode: 500,
      message: 'Internal server error',
    };
  }
}
```

**Why this works:**
- All your custom errors have `statusCode`
- Native errors (like `TypeError`) don't have `statusCode`
- One check instead of multiple `instanceof` checks

---

## 🔗 NestJS Connection

### What You Learned Today

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}

function createUser(email) {
  if (!email.includes('@')) {
    throw new ValidationError('Invalid email');
  }
  return { id: 1, email };
}
```

### What You'll Write in NestJS

```typescript
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class UsersService {
  createUser(email: string) {
    if (!email.includes('@')) {
      throw new BadRequestException('Invalid email'); // ✅ Same concept!
    }
    return { id: 1, email };
  }
}
```

### NestJS Built-in Exceptions

| Your Custom Error      | NestJS Equivalent           | Status Code |
| ---------------------- | --------------------------- | ----------- |
| `ValidationError`      | `BadRequestException`       | 400         |
| `UnauthorizedError`    | `UnauthorizedException`     | 401         |
| `NotFoundError`        | `NotFoundException`         | 404         |
| `DuplicateError`       | `ConflictException`         | 409         |
| Generic `Error`        | `InternalServerErrorException` | 500      |

**What NestJS does automatically:**
1. Catches thrown exceptions
2. Converts them to HTTP responses
3. Sends JSON: `{ "statusCode": 404, "message": "User not found" }`
4. Logs errors server-side

> **You built the foundation today. Week 5-6 will feel familiar!**

---

## 🧠 Mental Model: Error Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ERROR HANDLING FLOW                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   function createUser(email, users) {                              │
│     if (!email) {                                                   │
│       throw new ValidationError(...) ◄── 1. Error is thrown        │
│     }                                                                │
│     // ... ◄── Code after throw NEVER runs                         │
│   }                                                                  │
│                                                                     │
│   try {                                                              │
│     const user = createUser('', users) ◄── 2. Function called      │
│     console.log(user) ◄── SKIPPED                                  │
│   } catch (error) {         ▲                                       │
│     // Handle error ◄───────┘ 3. Jump to catch                     │
│   }                                                                  │
│                                                                     │
│   console.log('continues') ◄── 4. Execution continues              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```
```JavaScript

function createUser(email, users){
  if(!email){
    throw new ValidationError(`Error: ${error}`)
  }
}
try{
  const user = createUser('', users)
  console.log(user)
}catch(error){
  console.log(error.message)
}
```
---

## 📋 Common HTTP Status Codes for Errors

| Code | Name                  | When to Use                                    |
| ---- | --------------------- | ---------------------------------------------- |
| 400  | Bad Request           | Invalid input, validation failure              |
| 401  | Unauthorized          | Missing or invalid authentication              |
| 403  | Forbidden             | Authenticated but not allowed                  |
| 404  | Not Found             | Resource doesn't exist                         |
| 409  | Conflict              | Duplicate resource (e.g., email already exists)|
| 422  | Unprocessable Entity  | Valid syntax but semantic errors               |
| 500  | Internal Server Error | Unexpected server error                        |
| 503  | Service Unavailable   | Server temporarily down                        |

---

## ✅ Day 11 Checklist

- [x] Understand why `throw` is better than `return` for errors
- [x] Use `try/catch` blocks to handle errors
- [x] Create custom error classes that extend `Error`
- [x] Add custom properties to errors (like `statusCode`)
- [x] Use `instanceof` to check error types
- [x] Handle async errors with `try/catch` around `await`
- [x] Build reusable error wrapper functions
- [x] Understand how this maps to NestJS exceptions

---

## 🔮 What's Coming Next

```
┌─────────────────────────────────────────────────────────────────────┐
│                    WEEK 2 PROGRESS                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Day 8:  Callbacks        ✅ DONE ← Foundation                    │
│   Day 9:  Promises         ✅ DONE ← .then().catch()               │
│   Day 10: Async/Await      ✅ DONE ← Modern async                  │
│   Day 11: Error Handling   ✅ DONE ← Professional errors           │
│   Day 12: ES6 Modules      ⬜ NEXT ← import/export                 │
│                                                                     │
│   You now have ALL the async tools a backend engineer needs!       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Day 12 Preview: ES6 Modules

```javascript
// Today: All code in one file (messy)

// Tomorrow: Split into organized files
// errors.js
export class ValidationError extends Error { ... }

// user-service.js
import { ValidationError } from './errors.js';

export function createUser(email) { ... }

// main.js
import { createUser } from './user-service.js';
```

**Why this matters for NestJS:**
- Every NestJS file is a module
- You'll import/export classes, functions, decorators
- Organized code = maintainable projects

---

**Next Up:** Day 12 — ES6 Modules (Organizing Code Like a Pro!)
