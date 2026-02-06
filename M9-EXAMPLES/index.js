import chalk from "chalk";

import { logObj, numEmployeesLogged } from "./logging.js";


// console.log(`${chalk.blue.bold('First Name:   ')}Suman Kumar`);
// console.log(`${chalk.green.bold('Last Name:   ')}Dangi`);


const employee={
    id : 0,
    email: "sumandangi@gmail.com",
    firstName: "Suman Kumar",
    lastName: "Dangi",
    salaryUSD: "50000",
    localCurrency: "NPR",
    dateOfBirth: "2000-02-21",
    startDate: "2023-9-13",
    isActive: "true"

};


logObj(employee);
logObj(employee);
logObj(employee);

console.log(`${chalk.red('Employee Logged')} ${chalk.gray.bold(numEmployeesLogged)}`);