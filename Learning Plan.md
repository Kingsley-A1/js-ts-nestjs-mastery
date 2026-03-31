TYPESCRIPT & NESTJS MASTERY PLAN

---

## 👤 Student Profile

| Field          | Value                                      |
| -------------- | ------------------------------------------ |
| **Name**       | Kingsley                                   |
| **Start Date** | January 4, 2026                            |
| **End Date**   | March 1, 2026 (8 Weeks)                    |
| **Stack**      | TypeScript → NestJS → TypeORM → PostgreSQL |
| **Motto**      | _"Tactical Learning Only. No Fluff."_      |

---

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         🎯 S.M.A.R.T. GOAL FRAMEWORK                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐  │
│  │ SPECIFIC  │  │MEASURABLE │  │ACHIEVABLE │  │ RELEVANT  │  │TIME-BOUND │  │
│  └─────┬─────┘  └─────┬─────┘  └─────┬─────┘  └─────┬─────┘  └─────┬─────┘  │
│        │              │              │              │              │        │
│        ▼              ▼              ▼              ▼              ▼        │
│   Master TS &    Build 3 full   2 hrs/day +    Backend Dev    8 Weeks      │
│   NestJS to      projects with  Weekend deep   career goal    Jan 4 -      │
│   build APIs     passing tests  dives (4 hrs)  alignment      Mar 1        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📍 Learning Roadmap Overview

```
Week 1-2          Week 3-4          Week 5-6          Week 7-8
   │                 │                 │                 │
   ▼                 ▼                 ▼                 ▼
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│   JS &   │───▶│TYPESCRIPT│───▶│  NESTJS  │───▶│ ADVANCED │
│FOUNDATION│    │  CORE    │    │  MASTERY │    │ ENGINEER │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
     │               │               │               │
     ▼               ▼               ▼               ▼
 Variables       Interfaces      Modules         Auth/JWT
 Functions       Generics        Services        Testing
 Arrays/Obj      Classes         Controllers     Deployment
 Async/Await     Decorators      TypeORM         Production
```

---

# 📚 PHASE 1: JavaScript Foundations (Week 1-2)

