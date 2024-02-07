const marvelHeros = ["Thor", "IronMan", "Captain America"]
const DCHeros = ["Batman", "SIkhMan", "Superman", "Wonder Woman"]

// marvelHeros.push(DCHeros) // WHole DCHeros array will be taken as a single element
// console.log(marvelHeros);

// const newHeroArr = marvelHeros.concat(DCHeros) // merges both array into new array

//we can also use spread operator[...arr1, ...arr2, ...arr3]
const newHeroArr = [...marvelHeros, ...DCHeros] // it spreads all the values individually
// console.log(newHeroArr); 

//to flat a complex array
const newArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usableArr = newArr.flat(Infinity);
// console.log(usableArr);

// to check is that an array and if not then convert it
// console.log(Array.isArray("Anish"))
// console.log(Array.from("Anish"));
// console.log(Array.from({name: "Anish"})); //+++ IMP +++

// to convert values into array directly
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))