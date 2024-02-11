// ********************************************* FOR IN LOOP *********************************************

// ******** specially for object iteration *******

// OBJECT ITERATION
const myObj = {
    js: 'Javascript',
    cpp: 'C++',
    swift: 'Swift by Apple',
    go: 'Go lang'
}

for (const key in myObj) {
    let val = myObj[key] // -> to extract values from keys in object
    // console.log(`${key} - ${val}`);
}

// Array Iteration -> Gives keys/index of the values 
const lang = ['js', 'cpp', 'py', 'rb', 'java']
for (const key in lang) {
    let val = lang[key]
    // console.log(val);
}

//Maps -> Are not iteratable 
const map = new Map()
map.set('IN', 'India')
map.set('US', "USA")
map.set('UK', "United Kingdom")
map.set('IN', 'India')

for (const key in map) {
    console.log(key);
}