# 📚 Day 6: DOM Basics — Complete Notes (Backend-Focused)

> **Date:** January 13, 2026  
> **Topic:** Understanding DOM from a Backend Perspective

---

## 🎯 The Big Picture

As a **NestJS backend developer**, you don't write DOM code daily. But understanding it helps you:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    THE FULL-STACK DATA FLOW                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   YOUR NESTJS API              FRONTEND                   BROWSER  │
│   ┌──────────────┐             ┌──────────┐              ┌───────┐ │
│   │ @Controller  │  ─ JSON ─►  │ React/   │  ─ DOM  ─►   │ User  │ │
│   │ @Service     │  ◄─ HTTP ─  │ Angular  │  ◄─ Events ─ │ Sees  │ │
│   └──────────────┘             └──────────┘              └───────┘ │
│                                                                     │
│   You build THIS               They handle THIS                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🧠 What is DOM?

**DOM = Document Object Model**

The browser converts HTML into a **tree of JavaScript objects**:

```
HTML FILE                        DOM TREE
─────────                        ────────
<html>                           Document
  <body>                           └── html
    <h1>Hello</h1>                      └── body
    <p>World</p>                             ├── h1 → "Hello"
  </body>                                    └── p → "World"
</html>
```

JavaScript can **read and modify** this tree in real-time.

---

## 🔷 TypeScript + DOM (Type-Safe DOM)

In vanilla JS, DOM is loosely typed. **TypeScript adds safety**:

### Vanilla JS (No Type Safety)

```javascript
const button = document.getElementById('submit');
button.addEventListener('click', () => {}); // Could be null!
```

### TypeScript (Type-Safe)

```typescript
// Type assertion - tell TS what type it is
const button = document.getElementById('submit') as HTMLButtonElement;

// Or with null check
const button = document.getElementById('submit');
if (button) {
  button.addEventListener('click', () => {
    console.log('Clicked!');
  });
}
```

### TypeScript DOM Types

| Element     | TypeScript Type     |
| ----------- | ------------------- |
| `<button>`  | `HTMLButtonElement` |
| `<input>`   | `HTMLInputElement`  |
| `<div>`     | `HTMLDivElement`    |
| `<form>`    | `HTMLFormElement`   |
| `<a>`       | `HTMLAnchorElement` |
| Any element | `HTMLElement`       |

```typescript
// TypeScript knows input has .value property
const input = document.querySelector('input') as HTMLInputElement;
const text: string = input.value; // ✅ Type-safe!
```

---

## 🏗️ NestJS + DOM: The Patterns

### Pattern 1: API Returns Data → Frontend Renders DOM

**This is the most common pattern.** Your NestJS API sends JSON, frontend handles DOM.

```typescript
// NestJS Controller (your code)
@Controller('users')
export class UsersController {
  @Get()
  findAll(): User[] {
    return [
      { id: 1, name: 'Kingsley' },
      { id: 2, name: 'Ada' },
    ];
  }
}

// Frontend receives and renders (their code)
fetch('/api/users')
  .then((res) => res.json())
  .then((users) => {
    users.forEach((user) => {
      const li = document.createElement('li');
      li.textContent = user.name;
      document.getElementById('userList').appendChild(li);
    });
  });
```

---

### Pattern 2: NestJS Serves HTML (Server-Side Rendering)

NestJS can render HTML using template engines:

```typescript
// Install: npm install @nestjs/platform-express hbs

// main.ts
app.setViewEngine('hbs');

// Controller
@Controller()
export class AppController {
  @Get()
  @Render('index') // Renders views/index.hbs
  getHome() {
    return {
      title: 'My App',
      users: [{ name: 'Kingsley' }, { name: 'Ada' }],
    };
  }
}
```

```handlebars
<!-- views/index.hbs -->
<h1>{{title}}</h1>
<ul>
  {{#each users}}
    <li>{{this.name}}</li>
  {{/each}}
</ul>
```

> **Note:** This is less common now. Most apps use React/Angular/Vue frontends.

---

### Pattern 3: NestJS + Frontend Framework

The modern approach — NestJS as pure API, separate frontend:

```
┌─────────────────────────────────────────────────────────────────────┐
│  DEVELOPMENT                                                        │
│  ─────────────────────────────────────────────────────────────────  │
│  PORT 3000: NestJS API      PORT 3001: React/Angular/Vue App       │
│                                                                     │
│  PRODUCTION                                                         │
│  ─────────────────────────────────────────────────────────────────  │
│  /api/*  →  NestJS          /*  →  Static Frontend Files           │
└─────────────────────────────────────────────────────────────────────┘
```

**You focus on NestJS. Frontend devs handle DOM with React/Angular/Vue.**

---

## 🔗 How Frontend Frameworks Abstract DOM

Modern frameworks **hide raw DOM manipulation**:

### React (Declarative)

```tsx
// No manual DOM manipulation!
function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Angular (Also Declarative)

```html
<!-- Angular template -->
<ul>
  <li *ngFor="let user of users">{{ user.name }}</li>
</ul>
```

> **The DOM is still there**, but frameworks abstract it away.

---

## 🧠 DOM Concepts → NestJS Parallels

| DOM Concept                  | NestJS Parallel                |
| ---------------------------- | ------------------------------ |
| `document.querySelector()`   | `findOne()` in repository      |
| `element.addEventListener()` | `@Get()`, `@Post()` decorators |
| `element.textContent`        | Response body (JSON)           |
| `event.preventDefault()`     | Exception filters              |
| DOM Tree                     | Module hierarchy               |

---

## 📝 Core DOM Reference (Quick Lookup)

### Selecting Elements

```typescript
// By ID
const el = document.getElementById('myId') as HTMLElement;

// By CSS selector (first match)
const btn = document.querySelector('.btn') as HTMLButtonElement;

// All matches (NodeList)
const items = document.querySelectorAll('.item');
```

### Modifying Elements

```typescript
// Change text
element.textContent = 'New text';

// Change HTML
element.innerHTML = '<strong>Bold</strong>';

// Change styles
element.style.backgroundColor = 'blue';

// Add/remove classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('visible');
```

### Events

```typescript
element.addEventListener('click', (event: MouseEvent) => {
  event.preventDefault(); // Stop default behavior
  console.log(event.target); // Element that triggered event
});
```

---

## ✅ Day 6 Checklist

- [x] Understand what DOM is (tree of HTML objects)
- [x] Know how TypeScript adds type safety to DOM
- [x] Understand NestJS's role in the frontend-backend flow
- [x] Recognize the 3 patterns: API-only, SSR, Separated Frontend
- [x] Know why frontend frameworks abstract raw DOM

---

## 🔮 Your Backend Focus

```
┌─────────────────────────────────────────────────────────────────────┐
│                    YOUR LEARNING PATH                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Week 1-2: JavaScript Foundations     ✅ (You are here!)          │
│   Week 3-4: TypeScript Core            ⬜                          │
│   Week 5-6: NestJS Mastery             ⬜ ← Your main focus        │
│   Week 7-8: Auth, Testing, Deploy      ⬜                          │
│                                                                     │
│   DOM is a "nice to know" — NestJS is your CORE skill.             │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 What's Coming Next

```
Day 7:  REST DAY — Review Week 1, Eraser Tests
Day 8:  Callbacks — Foundation of async JavaScript
Day 9:  Promises — .then(), .catch(), chaining
Day 10: Async/Await — The modern way (what NestJS uses!)
```

> **Week 2 is where it gets POWERFUL.** Async JavaScript is the heart of Node.js and NestJS!

---

**Next Up:** Day 7 (Review) or jump to Day 8 (Callbacks)!
