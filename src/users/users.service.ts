//Day 3: Understand the Logic in the Services
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  //Fake Database(In-Memory Array)
  //The private modifier makes sure that this property is only accessible within this class.
  //The "user" is an array of objects, where each object represents a user with properties like id, name, and email.
  private users = [
    { id: 1, name: 'King', email: 'king.com' },
    { id: 2, name: 'Test', email: 'test@gmail.com' },
  ];

  //Our next work is to implement the methods that the controller will call to perform operations related to users.
  //1. Get all users
  //The @Get decorator in the controller maps HTTP GET requests to this method.
  //The findAll method returns the entire users array, simulating the retrieval of all user records from a database.
  //The "return" keyword is used to send the users array back to the caller, which in this case is the UsersController.
  // The "this.users" refers to the private users property defined earlier in the class.
  //The "return this.users" returns the array of user objects when the findAll method is called.

  findAll() {
    return this.users;
  }
  //UP NEXT IS FINDONE METHOD(Here we fid it by ID)
  //findOne is uses to find a user by their unique identifier (id).
  //the findOne method takes a single parameter id of type number (id: number).
  //The method uses the Array.prototype.find() method to search through the users array for a user object where the id property matches the provided id parameter.
  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }
  /**
   * Lastlyfor now,
   * We create a user using the create method.
   * The create method takes a single parameter user of type any (user: any).
   * The method adds the provided user object to the users array using the push() method.
   * Finally, the method returns the newly created user object.
   **/
  create(user: any) {
    //eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    this.users.push(user);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return user;
  }
}
