const startMin = 10;
let time = startMin * 60;

const countdown = document.getElementById("countdown");

setInterval(update, 1000);

function update() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdown.innerText = `${minutes}:${seconds}`;
    time--;

    if (minutes < 10) {
        countdown.innerText = `0${minutes}:${seconds}`;
    }
}




