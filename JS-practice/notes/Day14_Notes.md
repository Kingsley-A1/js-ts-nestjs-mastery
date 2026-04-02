// Hello World! This a Day14_Notes.md file created by the CLI built by Kingsley Maduabuchi

📚 Day 14: Mini CLI Project — Complete Notes

Date: February 11, 2026

Topic: Building a Production-Grade Modular CLI Tool (Hacker News Fetcher)

🎯 The Big Picture: CLI vs. API & Modular Architecture

To build real backend systems, you must understand the difference between how humans interact with code and how machines interact with code.

CLI (Command Line Interface): A human types text into a terminal, and the program prints text back. (e.g., npm start, git commit).

API (Application Programming Interface): A machine sends structured data (JSON) to a server, and the server sends data back.

Today's Architecture: We are building a CLI that consumes an API.

┌─────────────────────────────────────────────────────────────────────┐
│ THE MODULAR DATA FLOW │
├─────────────────────────────────────────────────────────────────────┤
│ │
│ 1. app.js (The Brain) → Reads terminal, orchestrates flow │
│ 2. api.js (The Fetcher) → Talks to the outside world (API) │
│ 3. formatter.js (The Stylist)→ Makes the JSON look beautiful │
│ │
└─────────────────────────────────────────────────────────────────────┘

🏗️ 1. The Core Modules (ES6 Setup)

Always remember: To use import/export in Node.js, your package.json must include "type": "module".

The Front Door: The "Shebang"

Every CLI tool file must start with this exact line to tell the terminal to use Node.js:

#!/usr/bin/env node

Module 1: api.js (External Communication)

This module's ONLY job is to fetch raw JSON data.

export async function fetchTopStories(count) {
const response = await fetch('[https://hacker-news.firebaseio.com/v0/topstories.json](https://hacker-news.firebaseio.com/v0/topstories.json)');
const ids = await response.json();
return ids.slice(0, count); // Only grab what the user asked for
}

export async function fetchStoryDetails(id) {
const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
return await response.json();
}

Module 2: formatter.js (UI/UX Logic)

This module formats the ugly JSON into a clean string using Template Literals.

export function formatStory(story, index) {
// Using basic ANSI escape codes for colors
const title = `\x1b[1m${story.title}\x1b[0m`; // Bold
const score = `\x1b[33m[${story.score} points]\x1b[0m`; // Yellow

return `${index + 1}. ${title} ${score}\n   🔗 ${story.url}\n`;
}

Module 3: app.js (The Orchestrator)

This pulls it all together. It routes the user's command and calls the other modules.

#!/usr/bin/env node
import { fetchTopStories, fetchStoryDetails } from './api.js';
import { formatStory } from './formatter.js';

// 1. Capture user input: `node app.js 5`
const args = process.argv.slice(2);
const count = args[0];

// 2. The Guard Clause 🛡️
if (!count || isNaN(count)) {
console.log('❌ Error: Please provide a valid number (e.g., node app.js 5)');
process.exit(1);
}

console.log(`\n⚙️ Fetching top ${count} stories from Hacker News...\n`);

// ... Execution logic goes here

🧠 Triage: Core vs. Good-to-Know

Classification

Concept

Why it matters

The Core

process.argv

The bridge between the terminal and JavaScript. The foundation of every CLI tool.

The Core

Guard Clauses

Validating user input and using process.exit(1) or return early to prevent catastrophic failures.

Good-to-Know

fs.writeFileSync()

Interacting with the hard drive. NestJS uses this heavily for code generation.

Reserve for Later

Fuzzy Matching

Advanced Developer Experience (DX) like calculating Levenshtein Distance for "Did you mean X?". Libraries handle this for us later.

🔗 The NestJS Connection

Why did we build this? Because next week, you will be using the NestJS CLI (nest generate service users).

When you type that, NestJS is doing exactly what you built today:

Reading process.argv[2] ("generate").

Passing the target (process.argv[3]) to a module.

Using fs.writeFileSync() to generate a boilerplate class with your target name.

Using an internal dictionary to catch typos and suggest corrections.

You are no longer blind to the magic.

✅ Day 14 Checklist

[x] Understand package.json as a Manifest, not an entry point.

[x] Enable ES6 Modules with "type": "module".

[x] Use process.argv.slice(2) to extract arguments.

[x] Build a routing engine (if/else) for CLI commands.

[x] Implement a Route-Specific Guard Clause to protect state.

[x] Construct a DX suggestion engine for invalid commands.

[x] Extract logic into api.js and formatter.js (Modularization).

Next Up: Phase 2 — TypeScript Deep Dive! 🚀
