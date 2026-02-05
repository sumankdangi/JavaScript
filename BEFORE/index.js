//Importing Sample Data 
import employees from './data.json' assert { type: 'json' };
import createPrompt from 'prompt-sync';
let prompt = createPrompt();

const logEmployee = (employee) => {
    Object.entries(employee).forEach(entry => {
        console.log(`${entry[0]}: ${entry[1]}`);
    });
    console.log('-------------------');
}

function getInput(promptText,validator,transformer) {
    let value = prompt(promptText)
    if (validator && !validator(value)) {
        console.error(`!Invalid input:... Enter a Valid Input Again....`);
        return getInput(promptText,validator,transformer);
    }
    if (transformer){
    return transformer(value);
    }
    return value;
}

// // Transformer Functions:...........................
// const transformBooleanValue = (input)=>{
//     return(input === "yes");
// }

// Validator Functions:...........................
const isStringInputValid=(input)=>{
    return (input)? true: false;
}

const  isBooleanInputValid=(input)=>{
    return (input === "yes" || input === "no");
}

const isIntegerValid = (min,max)=>{
    return (input)=>{
        let numValue = Number(input);
        if (!Number.isInteger(numValue) || numValue < min || numValue > max) {
            return false;
        }
        return true;
    }
}

// const isStartYearValid = function(input){
//     let numValue = Number(input);
//     if (!Number.isInteger(numValue) || numValue < 2016 || numValue > 2026) {
//         return false;
//     }   
//     return true;
// }

// const isStartMonthValid = function(input){
//     let numValue = Number(input);
//     if (!Number.isInteger(numValue) || numValue < 1 || numValue > 12) {
//         return false;
//     }   
//     return true;
// }

// const isStartDayValid = function(input){
//     let numValue = Number(input);
//     if (!Number.isInteger(numValue) || numValue < 1 || numValue > 31) {
//         return false;
//     }
//     return true;
// }




// Application Commands:............................
function listEmployees() {
    console.log(`Employee List:..........`);
    console.log('');

    employees.forEach(e=>{
        logEmployee(e);
        prompt('Press Enter to continue...');
    });//end for each      
    
    console.log('Employee List Completed.');

}
function addEmployees() {
    console.log(`Add New Employee:..........`);
    console.log('');

    let employee = {};
    employee.firstName = getInput("Enter First Name: ", isStringInputValid);
    employee.lastName = getInput("Enter Last Name: ", isStringInputValid);
    let startDateYear = getInput("Enter Start Year (1990-2026): ", isIntegerValid(1990,2026));
    let startDateMonth = getInput("Enter Start Month (1-12): ", isIntegerValid(1,12));
    let startDateDay = getInput("Enter Start Day (1-31): ", isIntegerValid(1,31));
    employee.startDate = `${startDateYear}-${String(startDateMonth).padStart(2,'0')}-${String(startDateDay).padStart(2,'0')}`;
    employee.isActiveInput = getInput("Is Active Employee? (yes/no): ", isBooleanInputValid, i=>(i==="yes"));


    console.log('');


    
    

    
    //Output employee JSON
    const json = JSON.stringify(employee, null, 2);
    console.log(`Employee:${json}`);
}

function searchById() {
    const id = getInput("Enter Employee ID to search: ",null,Number);
    const result = employees.find(e=>e.id === id);
    if (result) {
        console.log("");
        logEmployee(result);
    } else {
        console.log("No employee found with the given ID.");
    }
}
   
function searchByName() {
    const firstNameSearch= getInput("FirstName to Search:").toLowerCase();
    const lastNameSearch= getInput("LastName to Search:").toLowerCase();
    const results = employees.filter(e=>{
        if(firstNameSearch && !e.firstName.toLowerCase().includes(firstNameSearch)){
            return false;
        }
        if(lastNameSearch && !e.lastName.toLowerCase().includes(lastNameSearch)){
            return false;
        } 
        return true;
    });

    results.forEach((e,idx)=>{
        console.log("");
        console.log(`Search Result ${idx+1}:.............`);
        logEmployee(e);
    });
}

// Application Execution:.............................

// Get the command the user wants to execute
const command = process.argv[2].toLowerCase();
switch (command) {
    case 'list':
        listEmployees();
        break;

    case 'add':
        addEmployees();
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
