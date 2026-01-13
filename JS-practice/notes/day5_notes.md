# 📚 Day 5: Control Flow — Complete Notes

> **Date:** January 13, 2026  
> **Topic:** Making Decisions & Repeating Code

---

## 🎯 The Big Picture

Control Flow determines **how your code runs**. Instead of running line-by-line, you can:

```
┌─────────────────────────────────────────────────────────────────────┐
│   NORMAL:     Line 1 → Line 2 → Line 3 → Line 4                    │
│                                                                     │
│   CONTROL FLOW OPTIONS:                                             │
│   • SKIP:     Line 1 → Line 2 → [skip 3] → Line 4                  │
│   • CHOOSE:   Line 1 → (if true: Line 2) OR (if false: Line 3)     │
│   • REPEAT:   Line 1 → Line 2 → Line 2 → Line 2 → Line 3           │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔀 1. If/Else — Making Decisions

The most basic decision-making structure.

### Basic Syntax

```javascript
if (condition) {
  // Runs if condition is TRUE
} else {
  // Runs if condition is FALSE
}
```

### Example

```javascript
const age = 25;

if (age >= 18) {
  console.log('You can vote! 🗳️');
} else {
  console.log('Too young to vote');
}
// Output: "You can vote! 🗳️"
```

### Key Insight 💡

The condition must evaluate to `true` or `false`. JavaScript treats these as "falsy":

- `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`

Everything else is "truthy"!

---

## 🔗 2. Else If — Multiple Conditions

When you need more than two options:

```javascript
const score = 85;

if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else if (score >= 70) {
  console.log('Grade: C');
} else if (score >= 60) {
  console.log('Grade: D');
} else {
  console.log('Grade: F');
}
// Output: "Grade: B"
```

### How It Works

```
┌─────────────────────────────────────────────────────────────────────┐
│  score = 85                                                         │
│                                                                     │
│  Is score >= 90?  →  NO (85 < 90)  →  Move to next                 │
│  Is score >= 80?  →  YES (85 >= 80) →  STOP HERE! Print "B"        │
│  (Other conditions never checked)                                   │
└─────────────────────────────────────────────────────────────────────┘
```

> **Rule:** JavaScript checks **top to bottom** and stops at the first `true`.

---

## ⚡ 3. Ternary Operator — One-Line If/Else

**Syntax:** `condition ? valueIfTrue : valueIfFalse`

```javascript
const age = 25;

// Long way
let status;
if (age >= 18) {
  status = 'Adult';
} else {
  status = 'Minor';
}

// Short way (Ternary) ✨
const status = age >= 18 ? 'Adult' : 'Minor';
```

### When to Use Ternary

| Use Ternary             | Use If/Else         |
| ----------------------- | ------------------- |
| Simple value assignment | Complex logic       |
| One-liner conditions    | Multiple statements |
| Readable at a glance    | Nested conditions   |

```javascript
// ✅ Good ternary
const message = isLoggedIn ? 'Welcome back!' : 'Please log in';

// ❌ Bad ternary (too complex)
const result = a > b ? (c > d ? 'A' : 'B') : e > f ? 'C' : 'D';
// Use if/else instead!
```

---

## 🎚️ 4. Switch — Many Options, One Variable

Best for checking **one variable** against **many specific values**.

```javascript
const role = 'admin';

switch (role) {
  case 'admin':
    console.log('Full access');
    break;
  case 'moderator':
    console.log('Edit access');
    break;
  case 'user':
    console.log('Read access');
    break;
  default:
    console.log('No access');
}
```

### Switch vs If/Else

```javascript
// These do the same thing:

// Switch
switch (color) {
  case 'red':
    return '#FF0000';
  case 'green':
    return '#00FF00';
  case 'blue':
    return '#0000FF';
  default:
    return '#000000';
}

// If/Else
if (color === 'red') return '#FF0000';
else if (color === 'green') return '#00FF00';
else if (color === 'blue') return '#0000FF';
else return '#000000';
```

### ⚠️ Don't Forget `break`!

Without `break`, code "falls through" to the next case:

```javascript
switch (day) {
  case 'Saturday':
  case 'Sunday':
    console.log('Weekend!'); // Both cases run this
    break;
  default:
    console.log('Weekday');
}
```

> **Pro Tip:** Using `return` inside a function also exits the switch (no `break` needed).

---

## 🔁 5. Loops — Repeating Code

### For Loop (Classic)

Use when you **know how many times** to repeat.

```javascript
for (let i = 0; i < 5; i++) {
  console.log('Count:', i);
}
// Output: 0, 1, 2, 3, 4
```

**Anatomy:**

```javascript
for (initialization; condition; increment) {}

for (let i = 0; i < 5; i++) {}
//   ↑ Start          ↑ Continue  ↑ After each loop
//   at 0             while < 5   add 1
```

---

### For...of Loop (Modern — Best for Arrays!)

```javascript
const skills = ['JavaScript', 'TypeScript', 'NestJS'];

