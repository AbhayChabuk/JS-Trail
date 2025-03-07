const name = "Abhay"
const num = 23

// console.log(name + num);

// modern way to represent string concatenation that is string interpolation
console.log(`Hello my name is ${name} and my favourite number is ${num}`);

// Another way to declare string
const gameName = new String ('Efootball')
console.log(gameName)

// console.log(gameName[4]);
// console.log(gameName.search("o"));
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// charAt & indexOf
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

//  substring
const newString = gameName.substring(0, 4)
console.log(newString);

// slice
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// trim
const newName = "    Abhay    "
console.log(newName);
console.log(newName.trim());

// replace
const url = "Abhay@Chabuk"
console.log(url.replace('@', '_'));

// includes
console.log(url.includes('sam'));

// Convert string to array
console.log(url.split('@'));









