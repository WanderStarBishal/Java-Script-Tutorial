// singleton
// object.create

// object literals

let myScr = Symbol("key1")

const JsUser = {
    Name : "keshavBund",
    [myScr] : "bundkakhiladi",
    Age : 400,
    Location : "Pannigargh",
    Email : "Bundkachatora@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["futarday","virginday"]
}

console.log(JsUser.Email);
console.log(JsUser["Email"]);
// console.log(JsUser["full name"]);
console.log(JsUser[myScr]);
console.log(JsUser);


// Object.freeze(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
    
}

console.log(JsUser.greeting);


