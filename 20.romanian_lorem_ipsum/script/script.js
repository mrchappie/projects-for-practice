import romanianWords from './romanianWordsDataBase.js';

const wordsCountInput = document.querySelector(
  '#generator__words__count__input'
);
const generateButton = document.querySelector('#generator__button');
const copyButton = document.querySelector('#generator__copy');
const resultElement = document.querySelector('#generator__result');

const resultedWords = [];

function inserWords() {
  const words = resultedWords.join(' ');
  resultElement.textContent = words;
}

function generateWords(numberOfWords) {
  if (!numberOfWords) {
    alert('How many words do you want?');
    return;
  }

  if (numberOfWords > 500) {
    alert('Ohoho, to many words, maximum 500 please..');
    return;
  }

  resultedWords.length = 0;
  resultElement.textContent = '';

  for (let i = 0; i < numberOfWords; i++) {
    const randomNumber = Math.floor(Math.random() * (romanianWords.length - 1));
    resultedWords.push(romanianWords[randomNumber]);
    inserWords();
  }
}

generateButton.addEventListener('click', () => {
  generateWords(wordsCountInput.value);
});

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(resultElement.textContent);
  } catch (err) {
    console.log(err);
  }
});
