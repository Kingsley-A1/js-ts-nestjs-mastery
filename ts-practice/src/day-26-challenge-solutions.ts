// ============================================================
// 📘 DAY 26: Decorators (Preview) — Challenge Solutions
// TypeScript & NestJS Mastery Plan | Kingsley
// Type every line manually. No copy-paste. No `any`.
// ============================================================

function Feature(featureName: string) {
  return function (_target: Function, _context: ClassDecoratorContext): void {
    void featureName;
  };
}

function LogCall<This, Args extends unknown[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
) {
  return originalMethod;
}

// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 1: The First Class Decorator
// Write a decorator that logs when a class is registered.
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 2: The Decorator Factory
// 1. Create Feature(featureName: string)
// 2. Return the real class decorator
// 3. Store the feature in a registry
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 3: The Method Logger
// 1. Write a method decorator that wraps the original method
// 2. Log args before the call
// 3. Log the result after the call
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 4: The Simple Decorated Service
// 1. Add a class decorator for a service tag
// 2. Add a method decorator for audit logging
// 3. Create a service with listUsers() and addUser()
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// 🟡 Challenge 5: Context + Metadata Preview
// 1. Log context.kind and context.name in a method decorator
// 2. Store a role requirement in a Map
// 3. Read the stored value later
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// 🔵 Challenge 6: Spot the NestJS Pattern (Read-Only)
// Write a one-line comment above each explaining the idea.
// ─────────────────────────────────────────────────────────────

// ???
@Feature("users")
class UserController {}

// ???
class ProductService {
  @LogCall
  public findAll(): string[] {
    return ["phone", "laptop"];
  }
}

// ???
const examples = ["@Controller()", "@Get()", "@Injectable()"];