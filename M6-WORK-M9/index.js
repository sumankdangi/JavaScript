import { promises } from 'node:dns';
import { get } from 'node:http';

import { loadData, writeData } from './data.js';
import { getCurrencyConversionData, getSalary } from './currency.js';
// Global Variables ................................
let employees = [];
let currencyData;

import createPrompt from 'prompt-sync'
let prompt = createPrompt();
const logEmployee = (employee) => {
    Object.entries(employee).forEach(entry => {
        if(entry[0] !== "salaryUSD" || entry[0] !=="localCurrency" ){
            console.log(`${entry[0]}: ${entry[1]}`);
        }
        
    });
    console.log(`Salary USD: ${getSalary(employee.salaryUSD,"USD",currencyData)}`);
    console.log(`Local Salary:${getSalary(employee.salaryUSD,employee.localCurrency,currencyData)}`);
}

function getInput(promptText, validator, transformer) {
    let value = prompt(promptText)
    if (validator && !validator(value)) {
        console.error(`!Invalid input:... Enter a Valid Input Again....`);
        return getInput(promptText, validator, transformer);
    }
    if (transformer) {
        return transformer(value);
    }
    return value;
}

const getNextEmployeeID = () => {
    const maxID = Math.max(...employees.map(e => e.id));
    return maxID + 1;
}


// Validator Functions:...........................

const isCurrencyCodeValid = function(code){
    const currencyCodes = Object.keys(currencyData.results)
    return (currencyCodes.indexOf(code)>-1);
}



const isStringInputValid = (input) => {
    return (input) ? true : false;
}

const isBooleanInputValid = (input) => {
    return (input === "yes" || input === "no");
}

const isIntegerValid = (min, max) => {
    return (input) => {
        let numValue = Number(input);
        if (!Number.isInteger(numValue) || numValue < min || numValue > max) {
            return false;
        }
        return true;
    }
}



// Application Commands:............................
function listEmployees() {
    console.log(`Employee List:..........`);
    console.log('');

    employees.forEach(e => {
        logEmployee(e);
        prompt('Press Enter to continue...');
    });//end for each      

    console.log('Employee List Completed.');

}
async function addEmployees() {
    console.log(`Add New Employee:..........`);
    console.log('');

    let employee = {};
    employee.id = getNextEmployeeID();
    employee.firstName = getInput("Enter First Name: ", isStringInputValid);
    employee.lastName = getInput("Enter Last Name: ", isStringInputValid);
    let startDateYear = getInput("Enter Start Year (1990-2026): ", isIntegerValid(1990, 2026));
    let startDateMonth = getInput("Enter Start Month (1-12): ", isIntegerValid(1, 12));
    let startDateDay = getInput("Enter Start Day (1-31): ", isIntegerValid(1, 31));
    employee.startDate = `${startDateYear}-${String(startDateMonth).padStart(2, '0')}-${String(startDateDay).padStart(2, '0')}`;
    employee.isActiveInput = getInput("Is Active Employee? (yes/no): ", isBooleanInputValid, i => (i === "yes"));
    employee.salaryUSD = getInput("Annual Salary In USD: ",isIntegerValid(10000,100000));
    employee.localCurrency = getInput("Local Currency(3 LetterCode) : ",isCurrencyCodeValid);

    console.log('');


    employees.push(employee);
    await writeData(employees);

}

function searchById() {
    const id = getInput("Enter Employee ID to search: ", null, Number);
    const result = employees.find(e => e.id === id);
    if (result) {
        console.log("");
        logEmployee(result);
    } else {
        console.log("No employee found with the given ID.");
    }
}

function searchByName() {
    const firstNameSearch = getInput("FirstName to Search:").toLowerCase();
    const lastNameSearch = getInput("LastName to Search:").toLowerCase();
    const results = employees.filter(e => {
        if (firstNameSearch && !e.firstName.toLowerCase().includes(firstNameSearch)) {
            return false;
        }
        if (lastNameSearch && !e.lastName.toLowerCase().includes(lastNameSearch)) {
            return false;
        }
        return true;
    });

    results.forEach((e, idx) => {
        console.log("");
        console.log(`Search Result ${idx + 1}:.............`);
        logEmployee(e);
    });
}

// Application Execution:.............................


const main = async () => {
    // Get the command the user wants to execute
    const command = process.argv[2].toLowerCase();
    switch (command) {
        case 'list':
            listEmployees();
            break;

        case 'add':
            await addEmployees();
            break;

        case 'search-by-id':
            searchById();
            break;

        case 'search-by-name':
            searchByName();
            break;

        default:
            console.error(`Unsupported command:... Exiting now.`);
            process.exit(1);

    }

}

Promise.all([loadData(),getCurrencyConversionData()])
    .then(results=>{
        employees = results[0];
        currencyData = results[1];
        return main();
    })
    .catch((err) => {
        console.error("Cannot Complete Starting")
        throw err;
    });