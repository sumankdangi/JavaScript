// What happens when you don't give variable a value?
let x;
console.log(x); // Output: undefined
console.log(typeof (x)); // Output: undefined

x= "Suman"
console.log(x); // Output: Suman
console.log(typeof (x)); // Output: string

x= 66;
console.log(x); // Output: 66
console.log(typeof (x)); // Output: number

// How do we set a variable to a purposely empty value?
let manager= null;
console.log(manager); // Output: null
console.log(typeof (manager)); // Output: object  