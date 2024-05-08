const numbers = [1, 2, 3, 4, 5]

const fruits = ['Banana', 'Orange', 'Apple']

// console.log(fruits[0]); // Banana
// console.log(typeof numbers); // object

const myArray = new Array(10, 20, 30, 40, 50)

// console.log(myArray[2]); // 30
// console.log(typeof myArray); // object
// console.log(myArray.length); // 5

// Array Methods:

// myArray.push(60) // [10, 20, 30, 40, 50, 60]
// myArray.pop() // [10, 20, 30, 40]
// myArray.unshift(100) // [100, 10, 20, 30, 40, 50]
// myArray.shift() // [20, 30, 40, 50]

// console.log(myArray);

// console.log(myArray.includes(50)); // true
// console.log(myArray.indexOf(20)); // 1
// console.log(myArray.indexOf(200)); // -1

const newArr = myArray.join(); 

// console.log(myArray);
// console.log(newArr); // 10,20,30,40,50
// console.log(typeof newArr); // string

// Slice Splice:

// console.log("A:", myArray);
// const myn1 = myArray.slice(1,3)
// console.log("Slice:",myn1);

// console.log("B:", myArray);
// const myn2 = myArray.splice(1,3)
// console.log("Splice:", myn2);

// console.log("C:", myArray);


const marvel_heros = ['thor', 'spiderman', 'ironman'];

const dc_heros = ['superman', 'batman', 'flash']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // [ 'thor', 'spiderman', 'ironman', [ 'superman', 'batman', 'flash' ] ]

const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros); // [ 'thor', 'spiderman', 'ironman', 'superman', 'batman', 'flash' ]

const all_heros = [...marvel_heros, ...dc_heros]

// console.log(all_heros); // [ 'thor', 'spiderman', 'ironman', 'superman', 'batman', 'flash' ]

const another_array = [2, 4, 6, [4, 6, 7], 7, 3, [4, 2, [7, 4]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array); // [ 2, 4, 6, 4, 6, 7, 7, 3, 4, 2, 7, 4 ]

// console.log(Array.isArray("Shakhawat")); // false
// console.log(Array.from("Shakhawat"));  // [ 'S', 'h', 'a', 'k', 'h', 'a', 'w', 'a', 't' ]

// console.log(Array.from({name: "Shakhawat"})); // [] interesting

const num1 = 100;
const num2 = 200
const num3 = 300

console.log(Array.of(num1, num2, num3)); // [ 100, 200, 300 ]

