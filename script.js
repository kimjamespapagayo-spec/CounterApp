let counter = 0;
const counterEl = document.getElementById('counter');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const directionSelect = document.getElementById('direction');
const intervalInput = document.getElementById('interval');

let running = false;

function updateDisplay() {
  counterEl.textContent = counter;
}

incBtn.addEventListener('click', () => {
  counter++;
  updateDisplay();
});

decBtn.addEventListener('click', () => {
  counter--;
  updateDisplay();
});

startBtn.addEventListener('click', () => {
  if (running) return;
  running = true;
  runLoop();
});

stopBtn.addEventListener('click', () => {
  running = false;
});

async function runLoop() {
  while (running) {
    const dir = Number(directionSelect.value) || 1;
    const interval = Math.max(10, Number(intervalInput.value) || 200);
    counter += dir;
    updateDisplay();
    await sleep(interval);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

updateDisplay();
