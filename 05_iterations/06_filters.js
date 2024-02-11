// ************************************* FILTERS *************************************

// For Each doesnt return any value by default
// const coding = ['js', 'ruby', 'java', 'python', 'cpp']
// const values = coding.forEach((item) => {
//     console.log(item);
// })

// console.log((values));

// ------------------------- SOLUTION -------------------------
// 1st way
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNum.filter((num) => num > 4) // return the values whereas foreach was not able to return
// console.log(newNum);

// 2nd way
const myNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum2 = myNum.filter((num) => {
    return num > 4
})
// console.log(newNum);

// ************************************* PRACTICAL USE OF FILTERS *************************************

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === 'History') // -> history books

userBooks = books.filter((bk) => { // -> books publish after 1995
    return bk.publish > 1995
})

userBooks = books.filter((bk) => { // -> books publish after 1995 and is of History 
    return (bk.publish > 1995 && bk.genre === 'History')
})

console.log(userBooks);
