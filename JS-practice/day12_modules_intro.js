// ═══════════════════════════════════════════════════════════════════════════
// DAY 12: ES6 MODULES - Organizing Code Like a Professional
// ═══════════════════════════════════════════════════════════════════════════

// 🎯 MISSION: Learn to split code into multiple files using import/export
//
// Why this matters for NestJS:
// - EVERY NestJS file is a module
// - Controllers import Services, Services import Entities
// - Understanding modules = understanding NestJS architecture

// ═══════════════════════════════════════════════════════════════════════════
// PART 1: The Problem - One Giant File (What You've Been Doing)
// ═══════════════════════════════════════════════════════════════════════════

// Imagine all your code in ONE file:

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

class DuplicateError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DuplicateError';
    this.statusCode = 409;
  }
}

function createUser(email, users) {
  if (!email) throw new ValidationError('Email required');
  if (!email.includes('@')) throw new ValidationError('Invalid email');
  const exists = users.find((u) => u.email === email);
  if (exists) throw new DuplicateError('Email already exists');
  return { id: Date.now() + 1, email };
}

function getUser(id, users) {
  const user = users.find((u) => u.id === id);
  if (!user) throw new NotFoundError(`User ${id} not found`);
  return user;
}

function deleteUser(id, users) {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) throw new NotFoundError(`User ${id} not found`);
  users.splice(index, 1);
  return { message: 'User deleted' };
}

async function errorWrapper(fn, ...args) {
  try {
    const result = await fn(...args);
    return { success: true, data: result };
  } catch (error) {
    if (error.statusCode) {
      return {
        success: false,
        statusCode: error.statusCode,
        message: error.message,
      };
    }
    return { success: false, statusCode: 500, message: 'Server error' };
  }
}

const users = [];

// ... 500 more lines of code

// ❌ Problems:
// 1. Hard to find functions (scroll through 500+ lines)
// 2. Can't reuse code in other projects
// 3. Merge conflicts in teams (everyone edits same file)
// 4. No clear separation of concerns

console.log('📦 Part 1: All code in one file (messy!)');
console.log('---\n');

// ═══════════════════════════════════════════════════════════════════════════
// PART 2: The Solution - Modules (Split Into Logical Files)
// ═══════════════════════════════════════════════════════════════════════════

// In real projects, you organize like this:
//
// project/
//   ├── errors.js         ← All error classes
//   ├── user-service.js   ← User business logic
//   ├── validation.js     ← Validation helpers
//   ├── error-wrapper.js  ← Error handling utility
//   └── main.js           ← Entry point

// We'll simulate this using comments today, then you'll implement it tomorrow!

console.log('📦 Part 2: What modules enable:');
console.log('✅ Reusable: Import errors.js in ANY project');
console.log('✅ Maintainable: Find user logic in user-service.js');
console.log('✅ Testable: Test each module independently');
console.log('✅ Collaborative: Team works on different files');
console.log('---\n');

// ═══════════════════════════════════════════════════════════════════════════
// PART 3: Export - Making Code Available to Other Files
// ═══════════════════════════════════════════════════════════════════════════

// Two ways to export:

// 1️⃣ NAMED EXPORT (Can have multiple per file)
//    Use when: File has multiple things to export

// In errors.js:
// export class ValidationError extends Error { ... }
// export class NotFoundError extends Error { ... }
// export class DuplicateError extends Error { ... }

// 2️⃣ DEFAULT EXPORT (Only ONE per file)
//    Use when: File has one main thing to export

// In user-service.js:
// export default class UserService { ... }

console.log('📦 Part 3: Export Syntax');
console.log('');
console.log('Named Export (multiple):');
console.log('  export class ValidationError { }');
console.log('  export function createUser() { }');
console.log('');
console.log('Default Export (one):');
console.log('  export default class UserService { }');
console.log('---\n');

// ═══════════════════════════════════════════════════════════════════════════
// PART 4: Import - Using Code From Other Files
// ═══════════════════════════════════════════════════════════════════════════

// Importing NAMED exports (use curly braces):
// import { ValidationError, NotFoundError } from './errors.js';

// Importing DEFAULT export (no curly braces):
// import UserService from './user-service.js';

