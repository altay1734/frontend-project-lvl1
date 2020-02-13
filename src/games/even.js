import { gamesCount, gameEngine } from '../index.js';
import getRandomNum from '../functions.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const questions = [];
  const answers = [];
  for (let i = 0; i < gamesCount; i += 1) {
    const randomNum = getRandomNum(1, 100);
    questions.push(randomNum);
    answers.push(isEven(randomNum) ? 'yes' : 'no');
  }

  gameEngine(gameRules, questions, answers);
};

export default brainEven;
