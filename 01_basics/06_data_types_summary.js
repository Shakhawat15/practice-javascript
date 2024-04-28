// There are two data types of data 

// Primitive:
/**
 * Number
 * Boolean
 * String
 * null
 * undefined
 * symbol
 * bigint
 */

const name = "Shakhawat"
const age = 25
const isSingle = true
const city = null
let state;

let id = Symbol('123');
let anotherId = Symbol('123')

// console.log(id === anotherId);

let bigNumber = 84753897534975937493484n

// Reference (Non Primitive):
/**
 * Array
 * Object
 * Functions
 */

const fruits = ["Apple", "Orange", "Banana"]

const userInfo = {
    name: "Shakhawat",
    age: 25
}

const myFunction = function () {
    console.log("Hello Shakhawat");
}

// JavaScript is Dynamical data type