> **Goal:** Build a solid JS mental model before touching TypeScript.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          WEEK 1: CORE JAVASCRIPT                            │
├─────────────────────────────────────────────────────────────────────────────┤
│  Day │ Topic                │ Concept                    │ Deliverable      │
├──────┼──────────────────────┼────────────────────────────┼──────────────────┤
│  1   │ Variables & Types    │ let, const, primitives     │ 10 exercises   Done│
│  2   │ Functions            │ Arrow, callbacks, scope    │ 10 exercises   Done│
│  3   │ Objects & Arrays     │ Destructuring, spread      │ 10 exercises   Done│
│  4   │ Array Methods        │ map, filter, reduce, find  │ Build a filter Done│
│  5   │ Control Flow         │ if/else, switch, loops     │ 10 exercises   Done  │
│  6   │ DOM Basics (Skim)    │ querySelector, events      │ Mini calculator Done  │
│  7   │ REST DAY / REVIEW    │ Consolidate learning       │ Flashcard review Done │
└──────┴──────────────────────┴────────────────────────────┴──────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        WEEK 2: ASYNC JAVASCRIPT                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  Day │ Topic                │ Concept                    │ Deliverable      │
├──────┼──────────────────────┼────────────────────────────┼──────────────────┤
│  8   │ Callbacks            │ Callback hell, why Promises│ Convert callback │
│  9   │ Promises             │ .then(), .catch(), chaining│ Fetch API usage  │
│ 10   │ Async/Await          │ try/catch, sequential flow │ Refactor Day 9   │
│ 11   │ Error Handling       │ throw, custom errors       │ Error wrapper fn │
│ 12   │ Modules (ES6)        │ import/export, default     │ Split code files │
│ 13   │ Classes (ES6)        │ constructor, this, methods │ Create a class   │
│ 14   │ REST DAY / PROJECT   │ Build a Mini CLI Tool      │ Node.js CLI app  │
└──────┴──────────────────────┴────────────────────────────┴──────────────────┘
```

### ✅ Phase 1 Exit Criteria

- [ ] Can write a function using arrow syntax confidently
- [ ] Understands `map`, `filter`, `reduce` without looking them up
- [ ] Can fetch data from an API and handle errors with async/await
- [ ] Can create and use ES6 classes
- [ ] **PROJECT:** Built a CLI tool that fetches data from an API

---

# 📘 PHASE 2: TypeScript Core (Week 3-4)

> **Goal:** Think in types. Understand why TS exists and master its syntax.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         WEEK 3: TYPESCRIPT BASICS                           │
├─────────────────────────────────────────────────────────────────────────────┤
│  Day │ Topic                │ Concept                    │ Deliverable      │
├──────┼──────────────────────┼────────────────────────────┼──────────────────┤
│ 15   │ Why TypeScript?      │ Type safety, DX, compile   │ Setup TS project │
│ 16   │ Basic Types          │ string, number, boolean    │ Type 10 variables│
│ 17   │ Arrays & Tuples      │ string[], [string, number] │ Type 10 arrays   │
│ 18   │ Objects & Type Alias │ type User = { name: string}│ Create 5 types   │
│ 19   │ Interfaces           │ interface vs type, extend  │ Build User iface │
│ 20   │ Union & Literal      │ string | number, "admin"   │ Status type      │
│ 21   │ REST DAY / REVIEW    │ Flashcards + Exercises     │ Type a JSON file │
└──────┴──────────────────────┴────────────────────────────┴──────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       WEEK 4: TYPESCRIPT ADVANCED                           │
├─────────────────────────────────────────────────────────────────────────────┤
│  Day │ Topic                │ Concept                    │ Deliverable      │
├──────┼──────────────────────┼────────────────────────────┼──────────────────┤
│ 22   │ Functions & Types    │ Param types, return types  │ Type 10 functions│
│ 23   │ Generics Intro       │ <T>, why generics exist    │ Generic function │
│ 24   │ Generics Advanced    │ Constraints, keyof, infer  │ Generic utility  │
│ 25   │ Classes in TS        │ public, private, readonly  │ Typed User class │
│ 26   │ Decorators (Preview) │ @decorator syntax, meta    │ Simple decorator │
│ 27   │ Utility Types        │ Partial, Pick, Omit, Record│ Use all 4        │
│ 28   │ REST DAY / PROJECT   │ Build a Typed Express API  │ Mini REST API    │
└──────┴──────────────────────┴────────────────────────────┴──────────────────┘
```

### ✅ Phase 2 Exit Criteria

- [ ] Can define interfaces and types without hesitation
- [ ] Understands when to use `interface` vs `type`
- [ ] Can write and use generic functions
- [ ] Knows what `Partial<T>`, `Pick<T, K>`, and `Omit<T, K>` do
- [ ] **PROJECT:** Built a typed Express API with proper interfaces

---

# 🏗️ PHASE 3: NestJS Mastery (Week 5-6)

