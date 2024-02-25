const form = document.querySelector('form');

//this usecase is for empty values at the starting of the program
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        //to show the result
        let msg = '';
        if (BMI <= 18.6) {
            msg = 'Under weight';
        } else if (BMI > 18.6 && BMI < 24.9) {
            msg = 'Normal weight';
        } else if (BMI >= 24.9) {
            msg = 'Over weight';
        }
        results.innerHTML = `<span>${BMI} <br> ${msg}</span>`;
    }
});
