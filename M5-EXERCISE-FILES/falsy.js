// Simple function to log out truthiness
const isTruthy = (name,exp) => {
    console.log(`${name}:${Boolean(exp)}`);
}

// Numbers
isTruthy("Val1", 0);          // false
isTruthy("Val2", 1);          // true
isTruthy("Val3", -1);         // true
isTruthy("Val4", 42);         // true       
isTruthy("Val5", NaN);        // false
isTruthy("Val6", 0n);         // false

// Boolean null and undefined
isTruthy("Val77", undefined); // false
isTruthy("Val8", null);      // false
isTruthy("Val9", false);     // false
isTruthy("Val10", true);     // true    

// Strings
isTruthy("Val11", "");          // false
isTruthy("Val12", "Hi");        // true  
isTruthy("Val13", "false");    // true
isTruthy("Val14", "0");        // true
isTruthy("Val15", "true");      // true

// Objects
isTruthy("Val16", {});      // true
isTruthy("Val17", []);         // true
isTruthy("Val18", function(){});   // true

// Undefined variable
let var1;
isTruthy("Val19", var1);      // false
