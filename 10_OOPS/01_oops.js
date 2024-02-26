// what is object literal
const user = {
    userName: "Anish",
    loginCount: 8,
    signIn: true,

    getUserDetails: function () {
        // console.log('Got User Detials from DB');
        // console.log(`userName: ${this.userName}`);
        console.log(this);
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

// what is constructor function ex - new
// const promise1 = new Promise() // new -> make multiple instance using single object

function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.userName}`);
    }
}

const userOne = new User('anish', 12, true)
const userTwo = new User('Hitesh', 13, true) // this overwrites all the values of userone therefore new is used
// console.log(`userOne:`, userOne, `\n`,`userTwo:`, userTwo);