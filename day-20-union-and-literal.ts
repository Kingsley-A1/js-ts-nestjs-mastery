// ============================================================
// 📘 DAY 20: Union & Literal Types — Practice File
// TypeScript & NestJS Mastery Plan | Kingsley
// ============================================================

// ─────────────────────────────────────────────────────────────
// SECTION 1: Union Types (`|`)
// ─────────────────────────────────────────────────────────────

// A variable that can be multiple types
let currentId: string | number;

currentId = 101; // Valid
console.log("ID as number:", currentId);

currentId = "USER-101"; // Also valid
console.log("ID as string:", currentId);

// ─────────────────────────────────────────────────────────────
// SECTION 2: Type Narrowing (Type Guards)
// ─────────────────────────────────────────────────────────────

// Because `id` can be string OR number, we must check what it is before using it
function printIdInfo(id: string | number) {
    if (typeof id === "string") {
        // TypeScript narrows `id` to string here
        console.log(`String ID length is: ${id.length}`);
    } else {
        // TypeScript narrows `id` to number here
        console.log(`Number ID fixed to 2 decimals: ${id.toFixed(2)}`);
    }
}

printIdInfo("A-4432");
printIdInfo(998.5);

// ─────────────────────────────────────────────────────────────
// SECTION 3: Literal Types & Combining with Unions
// ─────────────────────────────────────────────────────────────

// Literal type means it must be EXACTLY this value
let exactDirection: "left";
exactDirection = "left";
// exactDirection = "right"; // Error!

// Power combo: Specific allowed strings (like Enums, but lighter)
type Environment = "development" | "staging" | "production";

let currentEnv: Environment = "development"; // Valid

function setEnv(env: Environment) {
    console.log(`Server running in ${env} mode.`);
}

setEnv("production");
// setEnv("test"); // Error: Argument of type '"test"' is not assignable.

// ─────────────────────────────────────────────────────────────
// SECTION 4: Discriminated Unions (Extremely Powerful)
// ─────────────────────────────────────────────────────────────

// When we have different shapes of objects, we can give them a shared literal type property

type TextMessage = {
    type: "text"; // Literal discriminator
    content: string;
};

type ImageMessage = {
    type: "image"; // Literal discriminator
    url: string;
    fileSize: number;
};

type ChatMessage = TextMessage | ImageMessage;

function displayMessage(msg: ChatMessage) {
    // We check the shared property 'type'
    if (msg.type === "text") {
        // TypeScript knows this is a TextMessage!
        console.log(`[Text] ${msg.content}`);
        // console.log(msg.url) // Error! url doesn't exist on TextMessage
    } else {
        // TypeScript knows this is an ImageMessage!
        console.log(`[Image] URL: ${msg.url} (${msg.fileSize}KB)`);
    }
}

const myTextMsg: TextMessage = { type: "text", content: "Hello NestJS!" };
const myImageMsg: ImageMessage = { type: "image", url: "https://site.com/pic.jpg", fileSize: 400 };

displayMessage(myTextMsg);
displayMessage(myImageMsg);
