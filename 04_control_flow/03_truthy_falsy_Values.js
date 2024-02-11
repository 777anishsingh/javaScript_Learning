// ********************************************* Truthy & Falsy Values *********************************************

// TRUTHY VALUES
// "0", "flase", " ",[], {}, function(){}

//example
const userMail = []

if (userMail) {
    // console.log('Got the email');
} else {
    // console.log('Email not got');
}

//FALSY VALUES
// false, 0, -0, BigInt -> 0N, "", NULL, undefined, NaN

// *********************************** how diff things are check in control flow ***********************************

//1. Check for Array
// let arr = []
// if (arr.length === 0) console.log("Invalid Length");
// else console.log("Valid Length");

//2. Check for empty Object
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object empty");
// }

