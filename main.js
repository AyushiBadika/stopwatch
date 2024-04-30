let deg = 0;
let laps = [];
let interval;
const sc = document.querySelector("#sc");
const start = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const lap = document.querySelector(".lap");
const reset = document.querySelector(".reset");
const lapsContainer = document.querySelector(".singleLaps");
const timerHr = document.querySelector(".timerHr");
const timerMin = document.querySelector(".timerMin");
const timerSec = document.querySelector(".timerSec");
const cat = document.querySelector(".cat");
start.addEventListener("click", () => {
  start.style.display = "none";
  stopBtn.style.display = "flex";
  lap.style.display = "flex";
  reset.style.display = "flex";
  cat.style.display = "block";

  deg = deg + 6;
  let sec = deg / 6;
  let min = 0;
  let hr = 0;
  if (sec >= 60) {
    min = Math.floor(sec / 60);
    sec = sec % 60;
  }

  if (min >= 60) {
    hr = Math.floor(min / 60);
    min = min % 60;
  }
  timerHr.innerHTML = `${hr < 10 ? "0" + hr : hr} : `;
  timerMin.innerHTML = `${min < 10 ? "0" + min : min} : `;
  timerSec.innerHTML = `${sec < 10 ? "0" + sec : sec}`;
  sc.style.transform = `rotate(${deg}deg)`;

  interval = setInterval(() => {
    deg = deg + 6;
    sc.style.transform = `rotate(${deg}deg)`;
    let sec = deg / 6;
    let min = 0;
    let hr = 0;
    if (sec >= 60) {
      min = Math.floor(sec / 60);
      sec = sec % 60;
    }

    if (min >= 60) {
      hr = Math.floor(min / 60);
      min = min % 60;
    }
    timerHr.innerHTML = `${hr < 10 ? "0" + hr : hr} : `;
    timerMin.innerHTML = `${min < 10 ? "0" + min : min} : `;
    timerSec.innerHTML = `${sec < 10 ? "0" + sec : sec}`;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  start.style.display = "flex";
  stopBtn.style.display = "none";
  cat.style.display = "none";
  // console.log("Stop call", interval);
  clearInterval(interval);
  // console.log("Stop call done", interval);
});

lap.addEventListener("click", () => {
  laps.reverse().push(deg);
  updateLaps();
});

function updateLaps() {
  let indexx = laps.length;
  lapsContainer.innerHTML = "";
  laps.reverse().forEach((lap, index) => {
    let sec = lap / 6;
    let min = 0;
    let hr = 0;
    if (sec >= 60) {
      min = Math.floor(sec / 60);
      sec = sec % 60;
    }

    if (min >= 60) {
      hr = Math.floor(min / 60);
      min = min % 60;
    }
    const singleLap = document.createElement("div");
    singleLap.className = "singleLap";

    const lapIndex = document.createElement("div");
    lapIndex.innerHTML = indexx - index;
    singleLap.append(lapIndex);

    const lapTime = document.createElement("div");
    singleLap.append(lapTime);
    lapTime.innerHTML = `${hr < 10 ? "0" + hr : hr} : ${
      min < 10 ? "0" + min : min
    } : ${sec < 10 ? "0" + sec : sec}`;

    lapsContainer.append(singleLap);
  });
}

reset.addEventListener("click", () => {
  start.style.display = "flex";
  stopBtn.style.display = "none";
  lap.style.display = "none";
  reset.style.display = "none";
  cat.style.display = "none";
  laps = [];
  updateLaps();
  timerHr.innerHTML = "00 : ";
  timerMin.innerHTML = "00 : ";
  timerSec.innerHTML = "00";
  clearInterval(interval);
  deg = 0;
  sc.style.transform = `rotate(${deg}deg)`;
});
