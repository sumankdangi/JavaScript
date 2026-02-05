// Greater or Less Than with numbers
let val1 =(5 > 3);
console.log(`Value1: ${val1}`); // Output: Value1: true

let val2 = (2 <= 1);
console.log(`Value2: ${val2}`); // Output: Value2: false

// Equality Comparison
let val3 = (7 == 7);
console.log(`Value3: ${val3}`); // Output: Value3: true

let val4 = (7 != 10);
console.log(`Value4: ${val4}`); // Output: Value4: true 

let val5 = (true === false);
console.log(`Value5: ${val5}`); // Output: Value5: false

let val6 = ("Hi" === "hi");
console.log(`Value6: ${val6}`); // Output: Value6: false

let val7 = ("Hi" !== "H");
console.log(`Value7: ${val7}`); // Output: Value7: true


// Primitive equality(pass by value)
let str1 = "Hello";
let str2 = "Hello";
let val8 = (str1 === str2);
console.log(`Value8: ${val8}`); // Output: Value8: true

// Object equality(pass by reference)
let obj1 = {};
let obj2 = {};
let val9 = (obj1 === obj2);
console.log(`Value9: ${val9}`); // Output: Value9: false

let obj3 = obj2;
let val10 = (obj3 === obj2);
console.log(`Value10: ${val10}`); // Output: Value10: true

// Strict equality vs equality
let val11 = (5 == "5");
let val12 = (5 === "5");
console.log(`Value11: ${val11}`); // Output: Value11: true
console.log(`Value12: ${val12}`); // Output: Value12: false

let val13 = (undefined == null);
let val14 = (undefined === null);
console.log(`Value13: ${val13}`); // Output: Value13: true
console.log(`Value14: ${val14}`); // Output: Value14: false
