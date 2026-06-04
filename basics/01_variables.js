const accountId = 144553
let accountEmail = "vivekhadiya@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed
accountEmail = "viv@gmail.com"
accountPassword = "2211"
accountCity = "surat"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var because of issue in scope and functional scope
*/
