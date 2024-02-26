// ********************************************* PROMISES *********************************************

//1. ********way 1 to declare********
const promiseOne = new Promise(function (resolve, reject) {  // Promise creation
    // Do an Async task
    //DB calls, cryptography, network calls
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})

//2. ********way 2 to declare********
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async 2 Task');
        resolve()
    }, 1000)
}).then(() => {
    console.log('Async 2 Resolved');
})

//3. ********passing object through resolve and using it********
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userName: '777anishsingh', email: 'example@gmail.com' })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);
})

//4. ****************Reject****************
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ userName: '777anishsingh', email: 'example@gmail.com' })
        }
        else {
            reject('ERROR:Something Went Wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.email
})
    .then((email) => { // Chaining -> we get data from the above .then() and it will be used in this chained .then
        console.log(email);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected");
    })

//5. **************** Async-Await ****************
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ userName: 'Javascript', password: '123456789' })
        }
        else {
            reject('ERROR:Js Went Wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

//6. **************** glimpse of FETCH() ****************

// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() // ***************** this also takes time to convert therefore use AWAIT**********************
//         console.log(data[1].email);
//     } catch (error) {
//         console.log('E');
//     }
// }
// getAllUser();

fetch('https://api.github.com/users/777anishsingh')
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    }
    )