const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (eventObject) => {
        console.log(eventObject);
        console.log(eventObject.target);

        switch (eventObject.target.id) {
            case 'white':
                body.style.backgroundColor = eventObject.target.id;
                break;
            case 'grey':
                body.style.backgroundColor = eventObject.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = eventObject.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = eventObject.target.id;
                break;
            case 'purple':
                body.style.backgroundColor = eventObject.target.id;
                break;
        }

    });
});
