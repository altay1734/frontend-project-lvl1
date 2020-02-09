import gameEngine from '../index.js';
import getRandomNum from '../functions.js';

export default () => {
  const gameRules = 'What number is missing in the progression?';
  const gameCount = 3;
  const questions = [];
  const answers = [];
  for (let i = 0; i < gameCount; i += 1) {
    let progression = '';
    let randomBegin = getRandomNum(1, 30);
    const randomStep = getRandomNum(1, 10);
    const randomPosition = getRandomNum(1, 10);
    let missingNum = '';
    const lengthOfProgression = 10;
    for (let count = 0; count < lengthOfProgression; count += 1) {
      if (count !== randomPosition) {
        progression = `${progression} ${randomBegin}`;
        randomBegin += randomStep;
      } else {
        progression = `${progression} ..`;
        missingNum = `${randomBegin}`;
        randomBegin += randomStep;
      }
    }
    questions.push(progression);
    answers.push(missingNum);
  }

  gameEngine(gameRules, questions, answers);
};