for (const skill of skills) {
  console.log('Learning:', skill);
}
// Output:
// Learning: JavaScript
// Learning: TypeScript
// Learning: NestJS
```

> **Always prefer `for...of` for arrays.** It's cleaner and less error-prone!

---

### While Loop

Use when you **don't know how many times** to repeat.

```javascript
let attempts = 0;

while (attempts < 3) {
  console.log('Attempt:', attempts);
  attempts++;
}
// Output: Attempt: 0, 1, 2
```

> **⚠️ Warning:** If condition never becomes `false`, you get an **infinite loop**!

---

## 🛑 6. Break & Continue

### `break` — Exit Immediately

```javascript
const users = ['King', 'Ada', 'Chidi'];

for (const user of users) {
  if (user === 'Ada') {
    console.log('Found Ada!');
    break; // STOP the loop
  }
  console.log('Checking:', user);
}
// Output:
// Checking: King
// Found Ada!
```

### `continue` — Skip to Next Iteration

```javascript
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  if (num === 3) {
    continue; // SKIP 3, don't print it
  }
  console.log(num);
}
// Output: 1, 2, 4, 5
```

### Mental Model

```
┌─────────────────────────────────────────────────────────────────────┐
│   BREAK     =  "I'm done here. Exit the entire loop."              │
│   CONTINUE  =  "Skip this one. Move to the next item."             │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔧 Under the Hood

All loops are just automated repetition:

```javascript
// What for...of does internally:
const array = ['a', 'b', 'c'];
let index = 0;
while (index < array.length) {
  const item = array[index];
  console.log(item);
  index++;
}
```

---

## 🧠 Quick Reference Table

| Concept    | Syntax                       | Use When                   |
| ---------- | ---------------------------- | -------------------------- |
| `if/else`  | `if (x) { } else { }`        | 2 options                  |
| `else if`  | `if (a) { } else if (b) { }` | Multiple conditions        |
| `ternary`  | `x ? a : b`                  | Simple one-line assignment |
| `switch`   | `switch(x) { case: }`        | Many specific values       |
| `for`      | `for (let i=0; i<n; i++)`    | Known iteration count      |
| `for...of` | `for (const x of arr)`       | Looping arrays ⭐          |
| `while`    | `while (condition)`          | Unknown iteration count    |
| `break`    | `break;`                     | Exit loop early            |
| `continue` | `continue;`                  | Skip current iteration     |

---

## 🔗 NestJS Connection

Control flow is everywhere in NestJS:

```typescript
// In a Service
@Injectable()
export class UsersService {
  // If/Else in business logic
  async findOne(id: number): Promise<User> {
    const user = await this.userRepo.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  // Switch for handling different roles
  getPermissions(role: string): string[] {
    switch (role) {
      case 'admin':
        return ['read', 'write', 'delete'];
      case 'user':
        return ['read'];
      default:
        return [];
    }
  }
}
```

---

## ✅ Day 5 Checklist

- [x] Use if/else for basic decisions
- [x] Use else if for multiple conditions
- [x] Use ternary for one-line assignments
- [x] Use switch for multiple specific values
- [x] Use for loop for known iterations
- [x] Use for...of for arrays
- [x] Use while for unknown iterations
- [x] Use break to exit loops early
- [x] Use continue to skip iterations

---

## 🔮 What's Coming Next

```
┌─────────────────────────────────────────────────────────────────────┐
│                        WEEK 1 PROGRESS                              │
├─────────────────────────────────────────────────────────────────────┤
│  Day 1: Variables & Types        ✅ COMPLETE                       │
│  Day 2: Functions                ✅ COMPLETE                       │
│  Day 3: Objects & Arrays         ✅ COMPLETE                       │
│  Day 4: Array Methods            ✅ COMPLETE                       │
│  Day 5: Control Flow             ✅ COMPLETE  ← YOU ARE HERE       │
│  Day 6: DOM Basics (Skim)        ⬜ Optional for backend focus     │
│  Day 7: REST DAY / REVIEW        ⬜ Consolidate Week 1             │
├─────────────────────────────────────────────────────────────────────┤
│                        WEEK 2 PREVIEW                               │
├─────────────────────────────────────────────────────────────────────┤
│  Day 8:  Callbacks               → The foundation of async JS      │
│  Day 9:  Promises                → .then(), .catch(), chaining     │
│  Day 10: Async/Await             → Modern async (what you'll use!) │
│  Day 11: Error Handling          → try/catch, custom errors        │
│  Day 12: ES6 Modules             → import/export                   │
│  Day 13: Classes                 → OOP foundations for NestJS      │
│  Day 14: Mini CLI Project        → Build something real!           │
└─────────────────────────────────────────────────────────────────────┘
```

### 🎯 Why Week 2 Matters

Week 2 is where JavaScript gets **powerful**:

- **Callbacks/Promises/Async** → How JavaScript handles waiting (API calls, database queries)
- **Classes** → The foundation of NestJS (Controllers, Services are all classes!)
- **Modules** → How NestJS organizes code (`import`/`export`)

> **You're 36% through Phase 1!** Week 1 gave you the building blocks. Week 2 will give you the **power tools**.

---

**Next Up:** Day 6 (DOM Skim) or skip to Day 8 (Callbacks) — Your choice!
