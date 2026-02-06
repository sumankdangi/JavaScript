import fs from 'node:fs/promises';


// Loading and Writing data to the file System

export const loadData = async () => {
    console.log("Loading Employees...............");
    try {
        const fileData = await fs.readFile('./data.json');
        return JSON.parse(fileData);
    }
    catch (err) {
        console.error("Cannot Load Employee Data")
        throw err;

    }
}

export const writeData = async (employees) => {
    console.log("Writing Employee..............");
    try {
        await fs.writeFile('./data.json', JSON.stringify(employees, null, 2));
    }
    catch (err) {
        console.error("Cannot Write Employee Data");
        throw err;
    }
}
