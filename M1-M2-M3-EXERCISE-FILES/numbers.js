// Define number values
let num1 = 1;
let num2 = -100000;
let num3 = 1.33333;

// Defining a big and small number
let num4 = 12345678901234567890n; // BigInt
console.log(num4); // Output: 12345678901234567890n
let num5 = 0.0000001;
console.log(num5); // Output: 0.0000001

//Creating numbers with e notation
let num6 = 1.2e+10; // 1 million
console.log(num6); // Output: 12000000000

// How big and small can we get with number type
console.log(`Minimum Value: ${Number.MIN_VALUE}`); // Output: Minimum Value: 5e-324
console.log(`Minimum Safe Integer: ${Number.MIN_SAFE_INTEGER}`); // Output: Minimum Safe Integer: -9007199254740991
console.log(`Maximum Value: ${Number.MAX_VALUE}`); // Output: Maximum Value: 1.7976931348623157e+308
console.log(`Maximum Safe Integer: ${Number.MAX_SAFE_INTEGER}`); // Output: Maximum Safe Integer: 9007199254740991


// Creating BigInt's
let bigInt1 = 1n;
let bigInt2 = 15_00_54635_465465465465465465n; // Using underscores for readability