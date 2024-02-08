// singleton -> if object is made from constructor 
// else if its made of literals its not a singleton

//object uses key value pairs

// singleton
// Object.create();

const mySym = Symbol("key1")

// object literals
const user = { // non singleton object
    name: "Anish", // -> by default key i.e name here is stored in form string
    "Full Name": "Anish Singh Butola",
    age: 18,
    // ++ mySym: "MyKey1", // stored as string instead of symbol by this method
    [mySym]: "MyKey1", // Now Stored as Symbol
    location: "Chandiagrh",
    email: "777anish.singh@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}


// console.log(user.email); // method 1
// console.log(user["email"]); //method 2 -> more accurate
// console.log(user."full name");//-> it can be accesed through . therefore [] are used
// console.log(typeof user[mySym]); // to access symbol

// user.location = "Panchkula" // value change
// console.log(user);

// Object.freeze(user) // => freezee any change in the object
// user.location = "Patiala" // -> change not propogated
// console.log(user);

user.greeting = function(){
    console.log("Hello JS User");
}

user.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); // for referencing from the object
}

// console.log(user.greeting); //-> gives function refernce back not a function
console.log(user.greeting());
console.log(user.greetingTwo());