import { gamesCount, gameEngine } from '../index.js';
import getRandomNum from '../functions.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getQuestionsAndAnswers = () => {
  const questions = [];
  const answers = [];
  for (let i = 0; i < gamesCount; i += 1) {
    const question = getRandomNum(1, 100);
    questions.push(question);
    answers.push(isEven(question) ? 'yes' : 'no');
  }

  gameEngine(gameDescription, questions, answers);
};

export default getQuestionsAndAnswers;
