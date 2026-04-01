// ═══════════════════════════════════════════════════════════════════════════
// main.js - Test Suite (Entry Point)
// ═══════════════════════════════════════════════════════════════════════════
// This file IMPORTS everything and runs tests
// IMPORTS: user service functions, error wrapper
// EXPORTS: Nothing (it's the entry point)

import { createUser, getUser, deleteUser, updateUser } from './user.service.js';
import { errorWrapper } from './wrapper.js';

console.log('\n🧪 Starting Day 12 Module Tests...\n');

// Mock database (in-memory array)
const users = [];

// ═══════════════════════════════════════════════════════════════════════════
// TEST SUITE
// ═══════════════════════════════════════════════════════════════════════════

(async () => {
  console.log('═══════════════════════════════════════════════════');
  console.log('TEST 1: Create User - Valid Email');
  console.log('═══════════════════════════════════════════════════');
  const result1 = await errorWrapper(createUser, 'king@example.com', users);
  console.log('Result:', result1);
  console.log('Users array:', users);
  console.log('');








  
  console.log('═══════════════════════════════════════════════════');
  console.log('TEST 2: Create User - Missing Email');
  console.log('═══════════════════════════════════════════════════');
  const result2 = await errorWrapper(createUser, '', users);
  console.log('Result:', result2);
  console.log('');

  console.log('═══════════════════════════════════════════════════');
  console.log('TEST 3: Create User - Invalid Email Format');
  console.log('═══════════════════════════════════════════════════');
  const result3 = await errorWrapper(createUser, 'notanemail', users);
  console.log('Result:', result3);
  console.log('');

  console.log('═══════════════════════════════════════════════════');
  console.log('TEST 4: Create User - Duplicate Email');
  console.log('═══════════════════════════════════════════════════');
  const result4 = await errorWrapper(createUser, 'king@example.com', users);
  console.log('Result:', result4);
  console.log('');

  console.log('═══════════════════════════════════════════════════');
  console.log('TEST 5: Get User - Valid ID');
  console.log('═══════════════════════════════════════════════════');
  const result5 = await errorWrapper(getUser, 1, users);
  console.log('Result:', result5);
  console.log('');

  console.log('═══════════════════════════════════════════════════');
  console.log('TEST 6: Get User - Invalid ID (Not Found)');
  console.log('═══════════════════════════════════════════════════');
  const result6 = await errorWrapper(getUser, 999, users);
  console.log('Result:', result6);
  console.log('');

  console.log('═══════════════════════════════════════════════════');
  console.log('TEST 7: Update User - Valid');
  console.log('═══════════════════════════════════════════════════');
  const result7 = await errorWrapper(updateUser, 1, 'newemail@example.com', users);
  console.log('Result:', result7);
  console.log('Updated users array:', users);
  console.log('');

  console.log('═══════════════════════════════════════════════════');
  console.log('TEST 8: Delete User - Valid ID');
  console.log('═══════════════════════════════════════════════════');
  const result8 = await errorWrapper(deleteUser, 1, users);
  console.log('Result:', result8);
  console.log('Remaining users:', users);
  console.log('');

  console.log('✅ All tests complete!\n');
  console.log('🎉 Day 12: ES6 Modules - You just built a modular application!');
  console.log('');
  console.log('📊 Module Summary:');
  console.log('  • errors.js      → 4 error classes exported');
  console.log('  • wrapper.js     → 1 utility function exported');
  console.log('  • user.service.js → 4 CRUD functions exported');
  console.log('  • main.js        → Imports everything, runs tests');
  console.log('');
  console.log('🔗 This is EXACTLY how NestJS organizes code!');
})();
