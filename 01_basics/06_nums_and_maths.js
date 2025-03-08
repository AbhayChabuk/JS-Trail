const score = 100
// console.log(score);


const balance = new Number(100)
// console.log(balance);
// console.log(`Type of balance is ${typeof(balance)}`);

// console.log(balance.toString().length);

// Precision value
// console.log(balance.toFixed(2));

const value = 123.56346
// console.log(value.toPrecision(3));     // o/p : 124
// console.log(value.toPrecision(2));     // o/p : 1.2e+2

// Local Standards
const hundreds = 1000000

// console.log(hundreds.toLocaleString());   // o/p : 1,000,000. in Js local standards are set  as per US
// so to get in Indian standards we use
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++

//console.log(Math);
// console.log(Math.abs(-3));  // abs() negative becomes +ve and positive remains same
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(5));
// console.log(Math.min(3,6,7,1));
// console.log(Math.max(10,2,11,23));


// console.log(Math.random());  // Here value will always come between 0 to 1

// console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);