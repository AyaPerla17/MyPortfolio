let chrono = document.getElementById("chrono");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");
let saveBtn = document.getElementById("save");
let classementList = document.getElementById("classementList");

let heures = 0, minutes = 0, secondes = 0;
let timeout;
let estArrete = true;
let i = 1;

const demarrer = () => {
  if (estArrete) {
    estArrete = false;
    defilerTemps();
  }
};

const arreter = () => {
  if (!estArrete) {
    estArrete = true;
    clearTimeout(timeout);
  }
};

const reset = () => {
  chrono.textContent = "00:00:00";
  estArrete = true;
  heures = 0;
  minutes = 0;
  secondes = 0;
  clearTimeout(timeout);
};

const save = () => {
  const item = document.createElement("li");
  item.textContent = `${i}. ${heures < 10 ? '0'+heures : heures}:${minutes < 10 ? '0'+minutes : minutes}:${secondes < 10 ? '0'+secondes : secondes}`;
  classementList.appendChild(item);
  i++;
};

const defilerTemps = () => {
  if (estArrete) return;

  secondes++;
  if (secondes == 60) { minutes++; secondes = 0; }
  if (minutes == 60) { heures++; minutes = 0; }

  chrono.textContent = 
    `${heures < 10 ? "0"+heures : heures}:${minutes < 10 ? "0"+minutes : minutes}:${secondes < 10 ? "0"+secondes : secondes}`;

  timeout = setTimeout(defilerTemps, 1000);
};

// Event listeners
startBtn.addEventListener("click", demarrer);
stopBtn.addEventListener("click", arreter);
resetBtn.addEventListener("click", reset);
saveBtn.addEventListener("click", save);
