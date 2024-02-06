const name = "Anish"
const repoCount = 50

// console.log(name + repoCount); // out dated

// Now we use ` ` due to its functions like string interpolation

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// we can also declare string using
const gameName = new String('Anish_Sing_Butola_King')

// functions of string
// console.log(gameName[0]);
// console.log(gameName.__proto__); //object type
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5)); // to find charater at a position
// console.log(gameName.indexOf('i'));

const newStr = gameName.substring(0, 4)
console.log(newStr);

const anotherStr = gameName.slice(-8, 4) // we can also pass -ve values and it goes back to index and atart from there
console.log(anotherStr);

// when we dont want to store extra whitespace in words
const nameStr = "     AnishSingh     "
console.log(`When trim not used: ${nameStr}`);
console.log(`When trim used: ${nameStr.trim()}`);

// replace wewant to replace any thing in string
const url = "https://anish.com/anish%20singh"
console.log(url.replace('%20','-'));

// when we want to check anything is present in the string
console.log(url.includes('anish'));

// if we want to convert string into array
console.log(gameName.split('_'));