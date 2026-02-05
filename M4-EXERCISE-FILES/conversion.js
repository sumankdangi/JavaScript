// Using typeof function
let strValue="Hello, World!";
console.log(typeof strValue); // Output: "string"
let numValue=42;
console.log(typeof numValue); // Output: "number"
let boolValue=true;
console.log(typeof boolValue); // Output: "boolean" 

// Joining a non-string value with string
let age=25;
// let message="I am " + age + " years old.";
let message=`I am ${age} years old.`;
console.log(message); // Output: "I am 25 years old."


// Converting string to number
// let strNum="123.45";
// let convertedNum=parseFloat(strNum);
// console.log(convertedNum); // Output: 123.45
// console.log(typeof convertedNum); // Output: "number"

let ageString="30";
let ageNumber=Number(ageString);
console.log(ageNumber); // Output: 30
console.log(typeof ageNumber); // Output: "number"

// What about NAN?
let ageString2="thirty-three";
let ageNumber2=Number(ageString2);
console.log(ageNumber2); // Output: NaN
console.log(typeof ageNumber2); // Output: "number" 

// Converting a value to boolean
let num1 = 3;
let num2 = 0;

let bool1 = Boolean(num1);
let bool2 = Boolean(num2);
console.log(`Num1:${bool1} Num2:${bool2}`); // Output: "Num1:true, Num2:false"


let str1 = "Hello";
let bol3 = Boolean(str1);
let val1;
let bol4 = Boolean(val1);
console.log(`Bol3:${bol3} Bol4:${bol4}`); // Output: "Str1:true, Val1:false"

// Converting boolean to string
let bool5 = true;
console.log(`Bool5:${bool5}`);