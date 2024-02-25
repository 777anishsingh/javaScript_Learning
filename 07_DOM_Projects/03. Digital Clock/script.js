const clock = document.getElementById('clock');

setInterval(() => {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.textContent = date.toLocaleTimeString();
}, 1000);
