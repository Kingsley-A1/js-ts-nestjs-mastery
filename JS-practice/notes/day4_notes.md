# 📚 Day 4: Array Methods — Complete Notes

> **Date:** January 11, 2026  
> **Topic:** Transforming & Filtering Data

---

## 🎯 The Big Picture

Array methods are **tools for processing lists**. Instead of writing loops, you use these methods to transform, filter, search, and reduce data.

```
┌─────────────────────────────────────────────────────────────────────┐
│   INPUT ARRAY   →   ARRAY METHOD   →   OUTPUT                      │
│   [items]       →   .map/.filter   →   [new items] or single value │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔑 FIRST: What is a Callback Function?

> **THIS IS IMPORTANT — Read carefully!**

### The Problem You Had

You see this and get confused:

```javascript
users.filter((user) => user.active);
//           ^^^^^^^^^^^^^^^^^^^^
//           What IS this thing?!
```

### The Answer: A Callback is a "Worker You Hire"

Think of it like this:

**Scenario:** You're a restaurant manager. You have 100 order tickets (array). You need to find all orders for "Table 5".

**Option 1 (You do it yourself — the loop way):**

```javascript
const table5Orders = [];
for (let i = 0; i < tickets.length; i++) {
  if (tickets[i].table === 5) {
    table5Orders.push(tickets[i]);
  }
}
```

**Option 2 (You hire a worker — the callback way):**

```javascript
const table5Orders = tickets.filter((ticket) => ticket.table === 5);
//                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                                  This is the "worker" (callback)
```

### Breaking It Down

```javascript
tickets.filter((ticket) => ticket.table === 5);
```

| Part                 | What It Is            | Restaurant Analogy         |
| -------------------- | --------------------- | -------------------------- |
| `tickets`            | The array             | Stack of 100 order tickets |
| `.filter()`          | The machine           | The sorting machine        |
| `ticket =>`          | The worker's hands    | Worker picks up ONE ticket |
| `ticket.table === 5` | The worker's decision | "Is this Table 5?"         |

### The Most Important Insight 💡

**A callback is a function you give to another function.**

The `.filter()` method is saying:

> "Hey, I'll loop through every item for you. Just tell me what to CHECK for each item."

You respond by giving it a callback:

> "For each item, check if `item.table === 5`"

### Three Ways to Write the Same Callback

```javascript
// 1. Arrow function (shortest — use this!)
tickets.filter((ticket) => ticket.table === 5);

// 2. Arrow function with braces (when you need multiple lines)
tickets.filter((ticket) => {
  return ticket.table === 5;
});

// 3. Traditional function (old way)
tickets.filter(function (ticket) {
  return ticket.table === 5;
});
```

> **Rule:** Always use the arrow syntax. It's cleaner and modern.

---

## 🔄 1. `.map()` — Transform Every Item

**Purpose:** Take an array → **change** each item → get a new array.

```javascript
const prices = [100, 200, 300];

// Apply 10% discount to each
const discounted = prices.map((price) => price * 0.9);
// → [90, 180, 270]
```

### Real-World Example: Extract Names

```javascript
const users = [
  { id: 1, name: 'Kingsley', email: 'king@mail.com' },
  { id: 2, name: 'Ada', email: 'ada@mail.com' },
  { id: 3, name: 'Chidi', email: 'chidi@mail.com' },
];

const names = users.map((user) => user.name);
// → ["Kingsley", "Ada", "Chidi"]
```

### Key Facts About `.map()`

- ✅ Returns a **new array** (original unchanged)
- ✅ Output array has **same length** as input
- ✅ Each item is **transformed** by the callback

---

## 🔍 2. `.filter()` — Keep Matching Items

**Purpose:** Take an array → **keep** items that pass a test → get a new array.

```javascript
const prices = [50, 100, 150, 200, 250];

// Keep only prices over 100
const expensive = prices.filter((price) => price > 100);
// → [150, 200, 250]
```

### Real-World Example: Active Users

```javascript
const users = [
  { name: 'Kingsley', active: true },
  { name: 'Ada', active: false },
  { name: 'Chidi', active: true },
];

const activeUsers = users.filter((user) => user.active);
// → [{ name: "Kingsley"... }, { name: "Chidi"... }]
```

### Key Facts About `.filter()`

- ✅ Returns a **new array** (original unchanged)
- ✅ Output array may be **shorter** (or empty!)
- ✅ Callback must return `true` or `false`

---

## 🎯 3. `.find()` — Get First Match

**Purpose:** Take an array → find the **first** item that matches → return that ONE item.

```javascript
const users = [
  { id: 1, name: 'Kingsley' },
  { id: 2, name: 'Ada' },
  { id: 3, name: 'Chidi' },
];

