
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var selectedHours = document.getElementById("selectedHours");
var selectedMinutes = document.getElementById("selectedMinutes");
var selectedSeconds = document.getElementById("selectedSeconds");

var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");

selectedHours.addEventListener("change", () => {
  hour.textContent = selectedHours.value < 10 ? "0" + selectedHours.value : selectedHours.value;
});

selectedMinutes.addEventListener("change", () => {
  minute.textContent = selectedMinutes.value < 10 ? "0" + selectedMinutes.value : selectedMinutes.value;
});

selectedSeconds.addEventListener("change", () => {
  second.textContent = selectedSeconds.value < 10 ? "0" + selectedSeconds.value : selectedSeconds.value;
});

var interval;

startBtn.addEventListener("click", () => {
  if ((selectedHours.value === "0" && selectedMinutes.value === "0" && selectedSeconds.value === "0") || (selectedHours.value === null && selectedMinutes.value === null && selectedSeconds.value === null)) {
   
    alert("Please select a valid time.");
  } else {
    startTimer();
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  hour.textContent = "00";
  minute.textContent = "00";
  second.textContent = "00";
  selectedHours.value = "0";
  selectedMinutes.value = "0";
  selectedSeconds.value = "0";
});

function startTimer() {
  let hr = parseInt(hour.textContent);
  let mn = parseInt(minute.textContent);
  let sec = parseInt(second.textContent);

  interval = setInterval(() => {
    sec--;
    if (sec < 0) {
      mn--;
      sec = 59;
    }

    if (mn < 0) {
      hr--;
      mn = 59;
    }

    if (hr === 0 && mn === 0 && sec === 0) {
      clearInterval(interval);
      alert("Time's Up!");
      selectedHours.value = "0";
      selectedMinutes.value = "0";
      selectedSeconds.value = "0";
    };

    second.textContent = sec < 10 ? "0" + sec : sec;
    minute.textContent = mn < 10 ? "0" + mn : mn;
    hour.textContent = hr < 10 ? "0" + hr : hr;
  }, 1000);
};