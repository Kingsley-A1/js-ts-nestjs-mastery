// ============================================================
// 📘 DAY 27: Utility Types — Challenge Solutions
// TypeScript & NestJS Mastery Plan | Kingsley
// Type every line manually. No copy-paste. No `any`.
// ============================================================

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "student";
  isActive: boolean;
}

interface Settings {
  theme?: string;
  notifications?: boolean;
}

function getStatus() {
  return { ok: true, code: 200 };
}

// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 1: The Patch Object
// Write a Partial<User> update object and use it in updateUser().
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 2: The Public Card
// 1. Use Pick<User, ...>
// 2. Keep only id, name, and email
// 3. Create one valid object
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 3: The Safe Response
// 1. Use Omit<User, "password">
// 2. Create a function that removes the password field
// 3. Return the safe object
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 4: The Role Map
// 1. Create a role union
// 2. Use Record<Role, string>
// 3. Build an object with all required keys
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 5: Use All Four Together
// 1. Create CreateUserInput with Pick
// 2. Create UpdateUserInput with Partial + Pick
// 3. Create SafeUserResponse with Omit
// 4. Create UserDirectory with Record
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// 🔵 Challenge 6: Spot the Other Utility Types (Read-Only)
// Write a one-line comment above each explaining what it does.
// ─────────────────────────────────────────────────────────────

// ???
type LockedUser = Readonly<User>;

// ???
type ReadySettings = Required<Settings>;

// ???
type StatusResult = ReturnType<typeof getStatus>;