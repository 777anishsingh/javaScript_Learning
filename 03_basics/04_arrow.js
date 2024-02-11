const user = {
    username: "Anish",
    price: 999,

    welocmeMsg: function () { // this keyqord used to have current context of this scope
        console.log(`${this.username}, Welcome to webiste`);
        console.log(this);

    }
}

// user.welocmeMsg()
// user.username="Sammer"
// user.welocmeMsg() 

// console.log(this); //-> gives empty object in NODE environment
//-> but in browser Window Will be the global object that will show up


// +++++++++++++++++++ IF THIS IS PRINTED INSIDE ANY FUNC +++++++++++++++++++
function func() {
    let username = "Butola"
    console.log(this); // -> this work like it use to work in object in a function
}
// func()

const chai = function () {
    let username = "Butola"
    console.log(this.username);
}
// chai()

//++++++++++++++++++++++++++++++++++ ARROW FUNCTION ( => ) ++++++++++++++++++++++++++++++++++++++
//syntax 
//1st Way
const addTwo1 = (n1, n2) => { return n1 + n2 }
// console.log(addTwo1(1,2));

//2nd Way -> implicit return
const addTwo2 = (n1, n2) => (n1 + n2) // -> if we remove {} and use either () or no bracket then we dont not require to use return keyword
// console.log(addTwo2(6, 9));

//3rd way -> if we want to return an object
const returnObject = () => ({ username: "Anish Singh Butola" })
console.log(returnObject())



//*************************** working of this keyword in arrow function ****************
const arrowFunc = () => {
    let username = "Butola"
    console.log(this); // this doesnt work in arrow func
}
// arrowFunc()