> **Goal:** Master the NestJS framework. Build production-grade APIs.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         WEEK 5: NESTJS FOUNDATIONS                          │
├─────────────────────────────────────────────────────────────────────────────┤
│  Day │ Topic                │ Concept                    │ Deliverable      │
├──────┼──────────────────────┼────────────────────────────┼──────────────────┤
│ 29   │ Nest CLI & Structure │ Modules, Controllers, Svcs │ Scaffold project │
│ 30   │ Controllers Deep     │ @Get, @Post, @Param, @Body │ CRUD endpoints   │
│ 31   │ Services & DI        │ @Injectable, providers     │ Business logic   │
│ 32   │ DTOs & Validation    │ class-validator, pipes     │ Validate inputs  │
│ 33   │ Docker & Postgres    │ docker-compose, TypeORM    │ DB connection    │
│ 34   │ Entities & Repos     │ @Entity, Repository pattern│ User entity      │
│ 35   │ REST DAY / REVIEW    │ Consolidate + Debug        │ Working CRUD API │
└──────┴──────────────────────┴────────────────────────────┴──────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       WEEK 6: NESTJS RELATIONSHIPS                          │
├─────────────────────────────────────────────────────────────────────────────┤
│  Day │ Topic                │ Concept                    │ Deliverable      │
├──────┼──────────────────────┼────────────────────────────┼──────────────────┤
│ 36   │ One-to-Many          │ @OneToMany, @ManyToOne     │ User → Products  │
│ 37   │ Many-to-Many         │ @ManyToMany, JoinTable     │ Tags on Products │
│ 38   │ Query Builder        │ Complex queries, joins     │ Filter products  │
│ 39   │ Migrations           │ TypeORM migrations, sync   │ Create migration │
│ 40   │ Error Handling       │ Filters, HttpException     │ Global filter    │
│ 41   │ Logging              │ Nest Logger, custom logger │ Request logging  │
│ 42   │ REST DAY / PROJECT   │ Full Products API          │ Complete CRUD    │
└──────┴──────────────────────┴────────────────────────────┴──────────────────┘
```

### ✅ Phase 3 Exit Criteria

- [ ] Can scaffold a NestJS project from scratch
- [ ] Understands Modules, Controllers, Services, and DI
- [ ] Can connect to Postgres and define entities
- [ ] Understands One-to-Many and Many-to-Many relationships
- [ ] **PROJECT:** Built a Products API with Users and Tags

---

# 🛡️ PHASE 4: Advanced Engineering (Week 7-8)

> **Goal:** Security, Testing, and Deployment. Become job-ready.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        WEEK 7: SECURITY & AUTH                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  Day │ Topic                │ Concept                    │ Deliverable      │
├──────┼──────────────────────┼────────────────────────────┼──────────────────┤
│ 43   │ Password Hashing     │ bcrypt, salting            │ Hash on signup   │
│ 44   │ JWT Fundamentals     │ Token structure, signing   │ Login returns JWT│
│ 45   │ Passport.js          │ Strategies, Guards         │ JwtAuthGuard     │
│ 46   │ Protected Routes     │ @UseGuards, decorators     │ Protect endpoints│
│ 47   │ Custom Decorators    │ @GetUser(), metadata       │ Current user dec │
│ 48   │ Role-Based Access    │ RBAC, AdminGuard           │ Admin-only route │
│ 49   │ REST DAY / REVIEW    │ Security audit             │ Pen-test your API│
└──────┴──────────────────────┴────────────────────────────┴──────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     WEEK 8: TESTING & DEPLOYMENT                            │
├─────────────────────────────────────────────────────────────────────────────┤
│  Day │ Topic                │ Concept                    │ Deliverable      │
├──────┼──────────────────────┼────────────────────────────┼──────────────────┤
│ 50   │ Unit Testing         │ Jest, mocking services     │ Test UsersService│
│ 51   │ E2E Testing          │ Supertest, test database   │ Test /users route│
│ 52   │ Swagger Docs         │ OpenAPI, decorators        │ Full API docs    │
│ 53   │ Docker Production    │ Multi-stage builds         │ Production image │
│ 54   │ CI/CD Pipeline       │ GitHub Actions, auto-test  │ Workflow file    │
│ 55   │ Cloud Deployment     │ Railway/Render, Cloud DB   │ Live API         │
│ 56   │ 🎉 CELEBRATION       │ Project complete!          │ Portfolio ready  │
└──────┴──────────────────────┴────────────────────────────┴──────────────────┘
```

### ✅ Phase 4 Exit Criteria

- [ ] Can implement JWT authentication from scratch
- [ ] Understands Guards, Decorators, and RBAC
- [ ] Can write unit and E2E tests
- [ ] Has a deployed, production-ready API
- [ ] **PROJECT:** Complete NestJS Mastery API deployed to the cloud

---

