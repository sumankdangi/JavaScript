// Employee
let employee = {
    firstName: "Suman Kumar",
    lastName: "Dangi",
    startDate: "2023-01-15",
    numYearsService:3,
    age: 26,
    department: "Engineering",
    designation: "Software Engineer",
    salary: 50000,
    isActive: true,

};

// Example from module introduction
let badgeColor;
if (employee.numYearsService >= 15) {
    badgeColor = "Gold";}
else if (employee.numYearsService >= 22) {
    badgeColor = "Silver";
} else if (employee.numYearsService >= 11) {
    badgeColor = "Bronze";
} else if (employee.numYearsService < 6){
    badgeColor = "Red";
}   else {
    badgeColor = "No Badge";
}
console.log(`Years:${employee.numYearsService} Badge Color: ${badgeColor}`);

// Evaluating multiple conditions for truthiness in all conditions
if (employee.numYearsService >= 6 && employee.age >= 23 && employee.department==="Engineering") {
    console.log("Employee meets criteria");
}
else{
    console.log("Employee does not meet criteria");
}

// Evaluating multiple conditions for truthiness in any condition
if (employee.numYearsService >= 3 || employee.age >= 30 || employee.department==="HR") {
    console.log("Employee meets at least one criteria");
}   

// Evaluating for a condition to not be true
if (employee.numYearsService>20 && !employee.isActive){
    console.log("Employee is retired");
}

// Using ternary operator for conditional assignment
if(employee.numYearsService>10){
    employee.annualBonus = 1000;
}
else{
    employee.annualBonus = 500;
}
employee.annualBonus = (employee.numYearsService>10) ? 1000 : 500;
console.log(`Annual Bonus: $${employee.annualBonus}`);
