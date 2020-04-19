import { gamesCount, gameEngine } from '../index.js';
import getRandomNum from '../functions.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNum, secondNum) => {
  const minNum = Math.min(firstNum, secondNum);
  const maxNum = Math.max(firstNum, secondNum);
  let result;
  for (let counter = minNum; counter > 0; counter -= 1) {
    if (minNum % counter === 0 && maxNum % counter === 0) {
      result = counter;
      break;
    }
  }
  return result;
};

export default () => {
  const questions = [];
  const answers = [];
  for (let i = 0; i < gamesCount; i += 1) {
    const firstRandomNum = getRandomNum(1, 100);
    const secondRandomNum = getRandomNum(1, 100);
    const question = `${firstRandomNum} ${secondRandomNum}`;
    questions.push(question);
    answers.push(String(getGcd(firstRandomNum, secondRandomNum)));
  }

  gameEngine(gameDescription, questions, answers);
};
