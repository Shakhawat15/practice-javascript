const name = "shakhawat";
const repoCount = 88;

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("beach-buggy-racing");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('b'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(8, -4)
// console.log(anotherString);

const newStringOne = "   shakhawat    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://shakhawat.com/shakhawat%20hossen"

const newUrl = url.replace('%20', '-')

// console.log(newUrl);

// console.log(url.includes('shakhawat'));

console.log(gameName.split('-'));