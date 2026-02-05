// Creating Arrays
let arr1 = []; // Empty array
let arr2 = ["Item1", "Item2", "Item3"]; // Array with initial values
let arr3 = new Array();
let arr4 = ['apple', 'banana', 'cherry'];

// Accessing Array Values
let names = ['Siva', 'Sita', 'Ram', 'Santosh','Ravi','Anita'];
console.log(`Name Length: ${names.length}`); // Output: 3
console.log(`First Name: ${names[0]}`); // Output: Siva
console.log(`2nd Name: ${names[1]}`); // Output: Sita
console.log(`3rd Name: ${names[2]}`); // Output: Ram
console.log(`10th Name: ${names[9]}`); // Output: undefined


//Search for Values in an Array
const includesRam = names.includes("Ram");
console.log(`Includes Ram: ${includesRam}`); 
const includesSuman = names.includes("Suman");
console.log(`Includes Suman: ${includesSuman}`);

const ramIndex = names.indexOf("Ram");
console.log(`Index of Ram: ${ramIndex}`);
const sumanIndex = names.indexOf("Suman");
console.log(`Index of Suman: ${sumanIndex}`);

// Adding Values to an Array
names.push("Suman");
console.log(`After Push: ${names}`);

// Adding Values at the Beginning of an Array
names.unshift("Laxman");
console.log(`After Unshift: ${names}`);

// Adding Values at Specific Index
names.splice(2, 0, "Hanuman");
console.log(`After Splice: ${names}`);

// Removing Values from an Array
names.shift();
console.log(names); // Removes first element

names.pop();
console.log(names); // Removes last element 


// Removing Values at Specific Index
names.splice(5, 1); // Removes 1 element at index 5
console.log(names);

// Array and Objcts

const obj1 = {
    firstName: "Siva",
    lastName: "Kumar",
    age: 30 
};

const obj2 = {
    firstName: "Anita",
    lastName: "Sharma",
    age: 28 
};

const obj3 = {
    firstName: "Ravi",
    lastName: "Verma",
    age: 35 
};

const employees = [obj1, obj2];
console.log(`Is Identical Object in Array: ${employees.includes(obj3)}`); // false
console.log(`Is Same Object in Array: ${employees.includes(obj1)}`); // true
