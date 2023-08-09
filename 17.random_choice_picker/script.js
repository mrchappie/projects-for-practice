const userInput = document.getElementById('userinput');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const choicesContainerEl = document.querySelector('.choices__container');

const arrOfChoices = [];

function insertChoice(text) {
  const listEl = document.createElement('li');
  listEl.textContent = text;
  listEl.classList.add('choice');
  choicesContainerEl.appendChild(listEl);
}

function updateChoices() {
  choicesContainerEl.innerHTML = '';
  const aux = arrOfChoices.filter((choice) => choice != '');
  aux.forEach((choice) => {
    insertChoice(choice);
  });
}

function getRandomNumber(arrLength) {
  return Math.floor(Math.random() * (arrLength - 1));
}

function pickRandom() {
  const aux = Array.from(document.querySelectorAll('li.choice'));
  const spinner = setInterval(() => {
    const randomNumber = getRandomNumber(arrOfChoices.length);
    aux[randomNumber].classList.add('active');
    setTimeout(() => {
      aux[randomNumber].classList.remove('active');
    }, 150);
  }, 150);

  setTimeout(() => {
    clearInterval(spinner);
    aux[getRandomNumber(arrOfChoices.length)].classList.add('active');
    startBtn.setAttribute('disabled', '');
  }, 1500);
}

startBtn.addEventListener('click', () => {
  pickRandom();
});

userInput.addEventListener('input', () => {
  arrOfChoices.length = 0;
  const auxArr = userInput.value.split(',');
  arrOfChoices.push(...auxArr);

  updateChoices();
});

resetBtn.addEventListener('click', () => {
  location.reload();
});
