// ********************************************* if *********************************************
// if (condition) { //-> condition should be true

// }

// example
// const isUserLoggedIn = true
// if(isUserLoggedIn){
//     console.log(`Login`);
// }

// Short Hand Notation
// const balance = 1000
// if(balance>500)
//     console.log('Test');

// ********************************************* comparison operators *********************************************
// <   -> less than
// >   -> greater than
// <=  -> les than equal to
// >=  -> greater than equal to
// ==  -> toCheck if equal
// !=  -> not equal
// === -> comparison + type checking (strict equal to)

// Example
// if(2=='2'){
//     console.log(`Exected == `);
// }
// if(2==='2'){
//     console.log(`Exected ===`);
// }

// ********************************************* IF-ELSE *********************************************

// let temp = 45
// if (temp < 45) {
//     console.log(`Temp is ${temp}`);
// }
// else {
//     console.log(`Temp is not less than 50`);
// }

// const score = 200
// if(score > 100){
//     const power = 'FLY'
//     console.log(`user power: ${power}`);
// }

// ********************************************* Else  If *********************************************
// let balance = 10
// if (balance < 50) {
//     console.log("less than 50");
// } else if (balance < 45) {
//     console.log("less than 45");
// } else if (balance < 30) {
//     console.log("less than 30");
// }

// ********************************************* Turnary Operator *********************************************
let teaPrice = 100
teaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");

// ********************************************* Logical Operator *********************************************


const userLoggedIn = true
const debitCard = true

//1. AND
if (userLoggedIn && debitCard) {
    // console.log(`&& operator`);
}
//2. OR
if (userLoggedIn || debitCard) {
    // console.log(`|| Operator`);
}

//3. Nullish Coalescing Operator (??): null undefined -> Special Case used in DB
let val1;
// val1 = 5 ?? 10
// val1 = undefined??10
// val1 = undefined ?? null // -> o/p = null
// val1 = null ?? undefined // -> o/p = undefined
// val1 = null ?? 10 ?? 200
// console.log(val1);




