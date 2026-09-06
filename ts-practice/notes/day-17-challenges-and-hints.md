# 🏋️ Day 17: Arrays & Tuples — Challenges & Hints

**Date:** April 11, 2026
**Rules:** Type every line manually. No copy-paste. No `any`.

---

## ⚔️ Challenge 1 — The Typed Shopping Cart

**Mission:** Build a product catalogue system using typed arrays.

**Requirements:**
1. Create a `string[]` called `productNames` with 5 product names
2. Create a `number[]` called `productPrices` with 5 matching prices
3. Create a `boolean[]` called `inStock` with 5 stock flags
4. Write a function `getAffordable(prices: number[], budget: number): number[]` that returns only prices the user can afford
5. Use `.map()` to create an `upperCaseNames: string[]` with all names in uppercase
6. Use `.filter()` on `inStock` to count how many products are available

**Expected Output:**
```
Affordable products: [1500, 2000]
ALL PRODUCTS: ["LAPTOP", "PHONE", "TABLET", "MONITOR", "KEYBOARD"]
In-stock count: 3
```

---

> 💡 **Hint 1:** Remember `.filter()` returns a new array of the same type. `prices.filter(p => p <= budget)` returns `number[]`.

> 💡 **Hint 2:** `.map(name => name.toUpperCase())` works because TypeScript knows each `name` is a `string` — so `.toUpperCase()` is available in autocomplete.

> 💡 **Hint 3:** To count items in a filtered array, use `.length` on the result: `inStock.filter(s => s === true).length`

---

## ⚔️ Challenge 2 — The Readonly Permission Board

**Mission:** Model a role-based access system (just like NestJS Guards use).

**Requirements:**
1. Create a `readonly string[]` called `ADMIN_PERMISSIONS` with at least 4 permissions (e.g. `"read"`, `"write"`, `"delete"`, `"manage_users"`)
2. Create a `readonly string[]` called `EDITOR_PERMISSIONS` with 2 permissions
3. Write a function `canPerform(role: string, action: string, permissions: readonly string[]): boolean` that returns `true` if the action is in the permissions list
4. Call `canPerform` for at least 3 different scenarios and `console.log` the results

**Expected Output:**
```
Can admin delete? true
Can editor delete? false
Can admin manage_users? true
```

---

> 💡 **Hint 1:** Use `.includes()` — `permissions.includes(action)` returns a `boolean`.

> 💡 **Hint 2:** Accept `readonly string[]` in your function parameter, not just `string[]`. This makes your function compatible with immutable arrays.

> 💡 **Hint 3:** TypeScript will stop you from accidentally calling `.push()` on a `readonly string[]` — that protection is the entire point.

---

## ⚔️ Challenge 3 — The Leaderboard Tuple

**Mission:** Model a game leaderboard using Tuples.

**Requirements:**
1. Define a `type` alias: `LeaderboardEntry = [rank: number, playerName: string, score: number]`
2. Create an array of at least 3 entries using this type: `LeaderboardEntry[]`
3. Write a function `printLeaderboard(entries: LeaderboardEntry[]): void` that loops through each entry and logs:
   `#1 — Kingsley: 9500 pts`
4. Write a function `getTopPlayer(entries: LeaderboardEntry[]): string` that returns only the name of the rank-1 player
5. Destructure the first entry into three named variables: `rank`, `playerName`, `score`

**Expected Output:**
```
#1 — Kingsley: 9500 pts
#2 — Alice: 8800 pts
#3 — Bob: 7200 pts
Top Player: Kingsley
```

---

> 💡 **Hint 1:** To loop with index: `entries.forEach(([rank, name, score]) => { ... })` — you can destructure inside the forEach callback.

> 💡 **Hint 2:** To find the rank-1 player: `entries.find(([rank]) => rank === 1)` — destructure just the first position you need.

> 💡 **Hint 3:** Once you find the entry, you still get a `LeaderboardEntry | undefined` back. Handle the `undefined` case with a fallback: `?? "Unknown"`.

---

## ⚔️ Challenge 4 — The CSV Parser (Tuple Power)

**Mission:** Parse a "database" of users stored as raw CSV rows and extract structured data.

**Requirements:**
1. Define a type: `UserRow = [id: number, name: string, email: string, age: number, isActive: boolean]`
2. Create a `UserRow[]` with 4 users
3. Write a function `getActiveUsers(rows: UserRow[]): UserRow[]` that returns only active users
4. Write a function `getUserEmails(rows: UserRow[]): string[]` that extracts just the email from each row
5. Write a function `getAverageAge(rows: UserRow[]): number` that calculates the average age across all rows

**Expected Output:**
```
Active Users: 3
Emails: ["king@dev.com", "alice@dev.com", "bob@dev.com", "carol@dev.com"]
Average Age: 27.5
```

---

> 💡 **Hint 1:** In `getActiveUsers`, use `.filter(([,,,, isActive]) => isActive)`. The commas skip positions you don't need when destructuring a tuple.

> 💡 **Hint 2:** In `getUserEmails`, use `.map(([,, email]) => email)` — skip `id` and `name`, grab `email`.

> 💡 **Hint 3:** For `getAverageAge`, use `.reduce((sum, [,,, age]) => sum + age, 0)` then divide by `rows.length`.

---

## ⚔️ Challenge 5 — The Matrix (Boss Challenge)

**Mission:** Work with a 2D number grid and write utility functions over it.

**Requirements:**
1. Create a `number[][]` matrix (3×3 grid) with values 1–9
2. Write a function `getRow(matrix: number[][], rowIndex: number): number[]` that returns a specific row
3. Write a function `getColumn(matrix: number[][], colIndex: number): number[]` that returns a specific column
4. Write a function `flattenMatrix(matrix: number[][]): number[]` that returns all values in a single flat array
5. Use `.flat()` on the matrix — observe what type TypeScript infers from it

**Expected Output:**
```
Row 1: [4, 5, 6]
Column 2: [3, 6, 9]
Flat: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

---

> 💡 **Hint 1:** `getRow` is just `return matrix[rowIndex]` — simple index access.

> 💡 **Hint 2:** `getColumn` uses `.map()`: `matrix.map(row => row[colIndex])`. Each row is a `number[]`, so `row[colIndex]` is a `number`.

> 💡 **Hint 3:** `flattenMatrix` uses `.flat()`: `matrix.flat()` or you can `.reduce((acc, row) => [...acc, ...row], [] as number[])`.

---

## 🏆 Bonus — The Return Type Enforcer

Write a function called `divideArray<T>(arr: T[], halfSize: number): [T[], T[]]`.

- It takes any typed array `T[]` and a split point
- Returns a **tuple of two arrays** — the first half and the second half
- Test it with both `string[]` and `number[]`

> 💡 **Hint:** Use `arr.slice(0, halfSize)` for the first part and `arr.slice(halfSize)` for the second.
> The return type `[T[], T[]]` is a Tuple where both positions are arrays of the same generic type!

---

## ✅ Challenge Completion Tracker

| Challenge | Description | Done? |
|-----------|-------------|-------|
| 1 | Typed Shopping Cart | [ ] |
| 2 | Readonly Permission Board | [ ] |
| 3 | Leaderboard Tuple | [ ] |
| 4 | CSV Parser | [ ] |
| 5 | Matrix (Boss) | [ ] |
| Bonus | Generic Tuple Return | [ ] |
