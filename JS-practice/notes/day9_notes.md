# 📚 Day 9: Promises — Complete Notes

> **Date:** January 18, 2026  
> **Topic:** The Callback Hell Killer

---

## 🎯 The Core Concept: What is a Promise?

A **Promise** is an object representing a value that will be available **in the future**.

```
┌─────────────────────────────────────────────────────────────────────┐
│                      PROMISE = FUTURE VALUE                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Think of it like ordering coffee at a busy café:                 │
│                                                                     │
│   1. You order → Barista gives you a RECEIPT (Promise)             │
│   2. You wait → Coffee is being made (Pending)                     │
│   3. Coffee ready → Your name is called (Fulfilled)                │
│      Coffee machine broke → "Sorry, no coffee" (Rejected)          │
│                                                                     │
│   The RECEIPT is your Promise. It represents future coffee.        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔄 The Three States of a Promise

```
                    ┌────────────────────────────────────┐
                    │                                    │
                    │            PENDING                 │
                    │         (waiting...)               │
                    │                                    │
                    └─────────────┬──────────────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                    ▼                           ▼
        ┌───────────────────┐       ┌───────────────────┐
        │                   │       │                   │
        │    FULFILLED      │       │     REJECTED      │
        │    (success!)     │       │     (failed!)     │
        │                   │       │                   │
        └─────────┬─────────┘       └─────────┬─────────┘
                  │                           │
                  ▼                           ▼
              .then()                     .catch()
```

| State         | Meaning               | What Happens             |
| ------------- | --------------------- | ------------------------ |
| **Pending**   | Operation in progress | Waiting for result       |
| **Fulfilled** | Operation succeeded   | `.then()` callback runs  |
| **Rejected**  | Operation failed      | `.catch()` callback runs |

> **Once settled (fulfilled or rejected), a Promise cannot change state again.**

---

## 🛠️ Creating a Promise

### The Anatomy

```javascript
const myPromise = new Promise((resolve, reject) => {
  //         ┌─── Call this if SUCCESS
  //         │        ┌─── Call this if FAILURE
  //         ▼        ▼
  // (resolve, reject) => { ... }

  if (everythingWorked) {
    resolve("Here's your data!"); // Promise FULFILLED
  } else {
    reject(new Error('Something broke')); // Promise REJECTED
  }
});
```

### Real Example: Simulating Database Fetch

```javascript
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
```

### 🔥 Key Insight: Return the Promise!

```javascript
// ❌ WRONG - Returns undefined
function fetchUser(userId) {
    new Promise((resolve, reject) => { ... });
}

// ✅ CORRECT - Returns the Promise
function fetchUser(userId) {
    return new Promise((resolve, reject) => { ... });
}
```

---

## 🔗 Consuming Promises: .then() and .catch()

### Basic Usage

```javascript
fetchUser(1)
  .then((user) => {
    console.log('Success:', user); // Runs if fulfilled
  })
  .catch((error) => {
    console.log('Error:', error.message); // Runs if rejected
  });
```

### The .then() Return Value

Whatever you return in `.then()` becomes the value for the NEXT `.then()`:

```javascript
fetchUser(1)
  .then((user) => {
    console.log(user);
    return user.id; // Return a value
  })
  .then((userId) => {
    console.log('ID:', userId); // Receives that value
    return userId * 2;
  })
  .then((doubled) => {
    console.log('Doubled:', doubled);
  });
```

### 🧠 Critical Rule: Return Promises in .then()

```javascript
getUser(1)
  .then((user) => {
    return fetchPosts(user.id); // ← Returns a Promise!
  })
  .then((posts) => {
    // This .then() waits for fetchPosts to resolve
    console.log(posts);
  });
```

**If you return a Promise, the next `.then()` waits for it to resolve!**

---

## ⛓️ Promise Chaining vs Callback Hell

### Callback Hell (Before Promises)

```javascript
getUser(1, (err, user) => {
  if (err) return handleError(err);

  getOrders(user.id, (err, orders) => {
    if (err) return handleError(err);

    getProducts(orders[0].id, (err, products) => {
      if (err) return handleError(err);

      console.log(products); // 😵 Pyramid of Doom
    });
  });
});
```

### Promise Chain (After Promises)

```javascript
getUser(1)
  .then((user) => getOrders(user.id))
  .then((orders) => getProducts(orders[0].id))
  .then((products) => console.log(products))
  .catch((err) => handleError(err)); // One catch for ALL errors!
```

### Visual Comparison

```
CALLBACKS:                    PROMISES:
───────────                   ─────────
getUser ──┐                   getUser
          │                       │
    getOrders ──┐                 ▼
                │             getOrders
        getProducts ──┐           │
                      │           ▼
               console.log    getProducts
                                  │
                                  ▼
                             console.log
```

---

## 🛡️ Error Handling Deep Dive

### .catch() Catches Errors from ANYWHERE Above

```javascript
fetchUser(1)
  .then((user) => {
    throw new Error('Something broke!'); // Error here...
  })
  .then((data) => {
    console.log(data); // SKIPPED!
  })
  .then((more) => {
    console.log(more); // SKIPPED!
  })
  .catch((err) => {
    console.log('Caught:', err.message); // ...caught here!
  });
