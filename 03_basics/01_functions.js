// function declaration
function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}

// sayMyName // -> Refernce of Function
// sayMyName() // -> Execution of funtion

//Do not returns any value
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }
// addTwoNumbers(6,9)
// addTwoNumbers(6,"9")
// addTwoNumbers(6,"a")

// returns a value
function addTwoNumbers(number1, number2) {
    return number1 + number2
    // console.log("i will never be printed"); // -> as functions return call is made this will never be printed
}

const res = addTwoNumbers(6, 9)
// console.log("Result:", res);

// +++++++++++++++++++++++++++++ WAYS TO TAKE INPUTS IN FUNC +++++++++++++++++++++++++++++++

function loginUserMsg(username = "sam") { // it sets username as sam by default and overwrites if any value passed else uses default value

    if (!username) {
        console.log("Please Enter Username");
        return
    }

    return `${username} just logged in`
}
// console.log(loginUserMsg("777anish.singh"))
console.log(loginUserMsg()); // -> thows undefined

