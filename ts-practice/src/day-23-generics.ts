function identity<T>(value: T): T | undefined {
    return value}

const userName = identity('Kingsley');
const phoneNumber = identity(234903637383);
const isActive = identity(true)
if(isActive === true){
    console.log("User is active")
}else{
    console.log("User is not active")
}
console.log(`The user name is ${userName}, and phone number is ${phoneNumber}`)
console.log(isActive)



function getFirst<T>(item: T[]):T | undefined{
    return item[0]
}
{/*
Explain this: getFirst<T>(item: T[]):T | undefined, the relationship between the <T> and the ):T | undefined

In the function signature `getFirst<T>(item: T[]): T | undefined`, the `<T>` is a generic type parameter that allows the function to be flexible and work with any type of array. Here's how it works:
1. `<T>`: This declares a generic type parameter named `T`. It acts as a placeholder for the type that will be specified when the function is called. For example, if you call `getFirst<string>(["a", "b", "c"])`, then `T` will be replaced with `string`.
2. `item: T[]`: This means that the function expects an argument named `item` which is an array of type `T`. So if `T` is `string`, then `item` would be of type `string[]`.
3. `: T | undefined`: This is the return type of the function. It indicates that the function will return either a value of type `T` (the first element of the array) or `undefined` if the array is empty. So if `T` is `string`, the function will return a `string` or `undefined`.    
*/}
const getFirstString = getFirst(["King", "Alice", "Bob"])
const getFirstNumber = getFirst([1, 2, 3, 4])

console.log("First string:", getFirstString?.toUpperCase());
console.log("First number:", getFirstNumber);


//Exeercise 3
type ApiResponse<T> = {
    sucess: boolean;
    message: string;
    data: T;
    
}
type Product<T> = {
    id: number;
    name: string;
    price: number;
    specs: T;
}

function createResponse<T>(message: string, data: T): ApiResponse<T>{
    return {
        sucess: true,
        message,
        data
    }
}

const product : Product<{ storage: number; colour: string }> = {
    id: 1,
    name: "iPhone 15 Pro",
    price: 1500000,
    specs: { storage: 128, colour: 'Orange' }
}

const response = createResponse("Product fetched successfully", product);

console.log("API Response:", response);

//Day 23 Assigments
function getLast<T>(item: T[]): T | undefined {
    return item[item.length - 1];
}

const getLastString = getLast(["King", "Alice", "Bob"])
const getLastNumber = getLast([1, 2, 3, 4])

function makePair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}
const pair = makePair("Hello", "World");
console.log(pair)

function wrapApiResponse<T>(data: T): ApiResponse<T> {
    return{
        sucess: true,
        message: "Data wrapped successfully",
        data
    }
}

//Using the 3 functions
const getLastStringResult = getLast(["King", "Alice", "Bob"]);
const getLastNumberResult = getLast([1, 2, 3, 4]);
const pairResult = makePair("Hello", "World");
const apiResponseResult = wrapApiResponse({ id: 1, name: "iPhone 15 Pro" });

{/*
Grilling Questions



What problem do generics solve?
Generics solves the problem of duplicating types by creating a type placeholder that can take any type and can be reused without loosing typechecking
Why is any weaker than a generic? `Any` turns off typechecking entirely.

In function identity<T>(value: T): T, what does T represent? T here is a type placeholder. It can be anytype from string, to number, null, etc
Why is ApiResponse<T> better than creating UserResponse, ProductResponse, and OrderResponse separately? It makes the code DRY and there is easier maintanance. 
What is the difference between T[] and Array<T>? T[] is any array waiting to be used for any type of data,  and Array<T> is also a type placeholder ofarrat
What does Promise<User> mean? It says that the Promise will eventaully resolve to User, but i dont understand this well. 
When should you avoid using generics?    When it is not resuable(Dont appear more than twice), please sharpen this
*/}

type User ={
    id: number;
    name: string;
    email: string;
}

//Without promise: return immediately
function getUser(): User{ return { id: 1, name: "Kingsley", email: "kingsley@example.com" }}

//With promise: wait till it is returned
async function getUserAsync(): Promise<User>{ return new Promise(resolve => {
    setTimeout(() => {
        resolve({ id: 1, name: "Kingsley", email: "kingsley@example.com" });
    }, 1000);
})}

const user = await getUserAsync();
console.log("User fetched asynchronously:", user);