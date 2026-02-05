// Creating dates
let date1 = new Date("2026-12-26T10:30:00");
console.log(`Date1:${date1}`); // Output: Date1:Sat Dec 26 2026 10:30:00 GMT+0000 (Coordinated Universal Time)

// Display just the calendar date portion
console.log(`Calendar Date :${date1.toDateString()}`); // Output: Date Portion:Sat Dec 26 2026

// Display just the time portion
console.log(`Time :${date1.toTimeString()}`); // Output: Time Portion:10:30:00 GMT+0000 (Coordinated Universal Time)


// Display a local specific format
console.log(`Locale en-US :${date1.toLocaleString('en-US')}`); // Output: Locale en-US :12/26/2026, 10:30:00 AM
console.log(`Locale de-DE :${date1.toLocaleString('de-DE')}`); // Output: Locale de-DE :26.12.2026, 10:30:00
console.log(`Locale ja-JP :${date1.toLocaleString('ja-JP')}`); // Output: Locale ja-JP :2026/12/26 10:30:00 

// Display just the time
console.log(`Locale Time en-US :${date1.toLocaleTimeString('en-US')}`); // Output: Locale Time en-US :10:30:00 AM
console.log(`Locale Time de-DE :${date1.toLocaleTimeString('de-DE')}`); // Output: Locale Time de-DE :10:30:00
console.log(`Locale Time ja-JP :${date1.toLocaleTimeString('ja-JP')}`); // Output: Locale Time ja-JP :10:30:00      


// Displaying the locale-specific time 
console.log(`Locale Time en-US :${date1.toLocaleTimeString('en-US')}`); // Output: Locale Date en-US :12/26/2026
console.log(`Locale Time de-DE :${date1.toLocaleTimeString('de-DE')}`); // Output: Locale Date de-DE :26.12.2026
console.log(`Locale Time ja-JP :${date1.toLocaleTimeString('ja-JP')}`); // Output: Locale Date ja-JP :2026/12/26    

// Custom date string
let options = {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Asia/Kathmandu"
};
console.log(`Custom Date:${date1.toLocaleString('en-IN', options)}`); // Output: Custom Date:26/12/26, 4:15 PM  
console.log(`Custom Date:${date1.toLocaleString('de-DE', options)}`); // Output: Custom Date:26.12.26, 16:15
console.log(`Custom Date:${date1.toLocaleString('ar-SA', options)}`); // Output: Custom Date:2026/12/26, 16:15