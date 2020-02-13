import { gamesCount, gameEngine } from '../index.js';
import getRandomNum from '../functions.js';

const gameRules = 'What number is missing in the progression?';

export default () => {
  const questions = [];
  const answers = [];
  for (let i = 0; i < gamesCount; i += 1) {
    let progression = '';
    const randomBegin = getRandomNum(1, 30);
    const randomStep = getRandomNum(1, 10);
    const randomPosition = getRandomNum(1, 10);
    let missingNum = '';
    const lengthOfProgression = 10;
    for (let count = 0; count < lengthOfProgression; count += 1) {
      if (count !== randomPosition) {
        progression += ` ${randomBegin + randomStep * count}`;
      } else {
        progression = `${progression} ..`;
        missingNum = randomBegin + randomStep * count;
      }
    }
    questions.push(progression);
    answers.push(missingNum);
  }

  gameEngine(gameRules, questions, answers);
};
