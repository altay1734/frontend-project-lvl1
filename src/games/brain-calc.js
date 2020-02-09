import gameEngine from '../index.js';
import getRandomNum from '../functions.js';

const calc = () => {
  const gameRules = 'What is the result of the expression?';
  const gamesCount = 3;
  const questions = [];
  const answers = [];
  const operators = ['*', '-', '+'];
  for (let i = 0; i < gamesCount; i += 1) {
    const randomOperation = `${getRandomNum(1, 30)} ${operators[getRandomNum(0, 3)]} ${getRandomNum(1, 30)}`;
    questions.push(randomOperation);
    const arrRandomOperation = randomOperation.split(' ');
    if (arrRandomOperation[1] === '*') {
      answers.push(Number(arrRandomOperation[0]) * Number(arrRandomOperation[2]));
    } else if (arrRandomOperation[1] === '-') {
      answers.push(Number(arrRandomOperation[0]) - Number(arrRandomOperation[2]));
    } else {
      answers.push(Number(arrRandomOperation[0]) + Number(arrRandomOperation[2]));
    }
  }

  gameEngine(gameRules, questions, answers);
};

export default calc;
