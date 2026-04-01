// ═══════════════════════════════════════════════════════════════════════════
// user.service.js - User Business Logic
// ═══════════════════════════════════════════════════════════════════════════
// This file contains user CRUD functions
// IMPORTS: error from error.js classes (to throw them)
// EXPORTS: createUser, getUser, deleteUser, updateUser

import { ValidationError, NotFoundError, DuplicateError } from './errors.js';

// Create a new user
export function createUser(email, users) {
  // Validation: email is required
  if (!email) {
    throw new ValidationError('Email is required');
  }

  // Validation: email must be valid format
  if (!email.includes('@')) {
    throw new ValidationError('Email must contain @');
  }

  // Check for duplicates
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    throw new DuplicateError(`Email ${email} is already registered`);
  }

  // Create new user
  const newUser = {
    id: users.length + 1,
    email: email,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  return newUser;
}

// Get user by ID
export function getUser(id, users) {
  // Validation: ID must be positive
  if (!id || id <= 0) {
    throw new ValidationError('User ID must be a positive number');
  }

  // Find user
  const user = users.find((u) => u.id === id);
  if (!user) {
    throw new NotFoundError(`User with ID ${id} not found`);
  }

  return user;
}

// Delete user by ID
export function deleteUser(id, users) {
  // Find user index
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) {
    throw new NotFoundError(`User with ID ${id} not found`);
  }

  // Remove user
  const deletedUser = users.splice(index, 1)[0];
  return { message: 'User deleted successfully', user: deletedUser };
}

// Update user email
export function updateUser(id, newEmail, users) {
  // Validation
  if (!newEmail || !newEmail.includes('@')) {
    throw new ValidationError('Valid email is required');
  }

  // Find user
  const user = users.find((u) => u.id === id);
  if (!user) {
    throw new NotFoundError(`User with ID ${id} not found`);
  }

  // Check if new email already exists (on different user)
  const duplicate = users.find((u) => u.email === newEmail && u.id !== id);
  if (duplicate) {
    throw new DuplicateError(`Email ${newEmail} is already in use`);
  }

  // Update email
  user.email = newEmail;
  user.updatedAt = new Date().toISOString();
  return user;
}

console.log(
  '✅ user.service.js loaded - Exported 4 functions (CRUD operations)'
);
