// Object SingleTon Method

const tinderUser = new Object() // singleton Object
// const tinder = {} // -> non singleton object

tinderUser.id = "777"
tinderUser.name = "Sam Luthra"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// +++++++++++++++++++ Object nesting  +++++++++++++++++++
const regUser = {
    email: "abutola_be21@thapar.edu",
    fullName: {
        userFullName: {
            firstName: "Anish",
            middleName: "Singh",
            lastName: "Butola"
        }
    }
}

// console.log(regUser.fullName.userFullName); // accessing nested object

// +++++++++++++++++++ Object merging +++++++++++++++++++
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = {obj1, obj2}// it creates object in object insted of single object

// method 1 -> assign method
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// method 2 -> spread operator (...)
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

// +++++++++++++++++++ when values come from database +++++++++++++++++++
const newUser = [ // object operated array
    {
        id: "1",
        email: "h@gmail.com"
    },
    {
        id: "2",
        email: "a@gmail.com"
    }
]

// we can access thorugh
// console.log(newUser[1].email) // -> accessing object at index 1 

// some useful techniques
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // -> all keys stored in array
// console.log(Object.values(tinderUser)); // -> all values stored in array
// console.log(Object.entries(tinderUser)); // -> to create array in array of key value pair
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // -> to check if a property is present in object 

//+++++++++++++++++++++++++++++ OBJECT DESTRUCTURING & JSON API +++++++++++++++++++++++++++++++

const course = {
    courseName: "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor very cumborsum method, therefore we use
const { courseInstructor: instructor } = course
console.log(instructor); // now writing only instructor will work

// +++++++++++++++++++++++++++++ DESTRUCTURING Example from REACT +++++++++++++++++++++++++++++
const navbar = ({ company }) => {

}
navbar(company = "Hitesh")

// +++++++++++++++++++++++++++++ CONCEPT OF API +++++++++++++++++++++++++++++
// API are stored in JSON file like an object without name and with string key

// EX of JSON API
// {
//     "name": "Hitesh",
//     "courseName": "JS in Hindi",
//     "price": "Free"
// }

// also it comes like in array of object
// [
//     {},
//     {},
//     {},
//     {}
// ]

