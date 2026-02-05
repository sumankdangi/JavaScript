// Employee
let employee = {
    firstName: "Suman Kumar",
    lastName: "Dangi",
    startDate: "2023-03-01",
    numYearsService:4,
    age: 28,
    isActive: true,    
    department: "Engineering",
    title: "Software Engineer",
    yearsOfService: 5,
    salary: 60000
};

switch (employee.department) {
    case "Engineering":
        console.log('Meetings are on Monday at 10 AM.');
        break;
    case "Human Resources":
        console.log('Meetings are on Tuesday at 11 AM.');
        break;  
    case "Marketing":
        console.log('Meetings are on Wednesday at 2 PM.');
        break;
    case "Sales":
        console.log('Meetings are on Thursday at 3 PM.');
        break;
    default:
        console.log('Please check with your manager for meeting times.');
}
