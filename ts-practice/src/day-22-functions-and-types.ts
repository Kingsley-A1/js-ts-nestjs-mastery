// ============================================================
// 📘 DAY 22: Functions & Types — Practice File
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================

// ─────────────────────────────────────────────────────────────
// SECTION 1: Regular vs Arrow Functions
// ─────────────────────────────────────────────────────────────

// 1. Regular Function
// Guard 1: (name: string) -> Entrance
// Guard 2: : string       -> Exit
function generateWelcomeMessage(name: string): string {
  return `Welcome back to the portal, ${name}!`;
}

// 2. Arrow Function (Exact same logic, different syntax)
const generateWelcomeMessageArrow = (name: string): string => {
  return `Welcome back to the portal, ${name}!`;
};

console.log(generateWelcomeMessage("Kingsley"));

// ─────────────────────────────────────────────────────────────
// SECTION 2: Optional Parameters (?)
// ─────────────────────────────────────────────────────────────
// The '?' means the user doesn't HAVE to provide the title.
// Optional parameters MUST go at the end.

function createProfileLabel(name: string, title?: string): string {
  if (title) {
    return `[${title}] ${name}`;
  }
  return name; // If no title is provided, just return the name
}

console.log(createProfileLabel("Kingsley", "Senior Engineer")); // ✅
console.log(createProfileLabel("Alice")); // ✅ Valid because title is optional

// ─────────────────────────────────────────────────────────────
// SECTION 3: Default Parameters (=)
// ─────────────────────────────────────────────────────────────
// If the user doesn't provide a currency, it defaults to "NGN".

const formatPrice = (amount: number, currency: string = "NGN"): string => {
  return `${currency} ${amount.toLocaleString()}`;
};

console.log(formatPrice(50000));          // NGN 50,000
console.log(formatPrice(1000, "USD"));    // USD 1,000

// ─────────────────────────────────────────────────────────────
// SECTION 4: Void Functions (Actions with no return)
// ─────────────────────────────────────────────────────────────
// The factory performs a task but hands you nothing back.

function saveToDatabaseMock(data: string): void {
  // We just log something. We do NOT use the 'return' keyword here.
  console.log(`💾 Saving "${data}" to the imaginary database...`);
}

saveToDatabaseMock("User record 101");

// ─────────────────────────────────────────────────────────────
// SECTION 5: Passing Objects (The NestJS DTO Pattern)
// ─────────────────────────────────────────────────────────────
// Instead of passing (name, age, email, role, password...),
// we pack them into an Interface/Type and pass ONE parameter.

interface UpdateUserDto {
  userId: number;
  newEmail: string;
  isActive: boolean;
}

function processUserUpdate(dto: UpdateUserDto): string {
  // We unpack (read) the data from the box
  return `Updating user ${dto.userId}. Email set to: ${dto.newEmail}`;
}

// We pass a single object that perfectly matches the blueprint
const result = processUserUpdate({
  userId: 55,
  newEmail: "newking@dev.com",
  isActive: true
});

console.log(result);

// ─────────────────────────────────────────────────────────────
// SECTION 6: Function Types
// ─────────────────────────────────────────────────────────────
// Defining a blueprint for a function itself!

type MathOperation = (a: number, b: number) => number;

// We force the 'add' variable to follow the MathOperation blueprint
const add: MathOperation = (a, b) => {
  return a + b;
};

// ❌ TypeScript knows 'a' and 'b' must be numbers, so it prevents string operations.
// const badAdd: MathOperation = (a, b) => {
//   return a + " string!"; // Error! Blueprint says you must return a number.
// };
