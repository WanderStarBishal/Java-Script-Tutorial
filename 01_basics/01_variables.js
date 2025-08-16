const AccountId = 1234;
let accountname = "Bishal Mandal";
var Password = "3422";
accountcity = "kolkata";

// AccountId = 2

accountname = "paglu";
Password = "4355";
accountcity = "guwhati";
let accountstate;

/*
prefer not to use var in your javascript code
because of the issue in block scope and functional scope
*/

console.log(AccountId);
console.table([AccountId, accountname, Password, accountcity, accountstate]);