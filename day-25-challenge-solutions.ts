// ============================================================
// 📘 DAY 25: Classes in TypeScript — Challenge Solutions
// TypeScript & NestJS Mastery Plan | Kingsley
// Type every line manually. No copy-paste. No `any`.
// ============================================================

// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 1: The Public User Class
// Write a class with public properties and a public method.
// ─────────────────────────────────────────────────────────────
class User{
  public name: string;
  public email: string;
  public role: string;
  
  constructor(name: string, email: string, role: string) {
    this.name = name;
    this.email = email;
    this.role = role;
  }
  getPublicUserDetails(): string {
    return `Name: ${this.name}, Email: ${this.email}, Role: ${this.role}`;
  }
}

const user = new User("Kingsley", "king@nest.com", "engineer");
console.log(user)

// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 2: The Private Bank Account
// 1. Create a private balance field
// 2. Add deposit() and getBalance()
// 3. Confirm direct balance access fails
// ─────────────────────────────────────────────────────────────
class BankDetails {
  public name: string;
  private balance: number;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount: number): number {
    this.balance += amount;
    return this.balance;
  }

  getBalance(): number {
    return this.balance;
  }
}



// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 3: The Readonly Identity
// 1. Create a class with a readonly id
// 2. Allow updating other public fields
// 3. Confirm id reassignment fails
// ─────────────────────────────────────────────────────────────
class NewUser {
  readonly id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getDetails(): string {
    return `${this.name} has an ID of ${this.id}`;
  }
}

const newUser = new NewUser(1, "Kingsley");
console.log(newUser.getDetails());
// ─────────────────────────────────────────────────────────────
// 🔴 Challenge 4: The Typed User Class
// 1. readonly id
// 2. public name and email
// 3. private password
// 4. Methods: updateEmail(), checkPassword()
// ─────────────────────────────────────────────────────────────
class TypedUser {
  readonly id: number;
  public name: string;
  public email: string;
  private password: string;

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  updateEmail(newEmail: string): void {
    this.email = newEmail;
  }

  checkPassword(password: string): boolean {
    return this.password === password;
  }
}


// ─────────────────────────────────────────────────────────────
// 🟡 Challenge 5: Constructor Shorthand + Getter
// 1. Use constructor parameter properties
// 2. Add a private field
// 3. Expose a computed getter
// ─────────────────────────────────────────────────────────────
//Come back here
 

// ─────────────────────────────────────────────────────────────
// 🔵 Challenge 6: Spot protected and static (Read-Only)
// Write a one-line comment above each explaining what it does.
// ─────────────────────────────────────────────────────────────

// ???


// // ???
// class FileLogger extends BaseLogger {
//   add(message: string): void {
//     this.logs.push(message);
//   }
// }

// ???
class MathHelper {
  static square(value: number): number {
    return value * value;
  }
}


//A class is a blueprint for creating objects that carry both: data+ behaviour 
//Normal Object
const product = {
  name: "iPhone X",
  price: 150000
};

//Class Version
class Product{
  name: string;
  price: number

  constructor(name: string, price: number){
    this.name = name;
    this.price = price
  }

  getDetails():string{
    return `${this.name} cost ${this.price.toLocaleString()}`
  }
}

const product2 = new Product("15 Pro Max", 25000000)
console.log(product2.getDetails());
//class is the phone model blueprint, new Product(...) is creating one real product(phone) 

//I can use CONSTRUCTOR PARAMETER PROPERTIES  SHORTHAND TO MAKE THE CODE MORE CONCISE
class Product2{
  constructor(public name: string, public price: number){}
}
//Or this
class Product3{
  constructor(public name: string, public price: number, private discount: number){}
getdetails(): string{
  const discountedPrice = this.price - (this.price * this.discount);
  return `${this.name} costs ${discountedPrice.toLocaleString()} after a ${this.discount * 100}% discount.`;
}};

  //ACESS MODIFIERS
  //Public means the properties are acessible anywhere
class User3{
  //Public means the properties are acessible anywhere
  constructor(public name: string, public email: string, private password: string){}

  checkPassword(password: string): boolean {
    return this.password === password;
  }
}
const newPass = new User3("Kingsley", "kingsley@example.com", "secure123");
console.log(newPass.checkPassword("secure123")); // true
console.log(newPass.checkPassword("wrongpass")); // false


//Private Means it is only accessible within the class that created it

class BankAccount{
  constructor(private balance: number){}
  showBalance(): number{
    return this.balance
  }
}
const account = new BankAccount(1000);
console.log(account.showBalance()); // 1000
// console.log(account.balance); // ❌ Error: Property 'balance' is private and only accessible within class 'BankAccount'.
//Readonly - Values that should not change after creation
 class User4{
  constructor(
    public readonly id: number,
    public name: string
  ){}

 }
 const user4 = new User4(1, "Kingsley")

 user4.name = "Blessed King"
 console.log(user4)
 {/*
  Examples of readonly
  id
createdAt
transactionReference
orderNumber*/}

//Method: A function inside a class

class Gadgets{
  constructor(
    public name: string,
    public price: number
  ){}
 applyDiscount(percentage: number): number{
  return this.price - (this.price * percentage)/100;
 }
}
//Using it
const earPods = new Gadgets("AirPods Pro", 25000);
const discountedPrice = earPods.applyDiscount(20);
console.log(`The discounted price of ${earPods.name} is ${discountedPrice.toLocaleString()}`);

//A full product class with all features
class FullProduct {
  constructor(
    public readonly id: number,
    public name: string,
    public price: number,
    private discount: number,
    public inStock: boolean
  ){}
  getFullProductDetails(): string {
    const discountedPrice = this.price - (this.price * this.discount);
    return `Product ID: ${this.id}\nName: ${this.name}\nOriginal Price: ${this.price.toLocaleString()}\nDiscounted Price: ${discountedPrice.toLocaleString()}\nIn Stock: ${this.inStock}`;
  }

  applyDiscount(percentage: number): number{
    return this.price - (this.price * percentage)/100;
  }
  markOutOfStock():void{
    this.inStock = false;
  }
}

const laptop = new FullProduct(101, "MacBook Pro", 200000, 0.1, true);
console.log(laptop.getFullProductDetails());

//Class Vs Type

//Type desicribes the shape
type TypedProduct = {
  id: number;
  name: string;
  price: number;
};

//Class descrbes the shape and creates real object with behaviour
class ClassProduct {
  constructor(
    public id: number,
    public name: string,
    public price: number
  ) {}

  getDetails(): string {
    return `${this.name} - ₦${this.price}`;
  }
}

//Hack: Use type or interface when you neeed structure.
//Use class when you need object creation, constructor setup, methods, controlled access, Nestjs entities/DTO-style behavior

// Rule: 
// If it is only data, use type or interface.
// If it is data plus behavior, consider a class.

{/*Nesjs Relevance
@Injectable()
export class ProductService{
  constructor(private readonly productRepository: ProductRepository){}

  findAll(){
    return this.productRepository.find()
  }
}

This
constructor(private readonly userService: UserService){} 
means
private      -> only this class can use it
readonly     -> it should not be reassigned
userService  -> the injected dependency
UserService  -> the type/class being injected


//Recognize: abstract classes
inheritance
protected
static
implements
decorators

*/}


