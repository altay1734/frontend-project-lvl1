import { gamesCount, gameEngine } from '../index.js';
import getRandomNum from '../functions.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let count = 2; count < num; count += 1) {
    if (num % count === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const questions = [];
  const answers = [];
  for (let i = 0; i < gamesCount; i += 1) {
    const randomNum = getRandomNum(1, 100);
    questions.push(randomNum);
    answers.push(isPrime(randomNum) ? 'yes' : 'no');
  }

  gameEngine(gameRules, questions, answers);
};
