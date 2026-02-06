import chalk from "chalk";

export let numEmployeesLogged = 0;

export const logObj = (obj)=>{
    Object.entries(obj).forEach(entry=>{
        console.log(`${chalk.green(entry[0])}:${chalk.grey.bold(entry[1])}`)
    });
    ++numEmployeesLogged;
}

