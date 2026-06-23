// ============================================================
// 📘 DAY 27: Utility Types — Practice File
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================
// Today you learn how to reshape existing types instead of
// rewriting them again and again.
// Focus: Partial, Pick, Omit, and Record.
//
// 🔴 = By Heart (must write from memory)
// 🟡 = Good to Know (understand, outsource syntax)
// 🔵 = Recognize (just know it exists)
// ============================================================

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "student";
  isActive: boolean;
}

const baseUser: User = {
  id: 1,
  name: "Kingsley",
  email: "king@dev.com",
  password: "safe-pass",
  role: "student",
  isActive: true,
};

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 1: Partial<T> — Make Every Property Optional
// ─────────────────────────────────────────────────────────────
//
// Partial<User> means:
// "same shape as User, but every property becomes optional"

type UserPatch = Partial<User>;

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const userPatch: UserPatch = {
  name: "Kingsley Madu",
  isActive: false,
};

const updatedUser = updateUser(baseUser, userPatch);

console.log("── Partial<T> ──");
console.log("Patch object:", userPatch);
console.log("Updated user:", updatedUser);

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 2: Pick<T, K> — Keep Only the Fields You Need
// ─────────────────────────────────────────────────────────────
//
// Pick<User, "id" | "name" | "email"> means:
// "build a new type using only these chosen keys"

type UserCard = Pick<User, "id" | "name" | "email">;

const userCard: UserCard = {
  id: baseUser.id,
  name: baseUser.name,
  email: baseUser.email,
};

console.log("\n── Pick<T, K> ──");
console.log("User card:", userCard);

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 3: Omit<T, K> — Remove the Fields You Do Not Want
// ─────────────────────────────────────────────────────────────
//
// Omit<User, "password"> means:
// "same User type, but without the password field"

type PublicUser = Omit<User, "password">;

function toPublicUser(user: User): PublicUser {
  const { password, ...safeUser } = user;
  void password;
  return safeUser;
}

const publicUser = toPublicUser(updatedUser);

console.log("\n── Omit<T, K> ──");
console.log("Public user:", publicUser);

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 4: Record<K, T> — Build an Object Type from Keys
// ─────────────────────────────────────────────────────────────
//
// Record<UserRole, string> means:
// "make an object whose keys come from UserRole and whose values
//  are all strings"

type UserRole = User["role"];
type RoleLabels = Record<UserRole, string>;

const roleLabels: RoleLabels = {
  admin: "Administrator",
  student: "Student",
};

console.log("\n── Record<K, T> ──");
console.log("Role labels:", roleLabels);
console.log("Admin label:", roleLabels.admin);

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 5: The Day 27 Deliverable — Use All Four Together
// ─────────────────────────────────────────────────────────────
//
// This is the Day 27 pattern to own:
// Pick for input
// Partial for updates
// Omit for safe output
// Record for indexed lookup/config maps

type CreateUserInput = Pick<User, "name" | "email" | "password">;
type UpdateUserInput = Partial<Pick<User, "name" | "email" | "role" | "isActive">>;
type SafeUserResponse = Omit<User, "password">;
type UserDirectory = Record<number, SafeUserResponse>;

function createUser(input: CreateUserInput, id: number, role: UserRole): User {
  return {
    id,
    name: input.name,
    email: input.email,
    password: input.password,
    role,
    isActive: true,
  };
}

const createdUser = createUser(
  {
    name: "Alice",
    email: "alice@dev.com",
    password: "alice-pass",
  },
  2,
  "admin",
);

const patchedCreatedUser = updateUser(createdUser, {
  email: "alice@mastery.dev",
  isActive: false,
} satisfies UpdateUserInput);

const safeCreatedUser: SafeUserResponse = toPublicUser(patchedCreatedUser);

const userDirectory: UserDirectory = {
  [publicUser.id]: publicUser,
  [safeCreatedUser.id]: safeCreatedUser,
};

console.log("\n── Day 27 Deliverable ──");
console.log("Created user:", createdUser);
console.log("Patched user:", patchedCreatedUser);
console.log("Safe response:", safeCreatedUser);
console.log("Directory:", userDirectory);

// ─────────────────────────────────────────────────────────────
// 🟡 SECTION 6: You Can Combine Utility Types
// ─────────────────────────────────────────────────────────────
//
// Utility types become very powerful when stacked together.

type UserContactPatch = Partial<Pick<User, "name" | "email">>;

const contactPatch: UserContactPatch = {
  email: "new-contact@dev.com",
};

console.log("\n── Combined Utility Types ──");
console.log("Contact patch:", contactPatch);

// ─────────────────────────────────────────────────────────────
// 🔵 SECTION 7: Recognize — There Are More Utility Types
// ─────────────────────────────────────────────────────────────
//
// You do not need to drill these today.
// Just know they exist and what kind of job they do.

const moreUtilityTypes = [
  "Readonly<T>",
  "Required<T>",
  "ReturnType<typeof fn>",
];

console.log("\n── Recognize ──");
console.log("More utility types:", moreUtilityTypes.join(", "));