// Array Of Complex Objects
import employees from './data.json' assert { type: 'json' };

// Listing only First five items
for (let i = 0; i < employees.length; i++) {
    if (i >= 5) {
        break;
    }
    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
}

console.log('---');

// Searching only for first names starting with A
for(let employee of employees) {
    if (!employee.firstName.startsWith('A')) {
        continue;
    }
    console.log(`Name: ${employee.firstName} ${employee.lastName}`);
}
console.log('---');

// Nested Loop Control Flow
employee: for(let emp of employees) {
    for(let property in emp) {
        if(property === "dateOfBirth") {
            continue employee;
        }
        console.log(`${property}: ${emp[property]}`);
    }
    console.log('---');
}

