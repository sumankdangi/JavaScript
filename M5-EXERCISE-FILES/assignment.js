// Assignment 
let x = "This is a string assigned to x";
console.log(x); // Output: This is a string assigned to x
let y = 42;
console.log(y); // Output: 42
let z = true;
console.log(z); // Output: true
let date= new Date("January 1, 2026");
console.log(date); // Output: Thu Jan 01 2026 

// Mathematical assignments
let val1 = 10;
val1 += 5; // val1 = val1 + 5
console.log(`Addition Assignment: ${val1}`); // Output: Addition Assignment: 15

let val2 = 10;
val2 -= 3; // val2 = val2 - 3
console.log(`Subtraction Assignment: ${val2}`); // Output: Subtraction Assignment: 7    

let val3 = 10;
val3 *= 4; // val3 = val3 * 4
console.log(`Multiplication Assignment: ${val3}`); // Output: Multiplication Assignment: 40 
let val4 = 20;
val4 /= 5; // val4 = val4 / 5
console.log(`Division Assignment: ${val4}`); // Output: Division Assignment: 4

let val5 = 10;
val5 %= 3; // val5 = val5 % 3
console.log(`Remainder Assignment: ${val5}`); // Output: Remainder Assignment: 1    

let val6 = 2;
val6 **= 3; // val6 = val6 ** 3
console.log(`Exponentiation Assignment: ${val6}`); // Output: Exponentiation Assignment: 8  

// Assignment with Increment and Decrement
// let val7 = 5;
// val7++; // Increment by 1
// console.log(`Increment Assignment: ${val7}`); // Output: Increment Assignment: 6
// let val8 = 5;
// val8--; // Decrement by 1
// console.log(`Decrement Assignment: ${val8}`); // Output: Decrement Assignment: 4    

let val7 = 10;
let val8 = val7++; // Post-increment
console.log(`Post-Increment Assignment: val7=${val7}, val8=${val8}`); // Output: Post-Increment Assignment: val7=6, val8=5      

val9 = 10;
let val10 = --val9; // Pre-decrement
console.log(`Pre-Decrement Assignment: val9=${val9}, val10=${val10}`); // Output: Pre-Decrement Assignment: val9=4, val10=4
