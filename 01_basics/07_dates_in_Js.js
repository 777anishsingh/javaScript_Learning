// dates

let dateToday = new Date();

// console.log(typeof dateToday); // Date is object in Js

// console.log(dateToday.toString());
// console.log(dateToday.toDateString());
// console.log(dateToday.toTimeString());
// console.log(dateToday.toLocaleDateString());
// console.log(dateToday.toISOString());
// console.log(dateToday.toJSON());

// let myDate = new Date(2023,0,23) // month starts with 0 in Js
// let myDate = new Date(2023,0,23,5,3)

// let myDate = new Date("2003-02-14") // yyyy-mm-dd
// let myDate = new Date("02-14-2003")
// console.log(myDate.toLocaleString());

//++++++++++ TIME STAMPS +++++++++++++
let timeStamp = Date.now()

// console.log(timeStamp); // gives milisecond values from 1 jan 1970 by default
// console.log(myDate.getTime()); //in miliseconds

// console.log(Math.floor(Date.now() / 1000)); // to convert mSec to Sec

let newDate = new Date()
// console.log(newDate.getMinutes());

var dateSet = newDate.toLocaleString('default',{ //-->('to which international system data needs to be',  {object values} )
    weekday: "short",
    era: "long"
})

// console.log(dateSet);


