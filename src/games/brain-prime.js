import gameEngine from '../index.js';
import getRandomNum from '../functions.js';

export default () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameCount = 3;
  const questions = [];
  const answers = [];
  for (let i = 0; i < gameCount; i += 1) {
    const randomNum = getRandomNum(1, 100);
    questions.push(randomNum);
    let isAnswerActual = true;
    for (let count = 2; count < randomNum; count += 1) {
      if (randomNum % count === 0) {
        answers.push('no');
        isAnswerActual = false;
        break;
      }
    }
    if (isAnswerActual) answers.push('yes');
  }

  gameEngine(gameRules, questions, answers);
};
