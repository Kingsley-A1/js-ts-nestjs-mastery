# 📚 Day 3: Objects & Arrays — Complete Notes

> **Date:** January 8, 2026  
> **Topic:** Structuring Real Data

---

## 📦 1. Objects (Key-Value Pairs)

An object is a collection of **named properties**:

```javascript
const user = {
  name: 'Kingsley', // key: value
  age: 25,
  isActive: true,
};
```

### Accessing Values

```javascript
// Dot notation (preferred)
user.name; // → "Kingsley"

// Bracket notation (for dynamic keys)
user['age']; // → 25

const key = 'name';
user[key]; // → "Kingsley"
```

---

## 📋 2. Arrays (Ordered Lists)

An array is a **numbered list** (index starts at 0):

```javascript
const skills = ['JavaScript', 'TypeScript', 'NestJS'];
//                    0            1            2

skills[0]; // → "JavaScript"
skills.length; // → 3
```

---

## 🪆 3. Nested Structures (Arrays in Objects)

Real-world data combines both:

```javascript
const profile = {
  name: 'Kingsley',
  age: 25,
  skills: ['JavaScript', 'TypeScript', 'NestJS'], // Array inside object
};

profile.skills[0]; // → "JavaScript"
```

---

## 🎁 4. Object Destructuring

**Extract properties into variables** in one line:

```javascript
// Old way (verbose)
const name = profile.name;
const age = profile.age;

// New way (destructuring) ✨
const { name, age } = profile;
```

### With Renaming

```javascript
const { name: userName } = profile;
console.log(userName); // → "Kingsley"
```

### With Default Values

```javascript
const { city = 'Unknown' } = profile;
console.log(city); // → "Unknown" (if not in object)
```

---

## 🎯 5. Array Destructuring

**Extract elements by position**:

```javascript
const colors = ['red', 'green', 'blue'];

const [first, second] = colors;
console.log(first); // → "red"
console.log(second); // → "green"
```

### Skipping Elements

```javascript
const [first, , third] = colors; // Skip second
console.log(third); // → "blue"
```

### Rest Pattern

```javascript
const [first, ...rest] = colors;
console.log(rest); // → ["green", "blue"]
```

---

## 🌊 6. Spread Operator (`...`)

**Expands** arrays or objects:

### Array Spread

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
// → [1, 2, 3, 4, 5, 6]
```

### Object Spread

```javascript
const user = { name: 'King', age: 25 };
const updated = { ...user, age: 26, city: 'Lagos' };
// → { name: "King", age: 26, city: "Lagos" }
```

> **Note:** Later properties override earlier ones!

---

## 🔒 7. Immutability Concept

**Never modify the original data.** Always create a copy.

```javascript
// ❌ Bad (mutates original)
profile.age = 30;

// ✅ Good (creates new object)
const updatedProfile = { ...profile, age: 30 };
```

### Why Immutability Matters

- Prevents unexpected bugs
- Makes code predictable
- Required in React/Redux
- Best practice in NestJS

---

## 🧠 Quick Reference Table

| Concept            | Syntax                 | Use Case                  |
| ------------------ | ---------------------- | ------------------------- |
| Object             | `{ key: value }`       | Store named properties    |
| Array              | `[item1, item2]`       | Store ordered lists       |
| Object Destructure | `const { a, b } = obj` | Extract object properties |
| Array Destructure  | `const [x, y] = arr`   | Extract array elements    |
| Spread Array       | `[...arr1, ...arr2]`   | Combine/copy arrays       |
| Spread Object      | `{ ...obj, new: val }` | Copy/update objects       |

---

## 🔗 NestJS Connection

In NestJS, you'll see these patterns everywhere:

```typescript
// DTOs use object structure
class CreateUserDto {
    name: string;
    email: string;
}

// Spread for updating entities
const updated = { ...existingUser, ...updateDto };

// Destructuring in controllers
async create(@Body() { name, email }: CreateUserDto) { }
```

---

## ✅ Day 3 Checklist

- [x] Create objects with properties
- [x] Create arrays with elements
- [x] Nest arrays inside objects
- [x] Destructure objects
- [x] Destructure arrays
- [x] Use spread operator for arrays
- [x] Use spread operator for objects
- [x] Understand immutability

---

**Next Up:** Day 4 — Array Methods (`map`, `filter`, `reduce`, `find`)