```

### Recovering from Errors

```javascript
fetchUser(-1) // Will reject
  .catch((err) => {
    console.log('User not found, using default');
    return { id: 0, name: 'Guest' }; // Return fallback
  })
  .then((user) => {
    console.log('Using:', user.name); // "Guest"
  });
```

---

## 🔧 .finally() — Always Runs

```javascript
let isLoading = true;

fetchUser(1)
  .then((user) => console.log(user))
  .catch((err) => console.log(err))
  .finally(() => {
    isLoading = false; // ALWAYS runs!
    console.log('Loading complete');
  });
```

**Use cases:**

- Hide loading spinners
- Close database connections
- Cleanup resources

---

## 🚀 Promise Static Methods

### Promise.all() — Wait for ALL

```javascript
const users = Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)]);

users.then((results) => {
  console.log(results); // [user1, user2, user3]
});
```

⚠️ **If ANY Promise rejects, the whole thing rejects!**

### Promise.allSettled() — Get All Results

```javascript
Promise.allSettled([
  fetchUser(1),
  fetchUser(-1), // This will fail
  fetchUser(3),
]).then((results) => {
  // Gets ALL results, success or failure
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      console.log('Success:', result.value);
    } else {
      console.log('Failed:', result.reason);
    }
  });
});
```

### Promise.race() — First One Wins

```javascript
Promise.race([
  fetchFromServer1(), // Takes 2 seconds
  fetchFromServer2(), // Takes 1 second ← WINS!
  fetchFromServer3(), // Takes 3 seconds
]).then((winner) => {
  console.log('First result:', winner);
});
```

### Quick Creation

```javascript
// Already resolved Promise
const resolved = Promise.resolve({ data: 'instant' });

// Already rejected Promise
const rejected = Promise.reject(new Error('instant fail'));
```

---

## 🧠 Mental Models

### Callback vs Promise: Control Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                     INVERSION OF CONTROL                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   CALLBACK:                                                         │
│   "Here's my callback. YOU call it when ready."                    │
│   → You GIVE control to the other function                         │
│   → You TRUST it will call your callback correctly                 │
│                                                                     │
│   PROMISE:                                                          │
│   "Give me a Promise. I'LL decide when to handle it."              │
│   → You RECEIVE a token (Promise)                                  │
│   → You CONTROL when and how to handle results                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### The Chain as a Pipeline

```
┌─────────────────────────────────────────────────────────────────────┐
│                      PROMISE PIPELINE                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   INPUT ──► .then() ──► .then() ──► .then() ──► OUTPUT             │
│                │            │            │                         │
│                ▼            ▼            ▼                         │
│              transform   transform   transform                     │
│                                                                     │
│   Any step can: 1) Return a value (passes to next)                 │
│                 2) Return a Promise (next waits)                   │
│                 3) Throw error (jumps to .catch())                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔗 NestJS Connection

Promises are the FOUNDATION of NestJS:

```typescript
@Injectable()
export class UsersService {
  constructor(private userRepository: Repository<User>) {}

  // This returns a Promise<User>!
  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  // This also returns a Promise<User[]>!
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}

@Controller('users')
export class UsersController {
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User> {
    // NestJS automatically waits for Promise to resolve
    return this.usersService.findOne(id);
  }
}
```

> **Everything async in NestJS is a Promise under the hood!**

---

## 🧠 Quick Reference

| Syntax                                 | Purpose                        |
| -------------------------------------- | ------------------------------ |
| `new Promise((resolve, reject) => {})` | Create a Promise               |
| `promise.then(onFulfilled)`            | Handle success                 |
| `promise.catch(onRejected)`            | Handle error                   |
| `promise.finally(onComplete)`          | Always run (cleanup)           |
| `Promise.all([...])`                   | Wait for all (fail-fast)       |
| `Promise.allSettled([...])`            | Wait for all (get all results) |
| `Promise.race([...])`                  | First to complete              |
| `Promise.resolve(value)`               | Create fulfilled Promise       |
| `Promise.reject(error)`                | Create rejected Promise        |

---

## ✅ Day 9 Checklist

- [x] Understand what a Promise represents (future value)
- [x] Know the 3 states: pending, fulfilled, rejected
- [x] Create Promises with `new Promise()`
- [x] Use `.then()` for success handling
- [x] Use `.catch()` for error handling
- [x] Chain Promises (return in .then())
- [x] Use `Promise.all()` for parallel operations
- [x] Understand .finally() for cleanup

---

## 🔮 What's Coming Next

```
┌─────────────────────────────────────────────────────────────────────┐
│                    THE ASYNC EVOLUTION                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Day 8:  Callbacks     ✅ Foundation (the hard way)               │
│   Day 9:  Promises      ✅ COMPLETE ← .then().catch() chains       │
│   Day 10: Async/Await   ⬜ NEXT     ← The modern way!              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

   PREVIEW: Async/Await makes Promises feel like sync code!

   // Promise Chain:
   fetchUser(1)
       .then(user => fetchPosts(user.id))
       .then(posts => console.log(posts));

   // Async/Await (tomorrow!):
   const user = await fetchUser(1);
   const posts = await fetchPosts(user.id);
   console.log(posts);
```

---

**Next Up:** Day 10 — Async/Await (Where Promises Become Beautiful!)
