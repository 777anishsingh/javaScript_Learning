const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

document.querySelector('#start').addEventListener(
    'click', () => {
        const changeColor = () => {
            document.body.style.backgroundColor = randomColor();
        }
        const colorInterval = setInterval(changeColor, 500)

        document.querySelector('#stop').addEventListener(
            'click', () => {
                clearInterval(colorInterval);
            }
        )
    }
)
