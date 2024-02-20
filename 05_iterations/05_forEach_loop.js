// ********************************************* FOR EACH LOOP *********************************************
// +++++++++++++ MOST USED FOR ARRAY +++++++++++++

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// 1st way
coding.forEach(function (itr) {
    // console.log(itr);
})

// 2nd way
coding.forEach((itr) => {
    // console.log(itr);
})

// 3rd way
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)

// 4th way
coding.forEach((itr, index, coding) => {
    // console.log(itr, index, coding);
})

// +++++++++++++++ if array is [{},{},{}] ++++++++++++++++++++
const myCoding = [
    {
        langNmae: 'Javascript',
        fileName: 'js'
    },
    {
        langNmae: 'C++',
        fileName: 'cpp'
    },
    {
        langNmae: 'Java',
        fileName: 'java'
    }
]

myCoding.forEach((item) => {
    // console.log(item.fileName);
    // console.log(item.langNmae);
    // console.log(item.coding);
})



