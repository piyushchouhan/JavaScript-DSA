/**
 Which operator and array functions would you use to complete the method of deleting customers by id?
 You can assume that all the customers have a unique id that can be a string or a number.
 The code should delete the customer by using case-sensitive id matching.
 Select the correct operator and array functions to replace ?? in the code block.
*/

// function deleteCustomerById(customers, value) {
//   var index = customers.??((customer) => customer.id ?? value);
//   if (index > -1) {
//     customers.??(index, 1);
//   }
//   return customers;
// }

// const customers = [
//   { id: 1, name: "Jhon" },
//   { id: "2", name: "Jack" },
//   { id: 2, name: "Jhim" },
//   { id: 3, name: "Jhonny" },
//   { id: '3', name: "Julia" },
// ];

// deleteCustomerById(customers, '3');

function deleteCustomerById(customers, value) {
  var index = customers.findIndex((customer) => customer.id === value);
  if (index > -1) {
    customers.splice(index, 1);
  }
  return customers;
}

const customers = [
  { id: 1, name: "Jhon" },
  { id: "2", name: "Jack" },
  { id: 2, name: "Jhim" },
  { id: 3, name: "Jhonny" },
  { id: '3', name: "Julia" },
];

deleteCustomerById(customers, '3');
console.log(customers);


// 