/**
 * You are the backend developer for an enterprise bank project. Within this, you are assigned the task to sort the bank accounts by their balances.
 * However, during the program execution flow you want to ensure that the code does not modify the customer details. 
 * You tried Object.freeze but it is not throwing an error when a developer is modifying the bank account details such as balance. 
 * What is missing here?
 */

"use strict";

const bankAccount = [
  {
    customerId: "A10128123",
    accountNumber: "S02362145",
    balance: 5000,
    addressLine1: "Parkway Avenue",
    addressLine2: "United States",
  },
  {
    customerId: "A101281231",
    accountNumber: "S023621451",
    balance: 10000,
    addressLine1: "CA Avenue",
    addressLine2: "United States",
  },
];

for (let i = 0; i < bankAccount.length; i++) {
  Object.freeze(bankAccount[i]);
}

bankAccount[1].balance = 200;

console.log(bankAccount[1].balance);

// "use strict" should be added at the top of the file to ensure that an error is thrown whenever the developer tries to reassign a value to a frozen object

