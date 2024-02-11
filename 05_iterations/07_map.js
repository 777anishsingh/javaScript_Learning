// ************************************* FILTERS *************************************

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNum.map((num) => num + 10)

// ******************************** CHAINING IN MAP and FILTERS ********************************
const newNums = myNum
    .map((num) => num * 10) //1st executed then transfered to next chain
    .map((num) => num + 1)
    .filter((num) => num >= 40)
console.log(newNums);