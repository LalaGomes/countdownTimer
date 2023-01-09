const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours');
const minsel = document.getElementById('mins');
const secondsel = document.getElementById('seconds');

const newTime = "29 Mar 2023";

function countdown(){
    const newTimeDate = new Date(newTime);
    const currentDate = new Date();

    const totalSeconds = (newTimeDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysel.innerHTML = days;
    hoursel.innerHTML = formatTime(hours);
    minsel.innerHTML = formatTime(mins);
    secondsel.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);