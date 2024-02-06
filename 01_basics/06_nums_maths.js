const score = 69
// console.log(score);

// const balance = new Number(6969.9696)
// console.log(balance);

// console.log(balance.toString()); //converted to string and all string property now exist for it
// console.log(balance.toFixed(2)); //fixes the percision after decimal point to x values

const otherNum = 123.8969
// console.log(otherNum.toPrecision(3)); // precision upto to x values

const hundereds = 1000000
// console.log((hundereds.toLocaleString())); // to represent number into a indian/international number system

//++++++++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math); //=>it is an object in JS
// console.log(Math.abs(-8)); //=> -ve to +ve
// console.log(Math.round(69.53)); // round off
// console.log(Math.ceil(23.6)); // pics the ceil value of the float value
// console.log(Math.floor(4.6)); // pics the floor value of the float value
// console.log(Math.min(69,1,23,5));
// console.log(Math.max(69,4,23,5));

console.log(Math.random()); //mostly used => generates rando values between 0 to 1 by default

var num = (Math.random() * 10) + 1; // to gurantee the values above 1 and below 10
console.log(Math.floor(num)); //to get integer value

//formula to get values between a range
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min))





