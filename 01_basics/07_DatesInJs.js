// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// // o/p : Sat Mar 08 2025 16:58:06 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());
// // o/p : Sat Mar 08 2025

// console.log(myDate.toISOString());
// // o/p : 2025-03-08T16:58:06.764Z

// console.log(myDate.toLocaleDateString());
// // o/p :  3/8/2025

// console.log(myDate.toLocaleString());
// // o/p : 3/8/2025, 4:58:06 PM

// console.log(myDate.toLocaleTimeString());
// // o/p : 4:58:06 PM

// console.log(typeof myDate);   // Date is an object

// let myCreatedDate = new Date(2025, 2 , 8)

// let myCreatedDate = new Date(2025, 2 , 8 , 3 ,1)
// o/p : 3/8/2025, 3:01:00 AM

let myCreatedDate = new Date("2025-03-8") 
// o/p: 3/8/2025, 12:00:00 AM

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp  = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);  // o/p : 2025-03-08T17:25:16.997Z
// console.log(newDate.getDate()); // o/p : 8
// console.log(newDate.getDay()); // o/p : 6
// console.log(newDate.getFullYear()); // o/p : 2025
// console.log(newDate.getHours()); // o/p : 17
// console.log(newDate.getMilliseconds()); // o/p : 997


newDate.toLocaleString('default',{
    weekday : "long"
})



