// Primitive:
/**
 * 7 types:
 * =========
 * String
 * Number
 * Boolean
 * null
 * undefined
 * Symbol
 * BigInt
 */

// JavaScript dynamic typed language

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

const bigNumber = 589345375739574398745349n

// console.log(id === anotherId);
// console.log(id);
// console.log(anotherId);

// Reference (Non Primitive)
/**
 * Array
 * Objects
 * Functions
 */

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "shakhawat",
    age: 28
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof outsideTemp);

