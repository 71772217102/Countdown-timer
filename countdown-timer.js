let intervalId; 
let time; 
let element = document.getElementById("countdown");

function updateCountdown() {
    if (time <= 0) {
        clearInterval(intervalId); 
        element.textContent = "00:00:00";
        return;
    }

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    element.textContent = `${hours}:${minutes}:${seconds}`;
    time--;
}

document.getElementById("startButton").addEventListener("click", function() {
   
    if (intervalId) {
        clearInterval(intervalId);
    }


    let hoursInput = parseInt(document.getElementById("hours").value) || 0;
    let minutesInput = parseInt(document.getElementById("minutes").value) || 0;
    let secondsInput = parseInt(document.getElementById("seconds").value) || 0;
    
   
    time = (hoursInput * 3600) + (minutesInput * 60) + secondsInput;

    if (time <= 0) {
        alert("Please enter a valid time.");
        return;
    }

    intervalId = setInterval(updateCountdown, 1000);
});

document.getElementById("stopButton").addEventListener("click", function() {
    clearInterval(intervalId); 
});

document.getElementById("resetButton").addEventListener("click", function() {
    clearInterval(intervalId); 
    element.textContent = "00:00:00"; 
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
});
