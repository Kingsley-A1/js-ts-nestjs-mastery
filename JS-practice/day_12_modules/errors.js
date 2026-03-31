// ═══════════════════════════════════════════════════════════════════════════
// errors.js - Custom Error Classes
// ═══════════════════════════════════════════════════════════════════════════
// This file EXPORTS error classes for other modules to use
// It IMPORTS nothing - it's the foundation!

// ValidationError - For invalid input (email missing, wrong format, etc.)
export class ValidationError extends Error {
  //Extends makes the ValidationError class have all the priviledges of an Error type.
  constructor(message) {
    //constructor is a special method that is called when an object is created from a class.
    super(message); //Calls the constructor of the parent class (Error)
    this.name = 'ValidationError'; //Sets the name of the error
    this.statusCode = 400; //Sets the status code of the error
  }
}

//NotFoundError - For non-existing resources
export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

//Unathorised error - For Authentication Failures

export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedError';
    this.statusCode = 401;
  }
}

//DuplicateError - For conflicting respurces e.g email already exist
export class DuplicateError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DuplicateError';
    this.statusCode = 409;
  }
}

console.log('✅ errors.js loaded - Exported 4 error classes');
