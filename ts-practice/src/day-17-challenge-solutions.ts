// 1. Create a `string[]` called `productNames` with 5 product names
const productNames: String[] = ['Samsung', 'Macbook', 'Apple', 'Infinix', 'Dell'];

// 2. Create a `number[]` called `productPrices` with 5 matching prices
const productPrices: Number[] = [2000, 1500, 2000, 1000, 3000];

// 3. Create a `boolean[]` called `inStock` with 5 stock flags
const inStock: Boolean[] = [true, true, false, false, true];

// 4. Write a function `getAffordable(prices: number[], budget: number): number[]` that returns only prices the user can afford
function getAffordable(prices: Number[], budget: Number): Number[] {
  return prices.filter(price => price <= budget);
}


//5. Use `.map()` to create an `upperCaseNames: string[]` with all names in uppercase
const upperCaseNames = productNames.map((name) => name.toUpperCase());
console.log(`upperCaseNames: ${upperCaseNames}`);

//6. Use `.filter()` on `inStock` to count how many products are available
const inStockCount = inStock.filter((stock) => stock === true).length;
console.log(`inStockCount: ${inStockCount}`);

//4.1console.log(getAffordable(productPrices, 2000));
console.log(`Affordable products: ${getAffordable(productPrices, 2000)}`);

console.log(`All products names: ${upperCaseNames}`);
console.log(`In-stock count: ${inStockCount}`); 


//2. Create a `readonly string[]` called `ADMIN_PERMISSIONS` with at least 4 permissions (e.g. "read", "write", "delete", "manage_users")
const ADMIN_PERMISSIONS: readonly string[] = ["read", "write", "delete", "manage_users"];

//3. Create a `readonly string[]` called `EDITOR_PERMISSIONS` with 2 permissions
const EDITOR_PERMISSIONS: readonly string[] = ["read", "write"];

//4. Write a function `canPerform(role: string, action: string, permissions: readonly string[]): boolean` that returns `true` if the action is in the permissions list
function canPerform(role: string, action: string, permissions: readonly string[]): boolean {
    return permissions.includes(action);
}

//5. Call `canPerform` for at least 3 different scenarios and `console.log` the results
console.log(`Can admin delete? ${canPerform("admin", "delete", ADMIN_PERMISSIONS)}`);
console.log(`Can editor delete? ${canPerform("editor", "delete", EDITOR_PERMISSIONS)}`);
console.log(`Can admin manage_users? ${canPerform("admin", "manage_users", ADMIN_PERMISSIONS)}`);

//3. Create a `type` alias: `LeaderboardEntry = [rank: number, playerName: string, score: number]`
type LeaderboardEntry = [rank: number, playerName: string, score: number];

//4. Create an array of at least 3 entries using this type: `LeaderboardEntry[]`
const leaderboard: LeaderboardEntry[] = [
    [1, "Kingsley", 9500],
    [2, "Alice", 8800],
    [3, "Bob", 7200]
];

//5. Write a function `printLeaderboard(entries: LeaderboardEntry[]): void` that loops through each entry and logs:
// `#1 — Kingsley: 9500 pts`
function printLeaderboard(entries: LeaderboardEntry[]): void {
    entries.forEach(([rank, playerName, score]) => {
        console.log(`#${rank} — ${playerName}: ${score} pts`);
    });
}

function printLeaderboard2(entries: LeaderboardEntry[]):void{
    entries.forEach(([rank, playerName, score]) =>{
        console.log(`#${rank} -- ${playerName}: ${score} pts`)
    });
}
console.log(printLeaderboard2(leaderboard));
//6. Write a function `getTopPlayer(entries: LeaderboardEntry[]): string` that returns only the name of the rank-1 player




function getTopPlayer2(entries: LeaderboardEntry[]): string  {
    const topPlayer2 = entries.find(([rank]) => rank === 1);
    return topPlayer2 ? topPlayer2[1]: "";

}
console.log(`Top Players: ${getTopPlayer2(leaderboard)}`)

function getTopPlayer(entries: LeaderboardEntry[]): string {
    const topPlayer = entries.find(([rank]) => rank === 1);
    return topPlayer ? topPlayer[1] : "";
}

//7. Destructure the first entry into three named variables: `rank`, `playerName`, `score`
const [rank, playerName, score] = leaderboard[0]!; // `!` asserts the element exists (non-null assertion)

// Call the functions and log the results
printLeaderboard(leaderboard);
console.log(`Top Player: ${getTopPlayer(leaderboard)}`);

//⚔️ Challenge 4 — The CSV Parser (Tuple Power)

//1. Define a type: `UserRow = [id: number, name: string, email: string, age: number, isActive: boolean]`
type UserRow = [id: number, name: string, email: string, age: number, isActive: boolean];

//2. Create a `UserRow[]` with 4 users
const users: UserRow[] = [
    [1, 'Kingsley', 'king@nestjsmatery.dev', 25, true],
    [1, 'Kelvin', 'kelvin@nestjsmatery.dev', 24, false],
    [1, 'Fave', 'fave@nestjsmatery.dev', 20, true],

]


