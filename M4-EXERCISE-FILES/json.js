// JavaScript Object
let employee = {
    firstName: "Suman",
    lastName: "Dangi",
    age : 26,
    birthDate: new Date(2000, 1, 21),
    numYearsEmployment: 3,
    department: "IT",
    title: "Software Engineer",
    isActive: true,
    salary: 10000,
    address: {
        street: "123 Main St",
        city: "Kathmandu",
        state: "Bagmati",
        zip: "44600"
    },
    skills: ["JavaScript", "React", "Node.js"]
};   


// Converting JavaScript Object to JSON String
let jsonValue = JSON.stringify(employee);
console.log(jsonValue);
jsonValue = JSON.stringify(employee, null, 2); // Pretty Print with 2 spaces indentation
console.log(jsonValue);


// Converting JSON String back to JavaScript Object
let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee);


// Writing JSON directly
let jsonString = `{
    "firstName": "Anita",
    "lastName": "Shrestha",
    "age": 28,
    "birthDate": "1995-05-15T00:00:00.000Z",
    "numYearsEmployment": 5,
    "department": "HR",
    "title": "HR Manager",
    "isActive": true,   
    "salary": 12000,
    "address": {
        "street": "456 Market St",  
        "city": "Pokhara",
        "state": "Gandaki",
        "zip": "33700"
    },
    "skills": ["Recruitment", "Employee Relations", "Training"]
}`;
let obj = JSON.parse(jsonString);
console.log(obj);

// Improperly formatted JSON string example
let notJson = "Hello, World!";
let newObj = JSON.parse(`"${notJson}"`);
