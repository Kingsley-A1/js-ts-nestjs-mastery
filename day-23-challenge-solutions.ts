// ============================================================
// 📘 DAY 23: Generics Intro — Challenge Solutions
// TypeScript & NestJS Mastery Plan | Kingsley
// Type every line manually. No copy-paste. No `any`.
// ============================================================

// ─────────────────────────────────────────────────────────────
// ⚔️ Challenge 1: The Universal Wrapper
// Write wrapInArray<T>(value: T): T[]
// Test with: string, number, boolean, object
// ─────────────────────────────────────────────────────────────

//SOlved
{/*
function wrapInArray<T>(value: T): T[] {
    return [value]
}
const wrapStringArray = wrapInArray<string>(`Kingsley`)
console.log(wrapStringArray)

const wrapNumberArray = wrapInArray<number>(1001); console.log(wrapNumberArray)

const wrapBooleanArray = wrapInArray<boolean>(true); console.log(wrapBooleanArray);

const wrapObjectArray = wrapInArray({name: "Kingsley", id: 1})
console.log(wrapObjectArray)
*/
}


function wrapInArray<T>(value: T): T[] {
    return [value]
}
const wrapString = wrapInArray<string>(`King`);
console.log(wrapString)

const wrapNumberArray = wrapInArray<number>(100)
console.log(wrapNumberArray);

const wrapBoolean = wrapInArray<true>(true);
console.log(wrapBoolean);

const wrapObjectArray = wrapInArray({ name: `Kinsgley`, role: `Founder` })
console.log(wrapObjectArray)

//─────────────────────────────────────────────────────────────
// ⚔️ Challenge 2: The Array Inspector
// Write getFirst<T>(arr: T[]): T
// Write getLast<T>(arr: T[]): T
// Test with string[] and number[]
// ─────────────────────────────────────────────────────────────
function getFirst<T>(arr: T[]): T {
    return arr[0]!
}
function getLast<T>(arr: T[]): T {
    return arr[arr.length - 1]!
}

const bros = ['Ken', 'Sun', 'Aka'];


console.log(getFirst(bros));

const bestNums = [1, 2, 3, 4, 5];
console.log(getFirst(bestNums));

const sis = ['Oluchi', 'Mercy'];

console.log(getLast(sis));

const newNums = [10, 20, 30, 40, 50];
console.log(getLast(newNums));

console.log(getFirst(newNums))

// ─────────────────────────────────────────────────────────────
// ⚔️ Challenge 3: The Key-Value Pair Factory
// Write createPair<K, V>(key: K, value: V): { key: K; value: V }
// Create 4 different pairs with different type combinations
// ─────────────────────────────────────────────────────────────
function createPair<K, V>(key: K, value: V): { key: K, value: V } {
    return { key, value }
}

const fullName = createPair('King', 'Madu');
console.log(fullName);

const userAge = createPair('John', 23);
console.log(userAge);

const user = createPair(1, 'Madu');
console.log(user);



// ─────────────────────────────────────────────────────────────
// ⚔️ Challenge 4: The ApiResponse Factory (NestJS Core)
// 1. Define: interface ApiResponse<T>
// 2. Write: createSuccess<T>(data, message): ApiResponse<T>
// 3. Write: createError(message, code): ApiResponse<null>
// 4. Produce 3 responses: User, string[], and a 404 error
// ─────────────────────────────────────────────────────────────

interface ApiResponse<T> {
    success: boolean,
    data: T,
    message: string,
    statusCode: number
}

function createSuccess<T>(data: T, message: string): ApiResponse<T> {
    return { success: true, statusCode: 200, message: 'User Fetched sucessfully', data }
}
function createError<T>(message: string, code: number): ApiResponse<null> {
    return { success: false, data: null, message, statusCode: code }
}
interface User {
    name: string;
    secondName: string;
}

const userPayload: User = { name: "Kingsley", secondName: "Madu" }



const userResponse = createSuccess(userPayload, "User fetched successfully");
console.log(userResponse)



