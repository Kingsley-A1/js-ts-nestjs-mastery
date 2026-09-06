// ============================================================
// 📘 DAY 24: Generics Advanced — Challenge Solutions
// TypeScript & NestJS Mastery Plan | Kingsley
// Type every line manually. No copy-paste. No `any`.
// ============================================================

// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 1: The Constrained Printer
// Write printLabel<T extends { name: string }>(item: T): string
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 2: The Safe Property Getter (keyof)
// Write getProperty<T, K extends keyof T>(obj: T, key: K): T[K]
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 3: Constrained Transformer v2
// 1. Define DbEntity interface
// 2. Write transformEntities<T extends DbEntity, U>
// 3. Create User type extending DbEntity
// 4. Transform users → names
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 4: Constrained Stack v2
// 1. Define HasId interface
// 2. class EntityStack<T extends HasId>
// 3. Add findById(id: number): T | undefined
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// 🟡 Challenge 5: Generic Defaults + Multiple Constraints
// 1. interface ApiResponse<T = null>
// 2. logEntry<T extends Named & Timestamped>
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// 🔵 Challenge 6: Spot the infer (Read-Only)
// Write a one-line comment above each explaining what it does.
// ─────────────────────────────────────────────────────────────

// ???
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// ???
type ElementType<T> = T extends (infer U)[] ? U : T;

// ???
type MyAwaited<T> = T extends Promise<infer U> ? U : T;