// Importing BOTH:
// import UserService, { helper1, helper2 } from './user-service.js';
//        ^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^
//        default        named exports

// Renaming imports (alias):
// import { ValidationError as VError } from './errors.js';

console.log('📦 Part 4: Import Syntax');
console.log('');
console.log('Named imports:');
console.log('  import { ValidationError } from "./errors.js"');
console.log('');
console.log('Default import:');
console.log('  import UserService from "./user-service.js"');
console.log('');
console.log('Renaming:');
console.log('  import { ValidationError as VError } from "./errors.js"');
console.log('---\n');

// ═══════════════════════════════════════════════════════════════════════════
// PART 5: The Restaurant Analogy 🍽️
// ═══════════════════════════════════════════════════════════════════════════

console.log('📦 Part 5: Restaurant Analogy');
console.log('');
console.log('┌─────────────────────────────────────────────────────────┐');
console.log('│  Restaurant Kitchen (Your App)                          │');
console.log('├─────────────────────────────────────────────────────────┤');
console.log('│                                                         │');
console.log('│  Ingredients Room  ← errors.js (Export errors)         │');
console.log('│  └─ Salt, Pepper, Spices                               │');
console.log('│                                                         │');
console.log('│  Chef Station      ← user-service.js (Export functions)│');
console.log('│  └─ Use ingredients from Ingredients Room              │');
console.log('│                                                         │');
console.log('│  Main Kitchen      ← main.js (Import everything)       │');
console.log('│  └─ Assembles the final dish                           │');
console.log('│                                                         │');
console.log('└─────────────────────────────────────────────────────────┘');
console.log('');
console.log('Export = "Here, take this ingredient"');
console.log('Import = "Let me use that ingredient"');
console.log('---\n');

// ═══════════════════════════════════════════════════════════════════════════
// PART 6: CommonJS vs ES6 Modules (Node.js)
// ═══════════════════════════════════════════════════════════════════════════

console.log('📦 Part 6: Two Module Systems');
console.log('');
console.log('1️⃣ CommonJS (Old Node.js way):');
console.log('   Export: module.exports = { ValidationError }');
console.log('   Import: const { ValidationError } = require("./errors")');
console.log('');
console.log('2️⃣ ES6 Modules (Modern way - NestJS uses this):');
console.log('   Export: export class ValidationError { }');
console.log('   Import: import { ValidationError } from "./errors.js"');
console.log('');
console.log('✅ NestJS uses ES6 modules exclusively!');
console.log('✅ We focus on ES6 syntax from now on.');
console.log('---\n');

// ═══════════════════════════════════════════════════════════════════════════
// PART 7: Real Example - File Structure
// ═══════════════════════════════════════════════════════════════════════════

console.log('📦 Part 7: Real Project Structure');
console.log('');
console.log('user-management/');
console.log('  ├── src/');
console.log('  │   ├── errors/');
console.log('  │   │   └── custom-errors.js    ← Error classes');
console.log('  │   ├── services/');
console.log('  │   │   └── user.service.js     ← Business logic');
console.log('  │   ├── utils/');
console.log('  │   │   └── error-wrapper.js    ← Helpers');
console.log('  │   └── main.js                 ← Entry point');
console.log('  └── package.json');
console.log('');
console.log('This is EXACTLY how NestJS organizes code!');
console.log('---\n');

// ═══════════════════════════════════════════════════════════════════════════
// PART 8: Code Example - How Files Connect
// ═══════════════════════════════════════════════════════════════════════════

console.log('📦 Part 8: How Files Import Each Other');
console.log('');
console.log('// ─── errors.js ───');
console.log('export class NotFoundError extends Error { }');
console.log('');
console.log('// ─── user.service.js ───');
console.log('import { NotFoundError } from "./errors.js";');
console.log('');
console.log('export function getUser(id) {');
console.log('  if (!user) throw new NotFoundError("User not found");');
console.log('}');
console.log('');
console.log('// ─── main.js ───');
console.log('import { getUser } from "./user.service.js";');
console.log('');
console.log('const user = getUser(1);');
console.log('console.log(user);');
console.log('---\n');

