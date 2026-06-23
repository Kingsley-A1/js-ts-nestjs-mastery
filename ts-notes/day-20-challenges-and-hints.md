# 🏋️ Day 20: Union & Literal Types — Challenges & Hints

**Date:** May 02, 2026
**Rules:** Type every line manually. No copy-paste. No `any`.

---

## ⚔️ Challenge 1 — The Status Type

**Mission:** Build strict status types for an e-commerce platform.

**Requirements:**
1. Define a type `PaymentStatus` that can only be `"pending"`, `"completed"`, or `"failed"`.
2. Define an interface `Payment` that has:
   - `transactionId: string | number`
   - `amount: number`
   - `status: PaymentStatus`
3. Create a valid `Payment` object and log it.

---

## ⚔️ Challenge 2 — The Shape Shifter (Type Narrowing)

**Mission:** Write a function that handles multiple types safely without crashing.

**Requirements:**
1. Write a function `processInput(input: string | number | boolean)`
2. If `input` is a `string`, return the string in uppercase.
3. If `input` is a `number`, return the number multiplied by 10.
4. If `input` is a `boolean`, return the opposite boolean (e.g., `true` becomes `false`).
5. Call the function with one of each type and log the results.

> 💡 **Hint 1:** Use `typeof input === "string"` etc.

---

## ⚔️ Challenge 3 — Discriminated Unions

**Mission:** Create a safe API response handler.

**Requirements:**
1. Define `type FetchSuccess = { state: "success"; payload: string; }`
2. Define `type FetchError = { state: "error"; message: string; code: number; }`
3. Define `type FetchResult = FetchSuccess | FetchError`
4. Write a function `handleFetch(result: FetchResult)`
5. Inside the function, use an `if` statement to check `result.state`. Log the `payload` if success, or the `message` and `code` if error.
6. Call the function twice, once with a success object and once with an error object.

> 💡 **Hint 1:** Notice how TypeScript auto-completes `result.payload` only when inside the `if (result.state === "success")` block!

---

## ⚔️ Challenge 4 — Configuration Literal

**Mission:** Protect a system configuration from invalid strings.

**Requirements:**
1. Define `type Theme = "light" | "dark" | "system"`
2. Define `type LogLevel = "info" | "warn" | "error" | "debug"`
3. Create an interface `AppConfig` with those two properties.
4. Attempt to create a config object with `theme: "blue"`. Observe the error, then fix it.

---

## ✅ Challenge Completion Tracker

| Challenge | Description | Done? |
|-----------|-------------|-------|
| 1 | The Status Type | [x] |
| 2 | The Shape Shifter (Narrowing) | [x] |
| 3 | Discriminated Unions | [x] |
| 4 | Configuration Literal | [x] |
