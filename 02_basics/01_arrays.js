// array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[0]); // o/p: 0

const myHeros = ["Batman", "Ironman", "Spiderman"]
// console.log(myHeros[3]);  // o/p: Spiderman

// another method to declare array

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2.push("Superman"));  
// o/p: [1,2,3,4,'Superman']

// console.log(myArr2);
myArr2.pop() 
// console.log(myArr2);  // o/p: [1, 2, 3, 4]

myArr2.unshift("Abhay")
// console.log(myArr2);  // o/p: ['Abhay', 1, 2, 3]
myArr2.shift() // Removes unshift value

// console.log(myArr2); // o/p : [1, 2, 3]

// console.log(myArr.includes(9));  // o/p : false 
// console.log(myArr.indexOf(3));   // o/p : 3

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice & splice

console.log("A " , myArr);
// o/p : A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);
// o/p : [ 1, 2 ]

console.log("B", myArr);
// o/p : B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)

console.log("C", myArr);
// o/p : C [ 0, 4, 5 ]

console.log(myn2);
// o/p : [ 1, 2, 3 ]








