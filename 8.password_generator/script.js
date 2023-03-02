// prettier-ignore
const uppercaseLetterArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// prettier-ignore
const lowercaseLetterArr = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
];
// prettier-ignore
const symbolsArr = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '|', ':', ';', '"', `'`, '<', ',', '>', '.', '?', '/'];
// '&lt;', ',', '&gt;'
// prettier-ignore
const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const passGenerateBtn = document.getElementById('generate-password-btn');
const passGenerateBtnSec = document.querySelector('.fa-rotate');
const passResult = document.getElementById('password');

// getting user input options
let upper = true;
let lower = false;
let numb = true;
let symb = true;
let passRange = 20;

// array customizing
const userArrayOfOptions = (upper, lower, numb, symb) => {
  const upperArr = upper ? uppercaseLetterArr : '';
  const lowerArr = lower ? lowercaseLetterArr : '';
  const numArr = numb ? numbersArr : '';
  const symbArr = symb ? symbolsArr : '';

  const arr = [...upperArr, ...lowerArr, ...numArr, ...symbArr];

  return arr;
};

// getting random password function
const getPass = () => {
  const generalArr = userArrayOfOptions(upper, lower, numb, symb);

  let pass = '';

  for (let i = 0; i < passRange; i++) {
    const num = Math.floor(Math.random() * generalArr.length);

    pass += generalArr[num];
  }

  pass.toString();

  console.log(pass);
  return pass;
};

passGenerateBtn.addEventListener('click', () => {
  passResult.innerText = getPass();
});

passGenerateBtnSec.addEventListener('click', () => {
  passResult.innerText = getPass();
});
