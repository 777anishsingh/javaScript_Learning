// ************************************* FILTERS *************************************

const myNums = [1, 2, 3]

//1 way -> using simple func
// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`accumilator: ${acc}, current value: ${currVal}`);
//     return acc + currVal
// }, 0)

//2 way -> using arrow func
const myTotal = myNums.reduce((acc, currVal) => (acc + currVal), 0)

// console.log(myTotal);

//practical example of shopping cart
const shoppingCart = [
    {
        itemName: 'Js course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 999
    },
    {
        itemName: 'Flutter course',
        price: 5999
    },
    {
        itemName: 'DSA course',
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice);