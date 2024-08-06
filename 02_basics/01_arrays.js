// arrays

//array decleration
const myArr = [0, 1, 2, 3, 4, 5]
// const myHero = ["Batman", "Superman", "spiderman"]

// const myArr2 = new Array(12,23,34,45);
// console.log(myArr2);

//array methods

// myArr.push(6);
// myArr.push(7);
// myArr.push(8);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// console.log(myArr);
// myArr.unshift(69) // to insert at starting of the array
// console.log(myArr);
// myArr.shift(69) // to pop at starting of the array
// console.log(myArr);

// to search a particaular element in the array
// console.log(myArr.includes(4));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // to convert array into string
// console.log(myArr);
// console.log(typeof newArr);

// slice, splice
// console.log("A", myArr);

// slice => does not includes last range and does not manipulate the original array
// const myn1 = myArr.slice(1,3) // doesnt include the last range
// console.log(myn1);
// console.log("B", myArr);

// splice => also includes last range and also manipulate the original array
const myn2 = myArr.splice(1,3) 
console.log(myn2);
console.log("C", myArr);