const user = users.find((user) => user.id === 2);
// → { id: 2, name: "Ada" }

// If not found:
const notFound = users.find((user) => user.id === 999);
// → undefined
```

### Key Facts About `.find()`

- ⚠️ Returns **ONE item** (not an array!)
- ⚠️ Returns `undefined` if no match
- ✅ Stops searching after first match (efficient!)

---

## ➕ 4. `.reduce()` — Combine Into One Value

**Purpose:** Take an array → combine all items into **one final value**.

```javascript
const prices = [10, 20, 30, 40];

// Sum all prices
const total = prices.reduce((sum, price) => sum + price, 0);
// → 100
```

### How It Works (Step by Step)

```javascript
// reduce((accumulator, currentItem) => newAccumulator, startValue)

[10, 20, 30].reduce((sum, price) => sum + price, 0);

// Step 1: sum = 0,  price = 10  →  0 + 10 = 10
// Step 2: sum = 10, price = 20  →  10 + 20 = 30
// Step 3: sum = 30, price = 30  →  30 + 30 = 60
// Final: 60
```

### Key Facts About `.reduce()`

- ✅ Returns a **single value** (number, string, object, etc.)
- ✅ Most powerful but most complex
- ✅ `0` at the end is the starting value

---

## ⛓️ 5. Method Chaining

You can **connect methods together**:

```javascript
const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Phone', price: 500, inStock: false },
  { name: 'Tablet', price: 300, inStock: true },
  { name: 'Watch', price: 200, inStock: true },
];

// Get names of in-stock items under $500
const result = products
  .filter((p) => p.inStock) // Keep in-stock only
  .filter((p) => p.price < 500) // Keep under $500
  .map((p) => p.name); // Get names only

// → ["Tablet", "Watch"]
```

### Reading Chains (Top to Bottom)

```javascript
products // Start with all products
  .filter((p) => p.inStock) // Step 1: Keep in-stock
  .filter((p) => p.price < 500) // Step 2: Keep cheap ones
  .map((p) => p.name); // Step 3: Extract names
```

---

## 🔧 Under the Hood

Each method is just a **loop with superpowers**:

```javascript
// What .filter() does internally:
function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      // If callback returns true
      result.push(array[i]); // Add to result
    }
  }
  return result;
}

// What .find() does internally:
function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      // If callback returns true
      return array[i]; // STOP and return immediately
    }
  }
  return undefined; // Nothing found
}
```

---

## 🧠 Quick Reference Table

| Method      | Input | Output                     | Use When                  |
| ----------- | ----- | -------------------------- | ------------------------- |
| `.map()`    | Array | New array (same length)    | Transform each item       |
| `.filter()` | Array | New array (may be shorter) | Keep matching items       |
| `.find()`   | Array | Single item or `undefined` | Find one specific item    |
| `.reduce()` | Array | Single value               | Calculate totals, combine |

---

## 🔗 NestJS Connection

In NestJS, you'll use these constantly:

```typescript
// In a Service
@Injectable()
export class UsersService {
    private users: User[] = [...];

    // Find user by ID
    findOne(id: number): User {
        return this.users.find(user => user.id === id);
    }

    // Get all active users
    findActive(): User[] {
        return this.users.filter(user => user.active);
    }

    // Get just the names
    getAllNames(): string[] {
        return this.users.map(user => user.name);
    }
}
```

---

## ✅ Day 4 Checklist

- [x] Understand what a callback function is
- [x] Use `.map()` to transform arrays
- [x] Use `.filter()` to keep matching items
- [x] Use `.find()` to get one item
- [x] Understand `.reduce()` basics
- [x] Chain methods together
- [x] Understand what happens "under the hood"

---

## 🧠 Callback Mental Model Summary

```
┌─────────────────────────────────────────────────────────────────────┐
│                     CALLBACK = WORKER YOU HIRE                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   YOU:     "Hey .filter(), go through this array for me."          │
│                                                                     │
│   FILTER:  "Sure! But what should I CHECK for each item?"          │
│                                                                     │
│   YOU:     "Here's a worker (callback): item => item.active"       │
│                                                                     │
│   FILTER:  "Got it. I'll give each item to your worker.           │
│             If the worker says TRUE, I keep it.                    │
│             If FALSE, I skip it."                                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

**Next Up:** Day 5 — Control Flow (`if/else`, `switch`, loops)
