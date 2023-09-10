import FetchData from './classes/FetchData.js';
const categories = document.getElementById('categories__container');
const difficulties = document.getElementById('difficulties__container');

const listOfCategories = [
  'music',
  'sport_and_leisure',
  'film_and_tv',
  'arts_and_literature',
  'history',
  'society_and_culture',
  'science',
  'geography',
  'food_and_drink',
  'general_knowledge',
];

const listOfDifficulties = ['easy', 'medium', 'hard'];

// optionsList[0] contains selected categories
// optionsList[1] contains selected difficulties
// optionsList[2] contains selected number of questions, default value = 5
const optionsList = [[], [], 5];

//* this function handles inserting into DOM buttons for trivia game customizations
function insertElem(parent, element, text, className) {
  const listEl = document.createElement('li');
  const buttonEl = document.createElement('button');
  buttonEl.setAttribute(`data-${className}`, element);
  buttonEl.textContent = text;
  buttonEl.classList.add(className);
  listEl.append(buttonEl);

  buttonEl.addEventListener('click', (e) => {
    optionsList[className === 'category' ? 0 : 1].push(
      e.target.getAttribute(`data-${className}`)
    );
    buttonEl.setAttribute('disabled', true);
  });

  parent.append(listEl);
}

listOfCategories.forEach((elem) => {
  const aux = elem.split('_').join(' ');
  insertElem(categories, elem, aux, 'category');
});

listOfDifficulties.forEach((elem) => {
  const aux = elem.split('_').join(' ');
  insertElem(difficulties, elem, aux, 'difficulty');
});

//* block of code for handling number of questions
const numberOfQuestionBtn = document.getElementById('number__of__questions');
numberOfQuestionBtn.addEventListener('input', () => {
  optionsList[2] = numberOfQuestionBtn.value;
});

//* this function resets user options after game starts
function resetOptions() {
  optionsList[0].length = 0;
  optionsList[1].length = 0;
  document.querySelectorAll('.category').forEach((button) => {
    button.removeAttribute('disabled');
  });
  document.querySelectorAll('.difficulty').forEach((button) => {
    button.removeAttribute('disabled');
  });
}

//* Starting game
document.getElementById('start__game').addEventListener('click', () => {
  const url = 'https://the-trivia-api.com/api/questions?';
  const newGame = new FetchData(optionsList, url);
  newGame.fetchHandler();
  console.log(optionsList);

  resetOptions();
});