const errorResponse = createError("Resource not found", 404);
console.log(errorResponse)

const rolePayload: string[] = ["Admin", "Manager", "User"];

const roleResponse = createSuccess(rolePayload, "Roles fetched successfully");
console.log(roleResponse)

const errorRoleResponse = createError("Roles not found", 404);
console.log(errorRoleResponse)


// ─────────────────────────────────────────────────────────────
// ⚔️ Challenge 5: The Transformer (Boss)
// Write: transform<T, U>(arr: T[], fn: (item: T) => U): U[]
// Use it for: string[]→number[], number[]→string[], number[]→boolean[]
// ─────────────────────────────────────────────────────────────


function transform<T, U>(arr: T[], fn: (item: T)
    => U): U[] {
    return arr.map(fn)
}
//  const user: User = [
//     {name: 'King', secondName:'Madu', age: 20, role: 'admin'},
//     {name: 'Danny', age: 17, secondName: 'Eze', role: 'buyer'}
//  ]

//  //Map useer names to uppercae here
//  console.log(uppercaseUser)
//  const wordLengths = transform(
//     ["NestJS", "TypeScript", "JS"],
//     //Raw material
//     (word) => word.length
//  )

// console.log(wordLengths)


// const numberToString = transform(
//     [1, 2, 3],
//     //Raw material
//     (num) => `Item ${num}`
// )
// console.log(numberToString)


// const numberToBoolean = transform(
//     [1, 2, 3],
//     //Raw material
//     (num) => num > 2
// )
// console.log(numberToBoolean)
const wordLengths = transform(
    ['NestJS', 'Typescript', 'JS'],
    (word) => word.length
)
console.log(wordLengths)

const numberToString = transform(
    [1, 2, 3],
    (num) => `Item ${num}`
)
console.log(numberToString)

const numberToBoolean = transform(
    [1, 2, 3],
    (num) => num > 2
)
console.log(numberToBoolean)


const nameLengths = transform(
    ['Chi', 'Emmy', 'Madu'],
    (name) => name.length
)
console.log(nameLengths)

const nameObject = transform(
    ['Chi', 'Emmy', 'Madu'],
    (name) => ({ name: name })
)
console.log(nameObject)

const numberToBoolean2 = transform(
    [1, 2, 3],
    (num) => num > 2
)
console.log(numberToBoolean2)

function evenNumbers(number: number[]): number[] {
    return number.filter(num => num % 2 === 0)
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
const evens = transform(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    (num) => num % 2 === 0
)
console.log(evens)


interface UpgradedUser extends User {
    id: number;
    role: string
}

const newUser: UpgradedUser = {
    name: 'Kingsley', secondName: 'Madu', id: 1, role: 'Admin'
}
//  const uppercaseUser = newUser.name((u) => u.toUppercase)

// ─────────────────────────────────────────────────────────────
// 🏆 BONUS: The Generic Stack Class
// class Stack<T> with: push, pop, peek, size, isEmpty
// Test with Stack<number> and Stack<string>
// ─────────────────────────────────────────────────────────────
class Stack<T> {
    private items: T[] = []

    //Add an item to top

    push(item: T): void {
        this.items.push(item)
    }

    //Remove and return top item

    pop(): T | undefined {
        return this.items.pop()
    }

    //Return top item without removing

    peek(): T | undefined {
        return this.items[this.items.length - 1]
    }

    //Return number of items

    size(): number {
        return this.items.length
    }

    //Check if empty

    isEmpty(): boolean {
        return this.items.length === 0
    }
}

const numberStack = new Stack<number>();

numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

console.log(numberStack.peek());
console.log(numberStack.pop());
console.log(numberStack.size());
console.log(numberStack.isEmpty());

const stringStack = new Stack<string>();

stringStack.push("Hello");
stringStack.push("World");

console.log(stringStack.peek());
console.log(stringStack.pop());
console.log(stringStack.size());
console.log(stringStack.isEmpty());

