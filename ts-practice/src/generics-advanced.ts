// function getName<T extends { name: string }>(item: T): string {
//   return item.name;
// }

type Product ={
    id: number;
    name: string;
    price: number;
    instock: boolean;
}

type User ={
    id: number;
    name: string;
    email: string;
    role: "admin" | "customer"
}

function getName<T extends {name: string}>(item: T): string {
    return item.name;
}

function getId <T extends {id: number}>(item: T): number {
    return item.id;
}
const product: Product = {
    id: 1,
    name: "Laptop",
    price: 1500000,
    instock: true
}
const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    role: "customer"
}
const productId = getId(product);
const userId = getId(user);
const productName = getName(product);
const userName = getName(user); // Error: Type 'string' is not assignable to type 'number'
console.log("Product ID:", productId);
console.log("User ID:", userId);

console.log(productName)
console.log(userName)



//Assigment 1
//Build getPrice
function getPrice<T extends {price: number}>(item: T): number {
    return item.price;
}
//Test it
type Item ={
    id: number;
    name: string;
    price: number;
    stock: boolean;
    storage: string;
}
const phone: Item =({
    id: 1,
    name: "iPhone 15 Pro",
    price: 1500000,
    stock: true,
    storage: "256GB"
})

const price = getPrice(phone);
console.log("Price:", price)

//getEmail
function getEmail<T extends {email: string}>(item: T): string {
    return item.email;
}
const user1: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    role: "customer"
}

const userEmail = getEmail(user1);
console.log(getEmail(user1))
console.log("User Email:", userEmail);


//pickProperty
function pickProperty<T, K extends keyof T>(item: T, key: K): T[K] {
    return item[key];
}

const laptop: Item = {
    id: 1,
    name: "MacBook Pro",
    price: 2000000,
    stock: true,
    storage: "512GB"
}
const laptopId = pickProperty(laptop, "id");
const laptopName = pickProperty(laptop, "name");
const laptopPrice = pickProperty(laptop, "price");
console.log("Laptop ID:", laptopId);
console.log("Laptop Name:", laptopName);
console.log("Laptop Price:", laptopPrice);

//@Copilot Explain this function
function pickProperty2<T, K extends keyof T>(item: T, key: K): T[K] { return item[key]; }
