const btnReset = document.getElementById("btn-reset");
const p = document.querySelector("p");
const TIMER_MEMORY = "timerMemory";
let counter = 0;
window.addEventListener("DOMContentLoaded", () => {
  const counterStorage = sessionStorage.getItem(TIMER_MEMORY);
  if (counterStorage) {
    counter = JSON.parse(counterStorage);
    p.innerText = counter;
  }
  setInterval(() => {
    counter++;
    sessionStorage.setItem(TIMER_MEMORY, counter);
    const counterStorage = JSON.parse(sessionStorage.getItem(TIMER_MEMORY));
    p.innerText = counterStorage;
  }, 1000);

  btnReset.addEventListener("click", () => {
    counter = 0;
    sessionStorage.removeItem(TIMER_MEMORY);
  });
});
