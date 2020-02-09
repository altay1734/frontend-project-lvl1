import gameEngine from '../index.js';
import getRandomNum from '../functions.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".\n';
  const gamesCount = 3;
  const questions = [];
  const answers = [];
  for (let i = 0; i < gamesCount; i += 1) {
    const randomNum = getRandomNum(1, 100);
    questions.push(randomNum);
    answers.push(isEven(randomNum));
  }

  gameEngine(gameRules, questions, answers);
};

export default brainEven;
