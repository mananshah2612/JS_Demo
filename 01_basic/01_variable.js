const accountId = 4122
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"

console.log(accountId);
// accountId = 2 // This is not allowed

accountEmail = "dfe@gmail.com"
accountPassword = "12121212"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity]);

// i will use let keyword instead of var keyword because issue in block scope and functional scope.