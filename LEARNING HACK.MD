⚡ The Commando Protocol: High-Velocity Learning

Objective: Maximum understanding in minimum time.
Rule: Don't memorize syntax; memorize patterns.

Hack 1: Comment-Driven Development (CDD) 📝

The Problem: You are trying to memorize this.users.find((user) => user.id === id).
The Hack: Write the logic in English first.

Delete the code inside the function.

Write the steps in comments:

findOne(id: number) {
    // Step 1: Look at my list of users.
    // Step 2: Find the one where the badge number matches the ID I was given.
    // Step 3: Return that person.
}


Translate. Now, write the code under the comments.

If you can write the English, you understand the logic.

If you forget the syntax (is it .find or .search?), looking it up is NOT cheating. That's just syntax.

Why this works: It separates "Logic" (Architecture) from "Syntax" (Typing). Logic is what matters.

Hack 2: The "80/20 Boilerplate" Rule 🏗️

The Reality: 80% of NestJS code is "Boilerplate" (Setup code that never changes).

import { Controller }...

@Injectable()

constructor(private readonly...)

The Hack:

IGNORE the 80%. Do not try to write imports from memory. Use VS Code Auto-Import.

FOCUS on the 20%. The 20% is what happens inside the curly braces { ... }.

Test: If you can't remember how to import Controller, who cares? But if you can't remember why we inject the Service, that's a problem.

Hack 3: The "Eraser Test" (Spaced Repetition) 🧠

The Problem: Staring at code for 3 days doesn't make it stick.
The Hack:

Day 1: Write the code. Understand it. Move on (even if you feel shaky).

Day 2 (Morning): Open the file. Delete everything.

The Sprint: Try to rewrite it.

If you get stuck, peek for 2 seconds, then close the peek.

If you finish, great. Move to the next lesson.

Why this works: Your brain remembers better when it struggles to retrieve information after a break, rather than staring at it continuously.

Hack 4: The "Teaching" Hack (Rubber Ducking) 🦆

Before you move to the next lesson, look at your code and say out loud (literally):

"This line calls the Chef."

"This line checks the ID."

"This line sends the food back."

If you stumble on a sentence, that is the only line you need to study.