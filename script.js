let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  display.innerText = `${h}:${m}:${s}`;
}

function tick() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function start() {
  if (timer !== null) return;
  timer = setInterval(tick, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  const laps = document.getElementById("laps");
  const li = document.createElement("li");
  li.textContent = display.innerText;
  laps.appendChild(li);
}
