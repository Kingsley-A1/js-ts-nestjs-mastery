function greetUser(Username) {
    console.log(`Hello, ${Username}.`);
}
greetUser('King');
function registerUser(user) {
    console.log(`${user.name}'s age is ${user.age}, and if she is an admin is ${user.isAdmin} and the phone number is ${user.phone} and she is ${user.status}`);
}
registerUser({
    name: 'Kingsley', age: 23, isAdmin: true, phone: '09036826272', status: 'active'
});
registerUser({ name: 'Alice', age: 24, isAdmin: false, status: 'inactive' });
//Usage
const myUserRes = {
    status: 'success',
    data: {
        name: 'King', age: 24, isAdmin: true,
        status: "active"
    }
};
const myStringRes = {
    status: 'success',
    data: 'Profile updated sucessfully'
};
console.log(myStringRes);
console.log(myUserRes);
export const activeGameCache = {
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
//# sourceMappingURL=index.js.map