// ============================================================
// 📘 DAY 26: Decorators (Preview) — Practice File
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================
// Today you learn the decorator mental model before NestJS.
// Focus: @decorator syntax, decorator factories, and metadata preview.
//
// 🔴 = By Heart (must write from memory)
// 🟡 = Good to Know (understand, outsource syntax)
// 🔵 = Recognize (just know it exists)
// ============================================================

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 1: A Decorator Runs When the Class Is Defined
// ─────────────────────────────────────────────────────────────
//
// A decorator is just a function attached with @ syntax.
// It runs when TypeScript defines the class or method.

const registeredClassNames = new Set<string>();

function Registered(target: Function, context: ClassDecoratorContext): void {
  registeredClassNames.add(String(context.name));
  console.log(`[CLASS DECORATOR] ${String(context.name)} has been registered.`);
}

@Registered
class AppController {
  public index(): string {
    return "Home route";
  }
}

const controller = new AppController();

console.log("Decorated classes:", [...registeredClassNames]);
console.log("Controller response:", controller.index());

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 2: Decorator Factory — A Function That Returns
// 🔴            the Real Decorator
// ─────────────────────────────────────────────────────────────
//
// This is the most common pattern in frameworks.
// @Feature("users") means Feature("users") runs first,
// then it returns the actual decorator function.

const featureRegistry = new WeakMap<Function, string>();

function Feature(featureName: string) {
  return function (target: Function, context: ClassDecoratorContext): void {
    featureRegistry.set(target, featureName);
    console.log(`[FEATURE] ${String(context.name)} -> ${featureName}`);
  };
}

@Feature("users")
class UserService {
  public getSource(): string {
    return "database";
  }
}

const userService = new UserService();

console.log("\n── Decorator Factory ──");
console.log("Feature tag:", featureRegistry.get(UserService));
console.log("User source:", userService.getSource());

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 3: Method Decorator — Wrap a Method with Extra
// 🔴            Behavior
// ─────────────────────────────────────────────────────────────
//
// Method decorators can replace the original method with a
// new function that does more work before or after the call.

function LogCall<This, Args extends unknown[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
) {
  const methodName = String(context.name);

  return function replacementMethod(this: This, ...args: Args): Return {
    console.log(`[METHOD] ${methodName} called with:`, args);
    const result = originalMethod.call(this, ...args);
    console.log(`[METHOD] ${methodName} returned:`, result);
    return result;
  };
}

class Calculator {
  @LogCall
  public add(first: number, second: number): number {
    return first + second;
  }
}

const calculator = new Calculator();

console.log("\n── Method Decorator ──");
console.log("Sum:", calculator.add(7, 5));

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 4: The Simple Decorated Service (Day 26 Deliverable)
// ─────────────────────────────────────────────────────────────
//
// This is the Day 26 pattern to own:
// class decorator for tagging
// method decorator for cross-cutting behavior

const serviceTags = new WeakMap<Function, string>();
const auditRegistry = new Map<string, string>();

function ServiceTag(tag: string) {
  return function (target: Function, context: ClassDecoratorContext): void {
    serviceTags.set(target, tag);
    console.log(`[SERVICE TAG] ${String(context.name)} tagged as ${tag}`);
  };
}

function Audit(action: string) {
  return function <This, Args extends unknown[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
  ) {
    const methodName = String(context.name);
    auditRegistry.set(methodName, action);

    return function auditedMethod(this: This, ...args: Args): Return {
      console.log(`[AUDIT] ${action} -> ${methodName}`);
      return originalMethod.call(this, ...args);
    };
  };
}

@ServiceTag("users")
class DecoratedUserService {
  private users = ["Kingsley", "Alice"];

  @Audit("LIST_USERS")
  public listUsers(): string[] {
    return [...this.users];
  }

  @Audit("ADD_USER")
  public addUser(name: string): number {
    this.users.push(name);
    return this.users.length;
  }
}

const decoratedUserService = new DecoratedUserService();

console.log("\n── Decorated Service ──");
console.log("Service tag:", serviceTags.get(DecoratedUserService));
console.log("Metadata for listUsers:", auditRegistry.get("listUsers"));
console.log("Users:", decoratedUserService.listUsers());
console.log("New count:", decoratedUserService.addUser("Bob"));
console.log("Users after add:", decoratedUserService.listUsers());

// ─────────────────────────────────────────────────────────────
// 🟡 SECTION 5: Context Object — Read Information About What
// 🟡            You Are Decorating
// ─────────────────────────────────────────────────────────────
//
// The context object tells you what kind of thing is being
// decorated and gives metadata like its name.

function DescribeMethod<This, Args extends unknown[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
): void {
  console.log("\n── Context Preview ──");
  console.log("kind:", context.kind);
  console.log("name:", String(context.name));
  console.log("static:", context.static);
  console.log("private:", context.private);

  void originalMethod;
}

class HealthService {
  @DescribeMethod
  public ping(): string {
    return "pong";
  }
}

const healthService = new HealthService();

console.log("Ping:", healthService.ping());

// ─────────────────────────────────────────────────────────────
// 🟡 SECTION 6: Metadata Preview — Store Information Outside
// 🟡            the Class
// ─────────────────────────────────────────────────────────────
//
// A common decorator job is to store information that the app
// can look up later. Here we do that with a Map.

const roleRequirements = new Map<string, string>();

function RequiresRole(role: string) {
  return function <This, Args extends unknown[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
  ) {
    roleRequirements.set(String(context.name), role);
    return originalMethod;
  };
}

class AdminActions {
  @RequiresRole("admin")
  public deleteUser(userId: number): string {
    return `Deleted user ${userId}`;
  }
}

const adminActions = new AdminActions();

console.log("\n── Metadata Preview ──");
console.log("deleteUser role:", roleRequirements.get("deleteUser"));
console.log(adminActions.deleteUser(2));

// ─────────────────────────────────────────────────────────────
// 🔵 SECTION 7: Recognize — These Ideas Show Up Everywhere in
// 🔵            NestJS
// ─────────────────────────────────────────────────────────────
//
// You do not need to implement NestJS decorators yet.
// Just recognize the pattern you are about to meet.

const upcomingNestDecorators = [
  "@Controller('users')",
  "@Get()",
  "@Post()",
  "@Injectable()",
];

console.log("\n── Recognize ──");
console.log("Upcoming NestJS decorators:", upcomingNestDecorators.join(", "));