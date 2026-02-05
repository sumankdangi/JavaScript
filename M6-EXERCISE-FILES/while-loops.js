//Array of Complex Objects
import employees from './data.json' assert { type: 'json' };

// Basic While Loop
let i = 0;
while (employees[i]) {
    console.log(`Name:${employees[i].firstName}${employees[i].lastName}`);
    i++;
}

console.log('---');

// Do While Loop
i=0;
do {
    console.log(`Name:${employees[i].firstName}${employees[i].lastName}`);
    i++;
}
while (employees[i]);

console.log('---');



