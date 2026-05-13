/**
 * You are getting sensor readings from a temperature sensor in degree celsius and you need to convert them to Fahrenheit.
 * How would you parse those readings in JS replacing ?? so that the line below it will be able to convert those values to Fahrenheit?
 * Assumption: Fahrenheit = Temperature in degree celsius * 2;
 */

const sensorReading = [1, 2, 3, [null], 5, [4, 10], 89, "20", , [[[96]]]];

function convert() {
  // ?? // const flatArray = sensorReading.flat(5);
  console.log(flatArray);
  const mapped = flatArray.map((temperature) => temperature * 2);
  console.log(mapped);
}

convert();


// the answer is this 
// const flatArray = sensorReading.flat(5);

/**
 * To fully flatten it, depth 5 is enough.
 * flat() → depth 1 only
 * flat(3) → may still leave nested arrays
 * flattenArray() is not a standard JS method
 */