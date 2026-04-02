//Creating my first Class 

export class BankAccount {
  constructor(ownerName) {
    this.balance = 0;
    this.ownerName = ownerName;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(
      `After deposit of ${amount}, the balance now is ${this.balance}`
    );
  }
  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error('Insufficient Funds');
    } else {
      this.balance -= amount;
      console.log(
        `After withdraw of ${amount}, the balance now is ${this.balance}`,
      );
    }
  }
}

const myAccount = new BankAccount('Kingsley');
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount)
//myAccount.withdraw(1000);

console.log(
  '*****************************************************************'
);
console.log('This was done the second time for muscle memory\n')
export class BankAccount2 {
  constructor(ownerName2) {
    this.balance = 0;
    this.ownerName2 = ownerName2;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(
      `After a deposite of ${amount}, the total balance now is ${this.balance}`,
    );
  }
  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error('Insufficient Funds');
    } else {
      this.balance -= amount;
      console.log(
        `${this.ownerName2}, After a withdraw of ${amount}, the reaming balance is now ${this.balance}`,
      );
    }
  }
}
const myAccount1 = new BankAccount2('Kingsley');
myAccount1.deposit(2000);
myAccount1.withdraw(1999);
