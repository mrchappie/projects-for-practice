const birthDay = document.getElementById('day__of__birth');
const birthMonth = document.getElementById('month__of__birth');
const birthYear = document.getElementById('year__of__birth');

const submitButton = document.getElementById('page__form__submit__button');

submitButton.addEventListener('click', () => {
  calculateAge();
});

const calculateAge = () => {
  // get current date
  const today = new Date();
  // convert user birhtday to date
  const userBirthDay = new Date(
    `${birthMonth.value}/${birthDay.value}/${birthYear.value}`
  );

  let years = today.getFullYear() - userBirthDay.getFullYear();
  let months = today.getMonth() - userBirthDay.getMonth();
  let days = today.getDate() - userBirthDay.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months = 11 + months;
    days = days + new Date(today.getFullYear(), today.getMonth(), 0).getDate();

    displayUserAge(years, months, days);
  }

  if (days < 0 && months > 0) {
    months--;
    days =
      days + new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    displayUserAge(years, months, days);
  } else if (days < 0 && months === 0) {
    years--;
    months = 11;
    days =
      days + new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    displayUserAge(years, months, days);
  }
};

const userYears = document.getElementById('user__years');
const userMonths = document.getElementById('user__months');
const userDays = document.getElementById('user__days');

const displayUserAge = (years, months, days) => {
  userYears.innerText = years;
  userMonths.innerText = months;
  userDays.innerText = days;
};
