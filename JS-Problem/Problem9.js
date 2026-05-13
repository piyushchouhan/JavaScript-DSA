// What should be the output of the following program and how would you ensure that you get the right results?

const bank = {
  customer: {
    currentBalance: 1000,
    deductCharges(charges, customerType) {
      if (customerType === "Gold") {
        return this.currentBalance - (charges - (charges * 10) / 100);
      } else if (customerType === "Preferred") {
        return this.currentBalance - (charges - (charges * 5) / 100);
      } else {
        return this.currentBalance - charges;
      }
    },

    addQuarterlyInterest: (customerType) => {
      if (customerType === "Gold") {
        return this.currentBalance + (this.currentBalance * 3.5) / 100;
      } else if (customerType === "Preferred") {
        return this.currentBalance + (this.currentBalance * 2.5) / 100;
      } else {
        return this.currentBalance + (this.currentBalance * 1.5) / 100;
      }
    }
  }
};

console.log(bank.customer.deductCharges(25, "Preferred"));

//  Below line will not give the expected output because of the use of arrow function for addQuarterlyInterest method.
//  Arrow functions do not have their own 'this' context, so 'this.currentBalance' will be undefined.
//  To fix this, we should use a regular function instead of an arrow function for addQuarterlyInterest.
console.log(bank.customer.addQuarterlyInterest("Gold"));