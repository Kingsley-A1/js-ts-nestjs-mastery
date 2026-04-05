#!/usr/bin/env node
//console.log(process.argv);

import fs from 'fs';
const args = process.argv.slice(2);
const cmd = args[0];
const target = args[1];
const author = 'Kingsley';
const validCommands = ['g', 'help'];
function getSuggestion(unknown) {
  return validCommands.find((cmd) => cmd.startsWith(unknown.slice(0, 3)));
}
if (cmd === 'g') {
  if (!target) {
    console.log(
      'Error: Please Provide a target name e.g node cli2.js g service',
    );
    process.exit(1);
  }

  console.log(`Generating a new ${target} file, go grab a coffee!`);
  fs.writeFileSync(
    `${target}.ts`,
    `// This is a ${target} file generated using a mini CLI tools made by ${author}`,
  );

  console.log(`Done Generating ${target} file, Happy Coding!`);
} else if (cdm === 'help') {
  console.log(`Availabe commands is ${cmd} <item>`);
} else {
  console.log('Uknown Commands');
  if (getSuggestion) {
    console.log(`Did you mean ${getSuggestion}`);
  }
}
