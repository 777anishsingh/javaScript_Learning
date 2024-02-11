// ********************************************* FOR OF LOOP *********************************************

// ["","",""] -> array of strings
// [{},{},{}] -> array of Objects

//1. On integer array
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

//2. for char array/string
const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//3. Maps -> Holds no duplicate values
const map = new Map()
map.set('IN', 'India')
map.set('US', "USA")
map.set('UK', "United Kingdom")
map.set('IN', 'India')

console.log(map);

for (const [key, val] of map) {
    // console.log([key, val]);
}

//4. Object -> Object is not iteratable by for of loop ****
// const myObj = {
//     'Game1': 'NFS',
//     'Game2': 'Tekken',
//     'Game3': 'GTA V'
// }

// for (const [key,val] of myObj) {
//     // console.log(key);
// }




