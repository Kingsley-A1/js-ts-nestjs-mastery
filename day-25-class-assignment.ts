class UserAccount {
  constructor(
    public readonly id: number,
    public name: string,
    public email: string,
    private password: string
  ) {}

  getProfile(): string {
    return `${this.name} - ${this.email}`;
  }

  changeEmail(newEmail: string): void {
    this.email = newEmail;
  }

  checkPassword(password: string): boolean {
    return this.password === password;
  }
}

const user = new UserAccount(
  1,
  "Kingsley",
  "king@example.com",
  "secret123"
);

console.log(user.getProfile());

user.changeEmail("blessedking@example.com");

console.log(user.getProfile());

console.log(user.checkPassword("wrong"));
console.log(user.checkPassword("secret123"));

user.name = "Blessed king"; //Allowed changing name
user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
//user.password = "newpass";  Error: Property 'password' is private and only accessible within class 'UserAccount'.
console.log(user.password); // Error: Property 'password' is private and only accessible within class 'UserAccount'.

{/*
    
Class reading formula:
What is the class name?
What properties does it have?
What data types are those properties?
What access modifiers do those properties have?
ORDD    
What data does this object hold?
What must be passed into the constructor?
What methods can it perform?
What is public?
What is private?
What is readonly?*/}