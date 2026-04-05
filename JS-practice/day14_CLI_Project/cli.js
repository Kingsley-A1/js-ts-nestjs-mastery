#!/usr/bin/env node //The Shebang, telling the terminal that the enviroment is a Node Enviroment
import fs from 'fs';
//This prints the raw array of words coming from terminal
// console.log(process.argv);

const args = process.argv.slice(2);
const author = 'Kingsley Maduabuchi';
// console.log(args);
const command = args[0];
const target = args[1];

const validCommands = ['generate', 'help'];

function getSuggestion(unknown) {
  //Find a valid command that shares the first 3 letters with the typo
  return validCommands.find((cmd) => cmd.startsWith(unknown.slice(0, 3)));
}

if (command === 'generate') {
  if (!target) {
    console.log(
      `❌ Error:  Please provide a target name (e.g node cli.js generate service)`,
    );
    process.exit(1);
  }
  console.log(`⚙️ Generating a new ${target} file...`);
  //fs.WriteFileSync('Name of file.js or any extension', 'Content of file') is used to write a file
  fs.writeFileSync(
    `${target}.js`,
    `// Hello World! This a ${target} file created by the CLI built by ${author}`,
  );
  console.log(`✅ ${target} file created successfully, Happy Coding!`);
} else if (command === 'help') {
  console.log(`📖 Available commands: generate <item>, help`);
} else {
  const suggestion = getSuggestion(command);
  console.log(`❌ Unknown command: ${command}\n`);
  if (suggestion) {
    console.log(`Did you mean ${suggestion}?`);
  }
}
