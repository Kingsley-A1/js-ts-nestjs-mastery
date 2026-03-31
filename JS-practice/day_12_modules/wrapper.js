// ═══════════════════════════════════════════════════════════════════════════
// wrapper.js - Error Handling Utility
// ═══════════════════════════════════════════════════════════════════════════
// This file provides the errorWrapper function
// IMPORTS: error classes (to check instanceof)
// EXPORTS: errorWrapper function

import {
  ValidationError,
  NotFoundError,
  UnauthorizedError,
  DuplicateError,
} from './errors.js';

// Wraps any async function with error handling
export async function errorWrapper(fn, ...args) {
  try {
    const result = await fn(...args);
    return { success: true, data: result };
  } catch (error) {
    // Check if it's one of our custom errors (has statusCode)
    if (error.statusCode) {
      return {
        success: false,
        statusCode: error.statusCode,
        message: error.message,
      };
    }

    // Alternative: Check each error type explicitly (more verbose but clearer)
    if (error instanceof ValidationError) {
      return { success: false, statusCode: 400, message: error.message };
    } else if (error instanceof NotFoundError) {
      return { success: false, statusCode: 404, message: error.message };
    } else if (error instanceof UnauthorizedError) {
      return { success: false, statusCode: 401, message: error.message };
    } else if (error instanceof DuplicateError) {
      return { success: false, statusCode: 409, message: error.message };
    }

    // Unknown error (not one of our custom types)
    console.error('❌ Unexpected error:', error);
    return {
      success: false,
      statusCode: 500,
      message: 'Internal server error',
    };
  }
}

console.log('✅ wrapper.js loaded - Exported errorWrapper function');
