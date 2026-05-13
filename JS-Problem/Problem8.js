/**
 * You are working on an enterprise project for a bank. 
 * You have been assigned with Account Type module that deals with managing account types of customers. 
 * Account types can be Normal, Gold or Preferred. Which of the following is the most appropriate for this code block that you wrote in JavaScript?
 */

class BankAccount {
  static changeAccountType(accountType) {
    this.newAccountType = accountType;
    return this.newAccountType;
  }

  constructor({ newAccountType = "Normal" } = {}) {
    this.newAccountType = newAccountType;
  }
}

const customer = new BankAccount({ newAccountType: "Gold" });
console.log(customer.changeAccountType("Preferred"));

// There is a runtime exception in the program and it can be resolved by removing the static keyword from the changeAccountType function.
// static functions belongs to the class not instance.