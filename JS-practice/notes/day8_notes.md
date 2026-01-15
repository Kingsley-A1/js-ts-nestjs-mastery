# 📚 Day 8: Callbacks — Complete Notes

> **Date:** January 15, 2026  
> **Topic:** Asynchronous JavaScript Foundation

---

## 🎯 The Core Problem: JavaScript is Single-Threaded

JavaScript can only do **ONE thing at a time**. So what happens when an operation takes time?

```
┌─────────────────────────────────────────────────────────────────────┐
│   THE BLOCKING PROBLEM                                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   console.log("Start")           ← Runs immediately                │
│   readFileFromDisk()             ← Takes 3 seconds... BLOCKED!     │
│   console.log("End")             ← Waiting... waiting... frozen!   │
│                                                                     │
│   Your app is FROZEN for 3 seconds. Users hate this. ❌            │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 💡 The Solution: Callbacks

A **callback** is a function you pass to another function, to be executed LATER when the work is done.

```
┌─────────────────────────────────────────────────────────────────────┐
│   THE NON-BLOCKING SOLUTION                                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   console.log("Start")           ← Runs immediately                │
│   readFile(callback)             ← "I'll call you when done"       │
│   console.log("End")             ← Runs immediately!               │
│                                                                     │
│   ... 3 seconds later ...                                           │
│   callback(data)                 ← "Here's your file!"             │
│                                                                     │
│   App NEVER froze. User is happy. ✅                               │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📞 The Phone Call Analogy

**Ordering Pizza:**

1. You call restaurant: "I want pepperoni pizza"
2. They say: "Takes 30 min. What's your callback (phone number)?"
3. You give your number and **hang up** (non-blocking!)
4. You do other things while waiting
5. 30 min later, they **CALL YOU BACK**: "Pizza ready!"

```javascript
orderPizza('Pepperoni', function (pizza) {
  console.log('Pizza arrived:', pizza);
});

console.log('Doing other things...'); // This runs FIRST!
```

---

## 🔬 Synchronous vs Asynchronous

### Synchronous (Blocking) — One After Another

```javascript
console.log('1');
console.log('2');
console.log('3');

// Output: 1, 2, 3 (in order)
```

### Asynchronous (Non-Blocking) — Callback Later

```javascript
console.log('1');

setTimeout(function () {
  console.log('2'); // Runs AFTER delay
}, 1000);

console.log('3');

// Output: 1, 3, 2 (3 comes before 2!)
```

### 🧠 Key Insight

`setTimeout` does NOT pause JavaScript. It schedules the callback for later and **immediately moves to the next line**.

---

## 🛠️ Creating Functions That Accept Callbacks

### Basic Pattern

```javascript
function fetchUser(userId, callback) {
  // Simulate async operation (like database query)
  setTimeout(function () {
    const user = { id: userId, name: 'Kingsley' };
    callback(user); // Execute the callback with data
  }, 1000);
}

// Usage
fetchUser(1, function (user) {
  console.log('Got user:', user);
});
```

---

## ⚠️ Error-First Callback Pattern (Node.js Standard)

In Node.js, **all callbacks follow this convention**:

```javascript
callback(error, result);
//       ^^^^   ^^^^^^
//       First  Second (only if no error)
```

### Implementation

```javascript
function divideNumbers(a, b, callback) {
  setTimeout(function () {
    if (b === 0) {
      // ERROR: first param is error, second is null
      callback(new Error('Cannot divide by zero'), null);
      return;
    }
    // SUCCESS: first param is null (no error), second is result
    callback(null, a / b);
  }, 500);
}
```

### Usage

```javascript
divideNumbers(10, 2, function (error, result) {
  if (error) {
    console.log('ERROR:', error.message);
    return; // ALWAYS return early on error!
  }
  console.log('Result:', result); // 5
});
```

### Why Error First?

- **Consistency**: Every Node.js async function follows this pattern
- **Safety**: Forces you to handle errors before using data
- **Convention**: The entire ecosystem expects it

---

## ⛓️ Sequential Callbacks (Chaining)

When operation B depends on operation A's result, you MUST nest:

```javascript
fetchUser(1, function (error, user) {
  if (error) return console.log(error);

  // NESTED: fetchPosts only runs AFTER we have user
  fetchPosts(user.id, function (error, posts) {
    if (error) return console.log(error);

    console.log(`${user.name} has ${posts.length} posts`);
  });
});
```

### 🔥 Critical Insight: Scope

