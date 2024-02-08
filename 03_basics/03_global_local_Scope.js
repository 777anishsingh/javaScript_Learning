// var c = 300

// if (1) {
//     let a = 10
//     const b = 20
//     var c = 30 // it works abnormally by going out of the defined scope
// }

// // console.log(a);
// // console.log(b);
// console.log(c); 

//++++++++++++++++++++++ block and global scope ++++++++++++++++++++++++++++
// let a = 300 // global variable
// if (1) {
//     let a = 10 // block variable
//     const b = 20
//     console.log("Value of a in Block Scope", a);
// }
// console.log("Value of a in Global Scope", a);

//++++++++++++++++++++++ nested scope ++++++++++++++++++++++++++++
function one() {
    const username = "anish"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // out of scope

    two()

}
// one()

// +++++++++++++++++++++++++++++++  INTERESTING +++++++++++++++++++++++++++++++
// 1st way of declaring func
function addOne(num) {
    return num + 1
}
addOne(5)

// 2nd way of delcaring func
const addTwo = function (num) {
    return num + 2
}
addTwo(5)   



