import { gamesCount, gameEngine } from '../index.js';
import getRandomNum from '../functions.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 0 || num === 1) return false;
  for (let count = 2; count <= (num / 2); count += 1) {
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
    const question = getRandomNum(1, 100);
    questions.push(question);
    answers.push(isPrime(question) ? 'yes' : 'no');
  }

  gameEngine(gameDescription, questions, answers);
};
