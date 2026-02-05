// Creating a single line string
let firstName = "Suman";
let lastName = `Dangi`;

let title = `VP Engineering`;
title = `Senior VP Engineering`;


// String concatenation with plus operator
let fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName);

// String concatenation with template literals
let greeting = `Hello, ${firstName} ${lastName}! Welcome to the company.`;
console.log(greeting);

// Creating multi-line strings using \n
let bio = "Line1\nLine2\nLine3";
console.log("Bio using \\n:\n" + bio);

//Creating multi-line strings with backticks\
bio = `About Me:\
I am a software engineer.\
I love coding.\
I enjoy learning technologies.\
Nice to meet you!`;
console.log("Bio using backticks:\n" + bio);

// Escaping characters in strings
let quote = `Suman said, \"JavaScript is awesome!\"`;
quote = `JavaScript can use 'single' and "double" quotes.`;
quote= `In JavaScript, you must escape the backslash \\ character.`;
console.log(quote);

// String length
// let str = "Hello, World!";
// console.log("Length of string: " + str.length);
let length= quote.length;
console.log("Length of string: " + length);

// Accessing characters in a string
let secondCharacter = quote[1];
console.log("Second character: " + secondCharacter);

//Changing Case
let upperCaseQuote = quote.toUpperCase();
let lowerCaseQuote = quote.toLowerCase();
console.log("Uppercase: " + upperCaseQuote);
console.log("Lowercase: " + lowerCaseQuote);

// Finding substrings
// let position = quote.indexOf("JavaScript");
// console.log("Position of 'JavaScript': " + position);

let index1 = fullName.indexOf("Dangi");
console.log("Position of 'Dangi': " + index1);
let index2 = fullName.indexOf("Suman");
console.log("Position of 'Suman': " + index2);
let index3 = fullName.indexOf("XYZ");
console.log("Position of 'XYZ': " + index3); // -1 if not found

// Does a string contain a substring?
let doesContain = fullName.includes("Suman");
console.log(doesContain)