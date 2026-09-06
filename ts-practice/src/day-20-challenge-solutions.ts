// ============================================================
// 🏋️ DAY 20: Union & Literal Types — Challenge Solutions
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================

// ⚔️ Challenge 1 — The Status Type
// Define PaymentStatus, Payment interface, and create a valid object.
type PaymentStatus = "pending" | "completed" | "failed";

interface Payment {
    transactionId: string | number
    amount: number;
    status: PaymentStatus
}

const payment: Payment = {
    transactionId: "123456",
    amount: 100,
    status: "pending"
}
console.log(payment);


// ⚔️ Challenge 2 — The Shape Shifter (Type Narrowing)
// Write processInput(input: string | number | boolean).

function processInput(input: string | number | boolean) {
    if (typeof input === 'string') {
        return input.toUpperCase()
    } else if (typeof input === 'number') {
        return input * 10
    } else {
        return !input
    }
}

console.log(processInput('hello'));
console.log(processInput(10));
console.log(processInput(true));


// ⚔️ Challenge 3 — Discriminated Unions
// Create FetchSuccess, FetchError, FetchResult, and handleFetch function.


type FetchSuccess = {
    state: "sucess",
    payload: string
}
type FetchError = {
    state: "error",
    message: string,
    code: number
}
type FetchResult = FetchSuccess | FetchError

function handleFetch(result: FetchResult) {
    if (result.state === 'sucess') {
        console.log(result.payload)
    } else {
        console.log(result.message, result.code)
    }
}
// ⚔️ Challenge 4 — Configuration Literal
// Define Theme, LogLevel, AppConfig, and create a config object.

type Theme = "light" | "dark" | "system"
type LogLevel = "info" | "warn" | "error" | "debug"

interface AppConfig {
    theme: Theme
    logLevel: LogLevel
}

const config: AppConfig = {
    theme: "dark",
    logLevel: "error"
}
console.log(config)