import { gamesCount, gameEngine } from '../index.js';
import getRandomNum from '../functions.js';

const gameDescription = 'What number is missing in the progression?';
const lengthOfProgression = 10;

export default () => {
  const questions = [];
  const answers = [];
  for (let i = 0; i < gamesCount; i += 1) {
    let progression = '';
    const randomBegin = getRandomNum(1, 30);
    const randomStep = getRandomNum(1, 10);
    const randomPosition = getRandomNum(1, lengthOfProgression - 1);
    const answer = randomBegin + randomStep * randomPosition;
    for (let count = 0; count < lengthOfProgression; count += 1) {
      if (count !== randomPosition) {
        progression = `${progression} ${randomBegin + randomStep * count}`.trim();
      } else {
        progression = `${progression} ..`;
      }
    }
    questions.push(progression);
    answers.push(String(answer));
  }

  gameEngine(gameDescription, questions, answers);
};
