const accountId = 238861;
let accountEmail = 'shakhawat@gmail.com'
var accountPassword = "123456"
accountCity = "Barisal" // possible but not good
let accountState;

// accountId = 23 // not allowed
accountEmail = 'sourov@gmail.com'
accountPassword = "654321",
accountCity = 'Banaripara'

/**
 * Prefer not to use var
 * because of issue in block scope and functional scope
 */

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])