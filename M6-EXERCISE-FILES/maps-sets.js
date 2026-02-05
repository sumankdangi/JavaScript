// Creating an object
const obj = {
    firstName : "Suman",
    lastName : "Sharma",
};

// Creating a Map
const map1 = new Map();
map1.set("firstName", "Suman");
map1.set("lastName", "Sharma");
console.log("Map1:", map1);

// Using Non-String Keys in Map
map1.set(new Date().getTime(),"Number Only");
map1.set([],"Array Key");
map1.set(() => "Hi", "Function Key");
console.log("Map1 with Non-String Keys:", map1);

// Accessing Values in a Map
console.log("First Name from Map:", map1.get("firstName"));
console.log(map1.get([])); // undefined, different reference

// Deleting Values from a Map
map1.delete("firstName");
console.log(`Map Size after deletion: ${map1.size}`);


// Creating a Set
const set1 = new Set();
set1.add("Ram");

// Checking the Set size
console.log(`Set Size: ${set1.size}`); // Output: 1

// Trying to add duplicate value
set1.add("Ram");
console.log(`Set Size after adding duplicate: ${set1.size}`); // Output: 1


//Adding in Complex Values
const team1 = new Set();
const player1 = {name: "Siva", role: "Batsman"};
const player2 = {name: "Sita", role: "Bowler"};
team1.add(player1);
team1.add(player2);
console.log("Team1 Set:", team1);
console.log(`Team1 Size: ${team1.size}`); // Output: 2


// //Deleting from Set
// console.log("Deleting player1:", team1.delete(player1)); // true
// console.log("Team1 after deletion:", team1);
// console.log(`Team1 Size after deletion: ${team1.size}`); // Output: 1


// // Removing values from Set
// team1.delete(player2);
// console.log(`Team1 Size after removing all players: ${team1.size}`); // Output: 0

// Deleting if a Set has a value
console.log("Does team1 have player2?", team1.has(player2)); // true

// Remove Values from Set
team1.delete(player1);
team1.delete(player2);
console.log(`Team1 Size after removing all players: ${team1.size}`); // Output: 0


// Removing all values from Set
team1.clear();
console.log(`Team1 Size after clear(): ${team1.size}`); // Output: 0