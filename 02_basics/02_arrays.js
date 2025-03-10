const marvel_heros = ["Antman", "Spiderman", "Batman"]
const dc_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// o/p : [ 'Antman', 'Spiderman', 'Batman', [ 'Superman', 'Batman', 'Flash' ] ]

// console.log(marvel_heros[3]);
// o/p : [ 'Superman', 'Batman', 'Flash' ]

// console.log(marvel_heros[3][1]);
// o/p : Batman

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);
// o/p : [ 'Antman', 'Spiderman', 'Batman', 'Superman', 'Batman', 'Flash' ]

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);
// o/p : [ 'Antman', 'Spiderman', 'Batman', 'Superman', 'Batman', 'Flash' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)
/* 
o/p :
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/



console.log(Array.isArray("Abhay"));  // o/p : false
console.log(Array.from("Abhay"));
// o/p : [ 'A', 'b', 'h', 'a', 'y' ]

console.log(Array.from({name : "Abhay"}));  // o/p : [] - Interview question.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// o/p : [ 100, 200, 300 ]
