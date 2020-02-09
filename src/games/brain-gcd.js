import gameEngine from '../index.js';
import getRandomNum from '../functions.js';

export default () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const gamesCount = 3;
  const questions = [];
  const answers = [];
  for (let i = 0; i < gamesCount; i += 1) {
    const randomNums = `${getRandomNum(1, 100)} ${getRandomNum(1, 100)}`;
    questions.push(randomNums);
    const arrRandomNums = randomNums.split(' ');
    const minNum = Math.min(...arrRandomNums);
    const maxNum = Math.max(...arrRandomNums);
    for (let counter = minNum; counter > 0; counter -= 1) {
      if (minNum % counter === 0 && maxNum % counter === 0) {
        answers.push(counter);
        break;
      }
    }
  }

  gameEngine(gameRules, questions, answers);
};