# 🛠️ The Tactical Rules of Engagement

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           LEARNING PROTOCOL                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────────────────────────────────────────────────────────────────┐  │
│   │  1. NO COPY-PASTING                                                  │  │
│   │     → Type every line of code manually                               │  │
│   │     → Muscle memory > clipboard memory                               │  │
│   └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│   ┌──────────────────────────────────────────────────────────────────────┐  │
│   │  2. THE "WHY" RULE                                                   │  │
│   │     → If you use a decorator/function you don't understand, STOP    │  │
│   │     → Ask: "What does this do and why do I need it?"                 │  │
│   └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│   ┌──────────────────────────────────────────────────────────────────────┐  │
│   │  3. DAILY COMMITS                                                    │  │
│   │     → Push code to GitHub every single day                           │  │
│   │     → Green squares = accountability                                 │  │
│   └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│   ┌──────────────────────────────────────────────────────────────────────┐  │
│   │  4. ONE TAB POLICY                                                   │  │
│   │     → VS Code + Terminal + 1 Browser Tab (Docs only)                 │  │
│   │     → No YouTube rabbit holes. No Twitter. Focus mode ON.            │  │
│   └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│   ┌──────────────────────────────────────────────────────────────────────┐  │
│   │  5. POMODORO TECHNIQUE                                               │  │
│   │     → 25 min focus → 5 min break → repeat                            │  │
│   │     → 4 pomodoros = 1 deep work session                              │  │
│   └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 📊 Progress Tracker

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              PHASE PROGRESS                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PHASE 1: JS Foundations     [░░░░░░░░░░░░░░░░░░░░]   0%   ⬜ Not Started   │
│  PHASE 2: TypeScript Core    [░░░░░░░░░░░░░░░░░░░░]   0%   ⬜ Not Started   │
│  PHASE 3: NestJS Mastery     [░░░░░░░░░░░░░░░░░░░░]   0%   ⬜ Not Started   │
│  PHASE 4: Advanced Engineer  [░░░░░░░░░░░░░░░░░░░░]   0%   ⬜ Not Started   │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  OVERALL PROGRESS            [░░░░░░░░░░░░░░░░░░░░]   0%                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

Legend:
  ░░░░░░░░░░  Not Started
  ▓▓▓▓▓░░░░░  In Progress (50%)
  ██████████  Completed (100%)
```

---

# 📚 Recommended Resources

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            LEARNING RESOURCES                               │
├───────────────────┬─────────────────────────────────────────────────────────┤
│ JAVASCRIPT        │ • javascript.info (The Modern JS Tutorial)             │
│                   │ • Eloquent JavaScript (Free Book)                      │
│                   │ • FreeCodeCamp JS Algorithms                           │
├───────────────────┼─────────────────────────────────────────────────────────┤
│ TYPESCRIPT        │ • typescriptlang.org/docs (Official Docs)              │
│                   │ • Total TypeScript (Matt Pocock)                       │
│                   │ • TypeScript Deep Dive (Free Book)                     │
├───────────────────┼─────────────────────────────────────────────────────────┤
│ NESTJS            │ • docs.nestjs.com (Official Docs)                      │
│                   │ • NestJS Fundamentals (Udemy - Kamil Mysliwiec)        │
│                   │ • NestJS Zero to Hero (Ariel Weinberger)               │
├───────────────────┼─────────────────────────────────────────────────────────┤
│ PRACTICE          │ • Exercism (TS Track)                                  │
│                   │ • LeetCode (Easy problems in TS)                       │
│                   │ • Build projects, not tutorials                        │
└───────────────────┴─────────────────────────────────────────────────────────┘
```

---

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║                         🏆 END GOAL VISUALIZATION 🏆                         ║
║                                                                              ║
║     ┌─────────────────────────────────────────────────────────────────┐      ║
║     │                                                                 │      ║
║     │   "In 8 weeks, I will have built and deployed a production-    │      ║
║     │    grade NestJS API with authentication, database relations,   │      ║
║     │    automated tests, and CI/CD. I will be a TypeScript Backend  │      ║
║     │    Engineer ready for real-world opportunities."               │      ║
║     │                                                                 │      ║
║     │                                        — Kingsley, January 2026   │      ║
║     │                                                                 │      ║
║     └─────────────────────────────────────────────────────────────────┘      ║
║                                                                              ║
║                           LET'S BUILD. 🚀                                    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