```javascript
// WRONG - user is not defined in fetchPosts callback!
fetchUser(1, (err, user) => {
  console.log(user);
});
fetchPosts(1, (err, posts) => {
  console.log(user.name); // ❌ ERROR: user is not defined
});

// RIGHT - nested callbacks share scope
fetchUser(1, (err, user) => {
  fetchPosts(user.id, (err, posts) => {
    console.log(user.name); // ✅ user is in scope!
  });
});
```

---

## 😈 Callback Hell (The Problem)

When you need many sequential operations:

```javascript
getUser(1, function (err, user) {
  if (err) return handleError(err);

  getOrders(user.id, function (err, orders) {
    if (err) return handleError(err);

    getProducts(orders[0].id, function (err, products) {
      if (err) return handleError(err);

      getInventory(products[0].id, function (err, inventory) {
        if (err) return handleError(err);

        // 😵 THE PYRAMID OF DOOM
        console.log('Finally:', inventory);
      });
    });
  });
});
```

### Problems with Callback Hell

1. **Readability**: Code moves right, not down
2. **Error handling**: Repeated at every level
3. **Debugging**: Hard to trace execution flow
4. **Maintainability**: Adding/removing steps is error-prone

> **This is why Promises (Day 9) and Async/Await (Day 10) were invented!**

---

## 🔧 Real-World: Node.js File System

```javascript
const fs = require('fs');

// Reading a file (async, non-blocking)
fs.readFile('data.txt', 'utf8', function (err, data) {
  if (err) {
    console.log('Error:', err.message);
    return;
  }
  console.log('File contents:', data);
});

console.log('This runs while file is being read!');
```

---

## 🧠 Mental Model: The Event Loop

```
┌─────────────────────────────────────────────────────────────────────┐
│                      JAVASCRIPT EVENT LOOP                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. Run synchronous code (top to bottom)                          │
│   2. Encounter async operation (setTimeout, fs.readFile)           │
│   3. Register callback and continue                                │
│   4. When async completes, put callback in queue                   │
│   5. When call stack is empty, run queued callbacks                │
│                                                                     │
│   ┌─────────────┐      ┌─────────────┐      ┌─────────────┐        │
│   │ Call Stack  │  ──► │ Web APIs /  │  ──► │  Callback   │        │
│   │ (your code) │      │   Node.js   │      │   Queue     │        │
│   └─────────────┘      └─────────────┘      └─────────────┘        │
│         ▲                                          │               │
│         └──────────── Event Loop ◄─────────────────┘               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔗 NestJS Connection

NestJS abstracts callbacks away using Promises and async/await, but underneath:

```typescript
// What you'll write in NestJS:
@Injectable()
export class UsersService {
  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }
}

// What's happening under the hood (simplified):
database.query(sql, function (err, rows) {
  if (err) reject(err);
  resolve(rows[0]);
});
```

> **Callbacks are the foundation. Promises/Async are the abstraction.**

---

## 🧠 Quick Reference

| Concept             | Pattern                                 |
| ------------------- | --------------------------------------- |
| Basic callback      | `function(result) { }`                  |
| Error-first         | `function(error, result) { }`           |
| Check error first   | `if (error) return handleError(error);` |
| Sequential (nested) | Callback inside callback                |
| setTimeout          | `setTimeout(callback, ms)`              |
| File read           | `fs.readFile(path, encoding, callback)` |

---

## ✅ Day 8 Checklist

- [x] Understand why JavaScript needs async (single-threaded)
- [x] Know what a callback is (function passed to function)
- [x] Understand sync vs async execution order
- [x] Use the error-first callback pattern
- [x] Chain callbacks for sequential operations
- [x] Understand callback hell and its problems
- [x] Use Node.js fs.readFile with callbacks

---

## 🔮 What's Coming Next

```
┌─────────────────────────────────────────────────────────────────────┐
│                    THE ASYNC EVOLUTION                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Day 8:  Callbacks     ✅ COMPLETE ← Foundation (the hard way)    │
│   Day 9:  Promises      ⬜ NEXT     ← .then().catch() chains       │
│   Day 10: Async/Await   ⬜          ← The modern way (NestJS uses) │
│                                                                     │
│   Each step BUILDS on the previous.                                │
│   Callbacks → Promises → Async/Await                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Day 9 Preview: Promises

```javascript
// Callback Hell:
getUser(1, (err, user) => {
  getOrders(user.id, (err, orders) => {
    // Pyramid...
  });
});

// Promise Chain (tomorrow!):
getUser(1)
  .then((user) => getOrders(user.id))
  .then((orders) => console.log(orders))
  .catch((err) => console.log(err));
```

---

**Next Up:** Day 9 — Promises (The Callback Hell Killer!)
