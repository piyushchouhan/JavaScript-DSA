const customerRide = [
  {
    riderId: "XC1452",
    walletBalance: 58960,
    totalDistanceInKm: 5.658,
    dateOfTravel: new Date("02-02-2023"),
  },
];

customerRide[-1] = {
  riderId: "XC1451",
  walletBalance: 8569,
  totalDistanceInKm: 14785,
  dateOfTravel: new Date("03-02-2023"),
};

customerRide[1] = {
  riderId: "XC145158",
  walletBalance: 78512,
  totalDistanceInKm: 6931,
  dateOfTravel: new Date("04-02-2023"),
};

function printCustomerRides() {
  let distance = 0;
  for (let i = 0; i < customerRide.length; i++) {
    distance += customerRide[i].totalDistanceInKm;
  }
  console.log(`The distance travelled by all customers is ${distance}`);

  distance = 0;
  for (let value of customerRide) {
    distance += value.totalDistanceInKm;
  }

  console.log(`The distance travelled by all customers is ${distance}`);
}

const bindedCustomerRides = printCustomerRides.bind(customerRide);
bindedCustomerRides();

/**
 * bind() is used to set the value of this inside a function when it is called later.
 * However, look inside the printCustomerRides function:
 * It does not use this anywhere.
 * It directly accesses customerRide (the variable from the outer scope via closure).
 * So even if you bind this to customerRide, it doesn't change anything because the function isn't using this.
 */