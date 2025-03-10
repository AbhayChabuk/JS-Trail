// singleton

// object literals

const JsUser = {
    name : "Abhay",
    age : 21,
    location: "Talegaon Dabhade",
    email: "chabukabhay@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday"]
}

console.log(JsUser.email);   // not more suitable to work
// o/p : chabukabhay@gmail.com

console.log(JsUser["email"]);
// o/p : chabukabhay@gmail.com