const billDetails = [
    {
        billedId:"B001",
        billAmount: 500,
        billDate: "2023-01-15",
        customerId: "C001",
        billDiscount: 10
    },
    {
        billedId:"B002",
        billAmount: 1000,
        billDate: "2023-02-20",
        customerId: "C002",
        billDiscount: 15
    },
    {
        billedId:"B003",
        billAmount: 750,
        billDate: "2023-03-10",
        customerId: "C001",
        billDiscount: 5
    }
]


function server(index) {
  try {
    billDetails[index].billDiscount;
  } catch (error) {
    // to preserve the original error when rethrowing, you should use the 'cause' property
    throw new Error("Method: Server", {
      cause: error,
    });
  }
}

function getPerItemCostByCustomerId(id) {
  try {
    server(3);
  } catch (exception) {
    // to access the original error, you can use the 'cause' property of the new error
    console.log(`${exception.message} ${exception.cause}`);
  }
}