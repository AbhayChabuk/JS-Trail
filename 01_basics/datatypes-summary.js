// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.23

const isLoggedIn = true
const outsideTemp = null
let username;

// console.log(username);  // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);  // False

const bigNumber = 90212367062346478543223n   // BigInt



// Reference (Non Primitive)

// Array, Objects, Functions


// Array
const heros = ["Dwyane Johnson", "Ryan Gosling", "Will Smith"];


// Object
let myObj = {
    name : "Abhay",
    age : 21,
}


//Function
const myFunction = function(){
    console.log("My name is Abhay")
}


// Function to find datatype of variable

// console.log(typeof bigNumber);
// console.log(typeof myFunction);
// console.log(typeof heros);
// console.log(typeof myObj);




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive)  , Heap (Reference)

let myName = "AbhayChabuk"

let anothername = myName
anothername = "Abhya"

// console.log(myName);
// console.log(anothername);


let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "abhay@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);