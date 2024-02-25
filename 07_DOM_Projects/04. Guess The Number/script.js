let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainig = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    // to validate the input value
    if (isNaN(guess)) {
        alert('Please Enter a Valid Number');
    } else if (guess < 1) {
        alert('Please Enter a Number greater than 1');
    } else if (guess > 100) {
        alert('Please Enter a Number less than 100');
    } else {
        prevGuess.push(guess);

        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNum}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    // check and display the message of win or try again
    if (guess === randomNum) {
        displayMessage('You Guessed it right!');
        endGame();
    } else if (guess < randomNum) {
        displayMessage('Number is TOO Low');
    } else if (guess > randomNum) {
        displayMessage('Number is TOO High');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remainig.innerHTML = `${11 - numGuess}`; // guess remaining
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', (e) => {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remainig.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
