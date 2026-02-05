// Creating objects with an object literal(preferred way to create objects)
let obj1 = {};

// Creating objects with the Object() constructor
let obj2 = new Object();

// Populate properties on an object
obj1.firstName = "Suman";
obj1.lastName = "Dangi";
obj1.isActive = true;
obj1.startDate = new Date("2020-01-15");
obj1.vacationDays = 15;
obj1.age = 26;
console.log(obj1);


// Populating an object on creation using object literal syntax
let obj3 = {
    firstName: "Suman",
    lastName: "Dangi",
    isActive: true,
    startDate: new Date("2020-01-15"),
    vacationDays: 15,
    age: 26
};
console.log(obj3);


// Accessing object properties
console.log("First Name: " + obj3.firstName);
console.log("Last Name: " + obj3["lastName"]);      

// Deleting a property from an object
delete obj3.age;
console.log(obj3);

// Accessing a property that does not exist
console.log(`Non-existing Value: ${obj3.middleName}`)


// Objects are passed by reference not by values
let obj4 = obj3; // obj4 references the same object as obj3
obj4.firstName = "Ram"; // Modifying obj4 also affects obj3
console.log("obj3 First Name: " + obj3.firstName); // Output: Ram
console.log("obj4 First Name: " + obj4.firstName); // Output: Ram