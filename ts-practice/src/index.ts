import type { MemoryCache } from "./day-18-objects-and-type-alias.js";

function greetUser(Username: string) {
    console.log(`Hello, ${Username}.`);
}
greetUser('King')

interface User {
    name: string,
    age: number,
    isAdmin: boolean,
    phone?: string,
    status: 'active' | 'inactive' | 'suspended',
}

function registerUser(user: User) {
    console.log(`${user.name}'s age is ${user.age}, and if she is an admin is ${user.isAdmin} and the phone number is ${user.phone} and she is ${user.status}`)
}
registerUser({
    name: 'Kingsley', age: 23, isAdmin: true, phone: '09036826272', status: 'active'
})
registerUser({ name: 'Alice', age: 24, isAdmin: false, status: 'inactive' })



//Generics are  variables for our Interface which is the Blueprint


//This voilates the DRY principle
interface UserResponse {
    status: 'success';
    data: User;
}

interface productResponse {
    status: 'success';
    data: productResponse;
}

//The solution: T, the Generic <T>
interface ApiRes<T> {
    status: 'success' | 'error';
    data: T;
}

//Usage
const myUserRes: ApiRes<User> = {
    status: 'success',
    data: {
        name: 'King', age: 24, isAdmin: true,
        status: "active"
    }

};

const myStringRes: ApiRes<string> = {
    status: 'success',
    data: 'Profile updated sucessfully'
}
console.log(myStringRes);
console.log(myUserRes);
export const activeGameCache: MemoryCache = {
    cacheId: 1,
    playerName: "King",
    isPaused: false,
    firstScore: 1000,
    secondScore: 2000,
    thirdScore: 3000,
    finalScore: 6000,
    level: 3,
    difficulty: "hard",
    gameMode: "multiplayer",
    isAdvancedMode: true,
    playerBadge: "Elite",
};
