// In shopping cart we dont know how many arguments are going to come to tackle this we use rest operator -> (...) syntax same as spread operator but different usecase
function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 300, 400, 500));
//// OUTPUT: [ 200, 300, 400, 500 ]

function calculateCartPrice2(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice2(200, 300, 400, 500));
////OUTPUT: [ 400, 500 ]

// ++++++++++++++++++++++++++++Object and Function++++++++++++++++++++++++++++

// function handleObject(anyobject) {
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject({
//     username: "anish",
//     price: "199"
// })

const myNewArr = [200, 400, 100, 600]

function returnSecondVal(getArr) {
    return getArr[1]
}

// console.log(returnSecondVal(myNewArr))
console.log(returnSecondVal([200, 400, 100, 600]))

