// ============================================================
// 📘 DAY 22: Functions & Types — Solutions
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================

// ⚔️ Challenge 1: The Basic Factories (Arrow vs Regular)
// 1. Regular function (multiply)
function multiply(num1: number, num2: number): number {
    return num1 * num2;
}
console.log(multiply(5, 10));

// 2. Arrow function (divide)
const divide = (num1: number, num2: number): number => {
    return num1 / num2;
}
console.log(divide(10, 5));


// ⚔️ Challenge 2: The Optional VIP
// Write createGreeting(name, isVIP?)

function createGreeting(name: string, isVIP?: boolean): string {
    if (isVIP) {
        return `Welcome back, Mr ${name}!`
    }
    else {
        return `Welcome, Mr ${name}!`
    }
}
console.log(createGreeting("Kingsley", true));

// ⚔️ Challenge 3: The Default Database Paginator
// Write fetchUsers(page, limit = 10)

function fetchUsers(page: number, limit: number = 10): string {
    return `Fetching users for page ${page} with limit ${limit}`;
}
console.log(fetchUsers(1));


// ⚔️ Challenge 4: The Action Hero (Void)
// Write sendEmailAlert(emailAddress, message) returning void

const sendEmailAlert = (emailAddress: string, message: string): void => {
    console.log(`Sending email to ${emailAddress} with message ${message}`);
}
console.log(sendEmailAlert("kingsley@nestdev", "Hello"));
//With Reg Function
function sendEmailAlert2(emailAddress: string, message: string): void {
    console.log(`Sending email to ${emailAddress} with message ${message}`);
}
console.log(sendEmailAlert2("kingsley@nestdev", "Hello"));


// ⚔️ Challenge 5: The NestJS DTO Simulator (Boss Challenge)
// 1. Create CreateProductDto interface
interface CreateProductDto {
    name: string;
    price: number;
    description?: string;
}

// 2. Write createProduct(dto)

function createProduct(dto: CreateProductDto) {
    return `created a ${dto.name} for $${dto.price.toLocaleString()}`;
}
console.log(createProduct({ name: "iPhone 15", price: 1200, description: "The latest iPhone" }));

// ⚔️ Extra Challenge: Write 4 more random functions of your choice to hit the 10 function goal!
// Function 6:
function Calculate(num1: number, num2: number, operator: string) {
    if (operator === "+") {
        return num1 + num2;
    }
    else if (operator === "-") {
        return num1 - num2;
    }
    else if (operator === "*") {
        return num1 * num2;
    }
    else if (operator === "/") {
        return num1 / num2;
    }
    else {
        return "Invalid operator";
    }
}
console.log(Calculate(10, 5, "+"));
// Function 7:
function Greet(name: string, greeting?: string) {
    if (greeting) {
        return `Hello ${name}, ${greeting}`;
    }
    else {
        return `Hello ${name}`;
    }
}
console.log(Greet("Kingsley"));
console.log(Greet("Kingsley", "Good Morning"))

// Function 8:
const CalculateAge = (birthYear: number, currentYear: number) => {
    return currentYear - birthYear;
}
console.log(CalculateAge(2002, 2026));

// Function 9:
function NumberOfCourses(courses: string[]): number {
    return courses.length;
}
console.log(NumberOfCourses(["JS", "TS", "NestJS", "Database"]));
// Function 10 (Try combining an interface parameter with a return type!):

interface CreateBlogDto {
    title: string;
    content: string;
    author?: string;
}

function createBlog(dto: CreateBlogDto): string {
    return `Created a blog with title ${dto.title} by ${dto.author} and the content is ${dto.content}`;
}

console.log(createBlog({ title: "The Importance of TypeScript", author: "Kingsley", content: "TS is a superset of JS that adds static typing" }));