// ═══════════════════════════════════════════════════════════════════════════
// PART 9: NestJS Connection
// ═══════════════════════════════════════════════════════════════════════════

console.log('📦 Part 9: This IS How NestJS Works!');
console.log('');
console.log('// ─── user.entity.ts ───');
console.log('export class User { }');
console.log('');
console.log('// ─── user.service.ts ───');
console.log('import { User } from "./user.entity";  ← Import entity');
console.log('');
console.log('@Injectable()');
console.log('export class UsersService {  ← Export service');
console.log('  findOne(id: number): User { ... }');
console.log('}');
console.log('');
console.log('// ─── user.controller.ts ───');
console.log('import { UsersService } from "./user.service";  ← Import service');
console.log('');
console.log('@Controller("users")');
console.log('export class UsersController {  ← Export controller');
console.log('  constructor(private usersService: UsersService) {}');
console.log('}');
console.log('');
console.log('✅ Every file imports what it needs');
console.log('✅ Every file exports what others need');
console.log('✅ NestJS modules = organized ES6 modules!');
console.log('---\n');

// ═══════════════════════════════════════════════════════════════════════════
// PART 10: Best Practices
// ═══════════════════════════════════════════════════════════════════════════

console.log('📦 Part 10: Module Best Practices');
console.log('');
console.log('✅ DO:');
console.log('  • One class per file (user.service.js has ONE service)');
console.log('  • Group related files in folders (errors/, services/)');
console.log('  • Use descriptive file names (user.service.js not service.js)');
console.log('  • Keep imports at the top of the file');
console.log('  • Export only what others need (keep internals private)');
console.log('');
console.log("❌ DON'T:");
console.log('  • Export everything (principle of least privilege)');
console.log('  • Create circular imports (A imports B, B imports A)');
console.log('  • Use default export for classes (named is clearer)');
console.log('  • Mix CommonJS and ES6 in same project');
console.log('---\n');

// ═══════════════════════════════════════════════════════════════════════════
// 🏋️ MICRO-CHALLENGE: Plan Your Module Structure
// ═══════════════════════════════════════════════════════════════════════════

console.log('🏋️ MICRO-CHALLENGE: Design Your Module Architecture');
console.log('');
console.log('Tomorrow you will split day11_error_handling.js into modules!');
console.log('');
console.log('YOUR TASK:');
console.log('1. Create a folder: day12_modules/');
console.log('2. Plan these files:');
console.log('   • errors.js       - All error classes');
console.log('   • user.service.js - User CRUD functions');
console.log('   • wrapper.js      - errorWrapper function');
console.log('   • main.js         - Test code');
console.log('');
console.log('3. Answer these questions:');
console.log('   Q1: What should errors.js EXPORT?');
 console.log(" error.js  will import error-wrapper.js use it to wrap all the craeated  custom error classes logic like the VaidationError,  DuplicateError, etc and expor them so that other files can use them.");
console.log('   Q2: What should user.service.js IMPORT?');
console.log("user.service.js will import errors.js to use the custom error classes like ValidationError, NotFoundError, and DuplicateError in its user CRUD functions.")
console.log('   Q3: What should main.js IMPORT?');
console.log(" main.js will import user.service.js to access the user CRUD functions and errors.js to handle any custom errors that may be thrown during user operations.");
console.log('');
console.log("Write your answers, then I'll guide you through implementation!");
console.log('---\n');

// ═══════════════════════════════════════════════════════════════════════════
// 📝 IN THE NUTSHELL: KEY INSIGHTS
// ═══════════════════════════════════════════════════════════════════════════

console.log('📝 Key Insights:');
console.log('');
console.log('1. Modules split code into logical, reusable files');
console.log('2. Export makes code available to other files');
console.log('3. Import brings code from other files into current file');
console.log("4. Named exports use { }, default exports don't");
console.log('5. NestJS is built entirely on ES6 modules');
console.log('6. Good structure = easier maintenance and collaboration');
console.log('7. Always keep imports at top, exports clear and minimal');
console.log('');
console.log('✅ Day 12 Concept Complete!');
console.log('💡 Tomorrow: Implement the module structure hands-on!');
