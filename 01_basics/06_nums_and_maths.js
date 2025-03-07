const score = 100
console.log(score);


const balance = new Number(100)
console.log(balance);
console.log(`Type of balance is ${typeof(balance)}`);

console.log(balance.toString().length);

// Precision value
console.log(balance.toFixed(2));

const value = 123.56346
console.log(value.toPrecision(3));     // o/p : 124
console.log(value.toPrecision(2));     // o/p : 1.2e+2

// Local Standards
const hundreds = 1000000

console.log(hundreds.toLocaleString());   // o/p : 1,000,000. in Js local standards are set  as per US
// so to get in Indian standards we use
console.log(hundreds.toLocaleString('en-IN'));