const accountId = 144553
let accountEmail = "anishsng007@gmai.com"  //no scope problem
var accountPassword ="1234567"
accountCity = "Chandigarh"
let accountState

/*
prefer not to use var
because of issue in block scope and functional scope
*/

// accountId = 2 // not allowed for const

accountEmail = "77anish.singh@gmail.com"
accountPassword = "2122121"
accountCity = "Panchkuala"

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])