class FetchData {
  constructor(data, url) {
    // data is a list of arrays with categories and difficulties
    // selected by user
    this.data = data;
    this.fetchedData = [];
    this.url = url;
    this.formatedQuestions = [];
  }

  //* here we fetch data containing questions and answers from https://the-trivia-api.com/
  async fetchHandler() {
    this.userOptionsHandler();
    const result = await fetch(this.url);
    const questions = await result.json();
    this.formatData(questions);
    console.log(this.formatedQuestions);
  }

  //* iterates user options array and updates the default url according to user customization
  userOptionsHandler() {
    if (this.data[0].length > 0) {
      let aux = '&categories=';
      this.data[0].forEach((option, index) => {
        if (index < this.data[0].length - 1) {
          aux += option + ',';
        } else {
          aux += option;
        }
      });
      this.url += aux;
    }

    if (this.data[1].length > 0) {
      let aux = '&difficulty=';
      this.data[1].forEach((option, index) => {
        if (index < this.data[1].length - 1) {
          aux += option + ',';
        } else {
          aux += option;
        }
      });
      this.url += aux;
    }

    this.url += `&limit=${this.data[2]}`;
  }

  //* extracts from the original data object only necessary parts for our game
  formatData(questions) {
    questions.forEach((question) => {
      const aux = {};
      aux['id'] = question.id;
      aux['question'] = question.question;
      aux['correct'] = question.correctAnswer;
      aux['inccorect'] = question.incorrectAnswers;
      this.formatedQuestions.push(aux);
    });
  }
}

export default FetchData;
