/**
 You are working on an enterprise project for a ride-sharing application.
 You have been assigned to the Customer Ride module that deals with managing customer payments for rides.
 Which of the following option is correct for the following code block?
*/

const customerRide = {
  riderId: "XC1452",
  walletBalance: 58960,
  totalDistanceInKm: 5.658,
  dateOfTravel: new Date("02-02-2023"),
  lastTravelledOn: undefined,
  previousDues: Infinity,
  uniqueRegex: /.* /,
};

function calculateFare() {
  const clone = JSON.parse(JSON.stringify(this));
  clone.walletBalance -= 5.5;
  console.log(
    `The rider traveled on date ${clone.dateOfTravel} and has wallet balance of 
     ${clone.walletBalance} and has last traveled on ${clone.lastTravelledOn}`
  );
}

const bindedCalculateFare = calculateFare.bind(customerRide);
bindedCalculateFare();

// "The rider traveled on date 2023-02-01T18:30:00.000Z and has wallet balance of 58954.5 and has last traveled on undefined"

/**
    JSON.stringify() causes value transformations:
    Date → converted to ISO string
    undefined properties → removed
    Infinity → converted to null
    RegExp → converted to {}
 */
