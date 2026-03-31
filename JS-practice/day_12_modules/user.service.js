//User.service2.js -- The Second Business Logic

import { ValidationError, NotFoundError, DuplicateError } from './errors.js';

export function createUser(email, users) {
  if (!email) {
    throw new ValidationError('Email is required');
  }

  if (!email.includes('@')) {
    throw new ValidationError('Email must contain @');
  }

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    throw new DuplicateError(
      `The Email ${email} already exist, try another email`,
    );
  }
  //Create new user
  const newUser = {
    id: users.length + 1,
    email: email,
    createdAt: new Date(),
  };
  users.push(newUser);
  return newUser;
}
export function getUser(id, users) {
  if (!id || id <= 0) {
    throw new ValidationError('User ID must be a positive number');
  }
  const user = users.find((u) => u.id === id);
  if (!user) {
    throw new NotFoundError(`User with ID ${id} not found`);
  }
  return user;
}

//Delete user by ID
export function deleteUser(id, users) {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) {
    throw new NotFoundError(`User with ID ${id} not found`);
  }

  //Remove user
  const deletedUser = users.splice(index, 1)[0];
  return { message: 'User deleted successfully', user: deletedUser };
}

//Updtae Email
export function updateUser(id, newEmail, users) {
  //Validation
  if (!newEmail || !newEmail.includes('@')) {
    throw new ValidationError('Email is required');
  }
  const existingUser = users.find((u) => u.email === newEmail);
  if (existingUser) {
    throw new DuplicateError(
      `The Email ${newEmail} already exist, try another email`,
    );
  }
  //Update user
  const user = users.find((u) => u.id === id);
  if (!user) {
    throw new NotFoundError(`User with ID ${id} not found`);
  }
  user.email = newEmail;
  return user;
}

console.log(
  '✅ user.service2.js loaded - Exported 4 functions including createUser, getUser, deleteUser, updateUser',
);
