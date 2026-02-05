// Creating dates
let date1= new Date(); // Current date and time
console.log(date1);

let date2 = new Date("2024, January, 1"); // January 1, 2024
console.log(date2);

let date3 = new Date('2026-12-25T10:30:00'); // December 25, 2024 at 10:30 AM
console.log(date3);

// Accessing elements of a date
// console.log("Year:", date3.getFullYear());
// console.log("Month:", date3.getMonth());
// console.log("Date:", date3.getDate());
// console.log("Hours:", date3.getHours());
// console.log("Minutes:", date3.getMinutes());
// console.log("Seconds:", date3.getSeconds());

console.log(`Year: ${date3.getFullYear()}`);
console.log(`Month: ${date3.getMonth()}`);
console.log(`Date: ${date3.getDate()}`);
console.log(`Hours: ${date3.getHours()}`);
console.log(`Minutes: ${date3.getMinutes()}`);
console.log(`Seconds: ${date3.getSeconds()}`);  