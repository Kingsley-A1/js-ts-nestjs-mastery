// ============================================================
// 📘 DAY 25: Classes in TypeScript — Practice File
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================
// Today we move from plain object shapes to class blueprints.
// Focus: public, private, readonly.
//
// 🔴 = By Heart (must write from memory)
// 🟡 = Good to Know (understand, outsource syntax)
// 🔵 = Recognize (just know it exists)
// ============================================================

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 1: public — The Basic Class Shape
// ─────────────────────────────────────────────────────────────
//
// public means the property or method can be used anywhere:
// inside the class and also outside on the created object.

class UserProfile {
  public name: string;
  public role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }

  public getLabel(): string {
    return `${this.name} (${this.role})`;
  }
}

const kingsleyProfile = new UserProfile("Kingsley", "Backend Student");

console.log("Profile name:", kingsleyProfile.name);
console.log("Profile label:", kingsleyProfile.getLabel());

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 2: private — Hide Internal State
// ─────────────────────────────────────────────────────────────
//
// private means "only this class can touch this property directly".
// Outside code must go through public methods.

class BankAccount {
  public owner: string;
  private balance: number;

  constructor(owner: string, openingBalance: number) {
    this.owner = owner;
    this.balance = openingBalance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public withdraw(amount: number): boolean {
    if (amount > this.balance) {
      return false;
    }

    this.balance -= amount;
    return true;
  }

  public getBalance(): number {
    return this.balance;
  }
}

const savings = new BankAccount("Kingsley", 5000);
savings.deposit(2500);
const withdrew = savings.withdraw(1000);
// console.log(savings.balance); // ❌ Property 'balance' is private

console.log("\n── private Demo ──");
console.log("Owner:", savings.owner);
console.log("Withdraw successful:", withdrew);
console.log("Safe balance access:", savings.getBalance());

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 3: readonly — Lock Values After Construction
// ─────────────────────────────────────────────────────────────
//
// readonly means "set it once, then stop changing it".
// Great for IDs, usernames, createdAt timestamps, invoice numbers.

class Product {
  readonly sku: string;
  public name: string;
  public price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  public rename(newName: string): void {
    this.name = newName;
  }

  public updatePrice(newPrice: number): void {
    this.price = newPrice;
  }
}

const laptop = new Product("SKU-1001", "Laptop", 1500000);
laptop.rename("Gaming Laptop");
laptop.updatePrice(1650000);
// laptop.sku = "SKU-9999"; // ❌ Cannot assign to 'sku' because it is read-only

console.log("\n── readonly Demo ──");
console.log("SKU:", laptop.sku);
console.log("Name:", laptop.name);
console.log("Price:", laptop.price);

// ─────────────────────────────────────────────────────────────
// 🔴 SECTION 4: The Typed User Class (Day 25 Deliverable)
// ─────────────────────────────────────────────────────────────
//
// This is the main pattern to own from memory:
// readonly for identity
// public for data you intentionally expose
// private for secrets/internal state

class UserAccount {
  readonly id: number;
  public name: string;
  public email: string;
  private password: string;
  private loginCount: number;

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.loginCount = 0;
  }

  public updateEmail(newEmail: string): void {
    this.email = newEmail;
  }

  public checkPassword(input: string): boolean {
    return this.password === input;
  }

  public recordLogin(): void {
    this.loginCount += 1;
  }

  public getLoginCount(): number {
    return this.loginCount;
  }
}

const user = new UserAccount(1, "Kingsley", "king@dev.com", "safe-pass");
user.recordLogin();
user.recordLogin();
user.updateEmail("kingsley@mastery.dev");
// user.password = "hack"; // ❌ private
// user.id = 99;            // ❌ readonly

console.log("\n── Typed User Class ──");
console.log("User ID:", user.id);
console.log("Email:", user.email);
console.log("Password matches:", user.checkPassword("safe-pass"));
console.log("Login count:", user.getLoginCount());

// ─────────────────────────────────────────────────────────────
// 🟡 SECTION 5: Constructor Parameter Properties
// ─────────────────────────────────────────────────────────────
//
// TypeScript can create and assign class properties directly
// from the constructor parameters.

class AdminUser {
  constructor(
    public username: string,
    private permissions: string[],
    readonly staffId: string,
  ) {}

  public hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }
}

const admin = new AdminUser("king-admin", ["read:users", "edit:users"], "STAFF-01");

console.log("\n── Constructor Shorthand ──");
console.log("Username:", admin.username);
console.log("Can edit users:", admin.hasPermission("edit:users"));
// console.log(admin.permissions); // ❌ private
// admin.staffId = "STAFF-02";    // ❌ readonly

// ─────────────────────────────────────────────────────────────
// 🟡 SECTION 6: Getters — Controlled Read Access
// ─────────────────────────────────────────────────────────────
//
// A getter lets you expose a computed value while keeping
// the raw internal field private.

class CourseProgress {
  private lessonsCompleted = 0;

  constructor(
    public title: string,
    readonly courseId: string,
  ) {}

  public completeLesson(): void {
    this.lessonsCompleted += 1;
  }

  get progress(): string {
    return `${this.lessonsCompleted} lessons completed`;
  }
}

const typescriptCourse = new CourseProgress("TypeScript Mastery", "TS-25");
typescriptCourse.completeLesson();
typescriptCourse.completeLesson();

console.log("\n── Getter Demo ──");
console.log("Course:", typescriptCourse.title);
console.log("Progress:", typescriptCourse.progress);

// ─────────────────────────────────────────────────────────────
// 🔵 SECTION 7: Recognize — protected and static
// ─────────────────────────────────────────────────────────────
//
// protected = usable inside the class and its subclasses
// static    = belongs to the class itself, not each object

class BaseLogger {
  protected logs: string[] = [];

  protected addLog(entry: string): void {
    this.logs.push(entry);
  }
}

class AppLogger extends BaseLogger {
  public log(message: string): void {
    this.addLog(message);
  }

  public getLogs(): string[] {
    return [...this.logs];
  }
}

class MathHelper {
  static double(value: number): number {
    return value * 2;
  }
}

const logger = new AppLogger();
logger.log("Server started");

console.log("\n── Recognize ──");
console.log("Logs:", logger.getLogs());
console.log("Double 8:", MathHelper.double(8));