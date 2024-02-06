//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function () {
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack (primitive), Heap (non primitive)

// let myYoutubeName = "AnishSingh.com"
// let anotherName = myYoutubeName
// anotherName = "Butola"

// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    email:"77anish.singh@gmail.com",
    upi:"9501377424@upi"
}

let userTwo = userOne

userTwo.email = "samluthra76@gmail.com"

// due to reference heap memory there will be change in both the memory

console.log(userOne.email);
console.log(userTwo.email);