// Rounding numbers to  integer values
let num1 = 4.736283423;
console.log(`Round:${Math.round(num1)}`); // Output: 5
console.log(`Ceiling:${Math.ceil(num1)}`); // Output: 5
console.log(`Floor:${Math.floor(num1)}`); // Output: 4


//Fixed
let fixed = num1.toFixed(3);
console.log(`Fixed Type:${typeof(fixed)} Fixed Value:${fixed}`); // Output: "string" "4.736"

// Display in local specific format
let num2 = 1_000_000000; // 1 billion
console.log(`Locale String:${num2.toLocaleString('en-US')}`); // Output: "1,000,000,000"
console.log(`USA:${num2.toLocaleString('en-US')}`);
console.log(`Germany:${num2.toLocaleString('de-DE')}`);
console.log(`India:${num2.toLocaleString('en-IN')}`); // Output: "1,00,00,00,000"


// International Currency Format
let salary = 1000000;
let monthlySalary = salary / 12;
console.log(`Monthly Salary:${monthlySalary.toFixed (2)}`); // Output: "83333.33"

let format1 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
console.log(`US Salary:${format1.format(monthlySalary)}`); // Output: "$83,333.33"

let format2 = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
console.log(`Germany Salary:${format2.format(monthlySalary)}`); // Output: "83.333,33 €"    

let format3 = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' });
console.log(`Japan Salary:${format3.format(monthlySalary)}`); // Output: "￥83,334"