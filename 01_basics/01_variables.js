const accountId = 144553
let accountEmail = "chabukabhay@gmail.com"
var accountPassword = "12345"
accountCity = "Kolhapur" 
let accountState;

// accountId = 2 //not allowed

accountEmail = "abhay.chabuk@nmiet.edu.in"
accountPassword = "123678"
accountCity = "Talegaon"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/