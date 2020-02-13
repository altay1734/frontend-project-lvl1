import { gamesCount, gameEngine } from '../index.js';
import getRandomNum from '../functions.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const gcd = (minNum, maxNum) => {
  let result = 0;
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
    const randomNums = `${getRandomNum(1, 100)} ${getRandomNum(1, 100)}`;
    questions.push(randomNums);
    const arrRandomNums = randomNums.split(' ');
    const minNum = Math.min(...arrRandomNums);
    const maxNum = Math.max(...arrRandomNums);
    answers.push(gcd(minNum, maxNum));
  }

  gameEngine(gameRules, questions, answers);
};
