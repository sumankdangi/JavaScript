//Importing Sample Data 
import employees from './data.json' assert { type: 'json' };
import createPrompt from 'prompt-sync';
let prompt = createPrompt();

// //Log out arguments
// console.log(process.argv);
// process.exit(0);

// Get the command the user wants to execute
const command = process.argv[2].toLowerCase();
switch (command) {
    case 'list':
        console.log(`Employee List:..........`);
        console.log('');
        for (let emp of employees) {
            for(let property in emp){
                console.log(`${property}: ${emp[property]}`);
            } 
            console.log('-------------------');
            prompt('Press Enter to continue...');
        } 
        console.log('Employee List Completed.');      
        break;
    
    case 'add':
        console.log(`Add New Employee:..........`);
        console.log('');

        let employee = {};

        let firstName = prompt("Enter employee's first name: ");
        if (!firstName) {
            console.log("First name cannot be empty.");
            process.exit(1);
        }
        employee.firstName = firstName;

        let lastName = prompt("Enter employee's last name: ");
        if (!lastName) {
            console.log("Last name cannot be empty.");
            process.exit(1);
        }
        employee.lastName = lastName;

        let startDateYear = prompt("Employee's start date (2016-2026): ");
        startDateYear = Number(startDateYear);
        //Check if it is a valid integer within range
        if (!Number.isInteger(startDateYear) || startDateYear < 2016 || startDateYear > 2026) {
            console.error('Enter a valid year between 2016 and 2026.');
            process.exit(1);
        }
        // Check if the number is in range
        if (startDateYear < 2016 || startDateYear > 2026) {
            console.error('Start date year must be between 2016 and 2026.');
            process.exit(1);
        }

        let startDateMonth = prompt("Employee's start month (1-12): ");
        startDateMonth = Number(startDateMonth);
        // Check if it is a valid integer
        if (!Number.isInteger(startDateMonth) || startDateMonth < 1 || startDateMonth > 12) {
            console.error('Enter a valid month between 1 and 12.');
            process.exit(1);
        }

        // Check if the number is in range
        if (startDateMonth < 1 || startDateMonth > 12) {
            console.error('Start date month must be between 1 and 12.');
            process.exit(1);
        }


        let startDateDay = prompt("Employee's start day (1-31): ");
        startDateDay = Number(startDateDay);
        if (!Number.isInteger(startDateDay) || startDateDay < 1 || startDateDay > 31) {
            console.error('Enter a valid day between 1 and 31.');
            process.exit(1);
        }

        // Check if the number is in range
        if (startDateDay < 1 || startDateDay > 31) {
            console.error('Start date day must be between 1 and 31.');
            process.exit(1);
        }
        //Date elements are correct, Let's create a date
        employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);

        let isActive = prompt("Is the employee active? (yes/no): ");
        // Check if incorrect value was entered
        if (isActive !== 'yes' && isActive !== 'no') {
            console.error("Please enter 'yes' or 'no' for active status.");
            process.exit(1);
        }
        employee.isActive = (isActive === 'yes');

        //Output employee JSON

        const json = JSON.stringify(employee, null, 2);
        console.log(`Employee:${json}`);
        break;

    default:
        console.error(`Unsupported command:... Exiting now.`);
        process.exit(1);

}