//3. Write a function `getActiveUsers(rows: UserRow[]): UserRow[]` that returns only active users
function getActiveUsers(rows: UserRow[]): UserRow[]{
    const activeUsers = rows.filter(([_id, _name, _email,  _age, isActive]) => isActive === true);
    return activeUsers
}
console.log(`Active users are ${getActiveUsers}`)

//4. Write a function `getUserEmails(rows: UserRow[]): string[]` that extracts just the email from each row
function getUserEmails(rows: UserRow[]): string[] {
    const userEmails = rows.map(([_id, _name, email, ]) => email);
    return userEmails
}
console.log(`Users emails are ${getUserEmails(users)}`)

interface UserInterface{
    id: number,
    name: string,
    email: string;
    age: number;
    isActive: boolean
}
const userArrays: UserInterface[]=[
    {id: 1, name: 'Kingsley', age: 25, email: 'king@nestmastery.dev', isActive: true},
    {id: 1, name: 'Kimmy', age: 20, email: 'kimmy@nestmastery.dev', isActive: true},
    {id: 1, name: 'Falz', age: 22, email: 'falz@nestmastery.dev', isActive: true},
    {id: 1, name: 'Latif', age: 24, email: 'latif@nestmastery.dev', isActive: true},
    

    
]

//Making API with the userArrays

//Using Object Destructuring
function getUserEmails2(rows: UserInterface[]): string[] {
    const userEmails = rows.map(({ email }) => email);
    return userEmails
}
console.log(`Users emails are as follows: ${getUserEmails2(userArrays)}`)
//Uisg the Pick Utility Type
type CreatUserPayload = Pick<UserInterface, 'id'| 'name' | 'email'>

type SignUpPayload = Pick<UserInterface, 'name' |'email' | 'age'>

const newUser: SignUpPayload[] = [
    {name: 'King', email: 'king@gmail.dev', age: 25}
]


//Using the Partial Utility types
//5. Write a function `getAverageAge(rows: UserRow[]): number` that calculates the average age across all rows
function getAverageAge(rows: UserRow[]): number{
    const averageAge = rows.reduce((sum, [_id, _name, _email, age]) => sum + age, 0);
    return averageAge/rows.length
}

console.log(`Average age is ${getAverageAge(users)}`)

//Array Destructuring
const singleRow : UserRow = [1, 'Kingsley', 'king@dev', 25, true];
const [id, name, email, age, isActive] = singleRow

// const activeUsers = rows.filter(([id, name, email, age, isActive]) => isActive === true)

//Notes
//Use the array detsructring to unpack the ARRAY And avoid Fragile Pattern
//Use underscore infront of a variable like this id_ to resolve a defined but never read issue in arrage destructuring

//During array destructuring, unpack only to the needed variable but not any variable after it. 

//Partial<DataTypeObject> is used to make evenry varialbe in an interface to be optional
//Pick<DataTypeObject, 'varName1',| 'varName2'| 'varName3'|> is used to pcik only the neded variables from an interface.



/*## ⚔️ Challenge 5 — The Matrix (Boss Challenge)

**Mission:** Work with a 2D number grid and write utility functions over it.

**Requirements:**

2. Write a function `getRow(matrix: number[][], rowIndex: number): number[]` that returns a specific row


5. Use `.flat()` on the matrix — observe what type TypeScript infers from it

**Expected Output:**
```
Row 1: [4, 5, 6]
Column 2: [3, 6, 9]
Flat: [1, 2, 3, 4, 5, 6, 7, 8, 9]

*/ 
//1. Create a `number[][]` matrix (3×3 grid) with values 1–9
const grid: number[][] =[
    [1, 2, 3], //index 0
    [4, 5, 6], //INdex 1
    [7, 8, 9] //Index 2
]
//2. Write a function `getRow(matrix: number[][], rowIndex: number): number[]` that returns a specific row -- Getting Direct Row Acess
function getRow({ matrix, rowIndex }: { matrix: number[][]; rowIndex: number; }): number[] | undefined{
    return matrix[rowIndex]
}

 interface GetRowArgs{
    matrix: number[][],
    rowIndex: number
 }

function getRow2({matrix, rowIndex}: GetRowArgs): number[]| undefined{
return matrix[rowIndex]
}
//3. Write a function `getColumn(matrix: number[][], colIndex: number): number[]` that returns a specific column
 function getColumn(matrix:number[][], colIndex: number): number[]| undefined {
 return matrix[colIndex]
 }

 //4. Write a function `flattenMatrix(matrix: number[][]): number[]` that returns all values in a single flat array
 function flattenMatrix(matrix: number[][]): number[] | undefined{
    return matrix.flat()
 }

 console.log(`Row 1: [${getRow({rowIndex: 1, matrix:grid})}]`);
console.log(`Row 2: [${getRow2({rowIndex: 2, matrix:grid })}]`)
 console.log(`Column 2: [${getColumn(grid, 2)}]`);
 console.log(`Flat: [${flattenMatrix(grid)}]`) 


