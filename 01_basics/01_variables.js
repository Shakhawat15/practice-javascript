const accountId = 36876;
let accountEmail = "shakhawat@gmail.com"
var accountPassword = "26379"
accountCity = "Barisal" // We can declare a variable without using keyword but it is not the good practice
// accountAddress; // If we declare a variable without using keayword then we need to initialze at the same time
let accountState // If we decalare a variable without initializing any value then when we print it give us the "undefind"

// const acountName; // When declare constant variable it need to be initialization at the same time
// accountId = 5555 // It is not possible to assign value in constant variable
// console.log(accountId);

accountEmail = "sourov@gmail.com";
accountPassword = "273849"
accountCity = "Banaripara"

/**
 * Now in this days we don't use var keyword for variable declaration we use let keyword.
 * Because: var has no block scope and functional scope like {}
 */

console.table({
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
})

