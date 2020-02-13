import { gamesCount, gameEngine } from '../index.js';
import getRandomNum from '../functions.js';

const gameRules = 'What is the result of the expression?';

const calc = () => {
  const questions = [];
  const answers = [];
  const operators = ['*', '-', '+'];
  const operatorsLastIndex = operators.length - 1;
  for (let i = 0; i < gamesCount; i += 1) {
    const randomOperation = `${getRandomNum(1, 30)} ${operators[getRandomNum(0, operatorsLastIndex)]} ${getRandomNum(1, 30)}`;
    questions.push(randomOperation);
    const arrRandomOperation = randomOperation.split(' ');
    switch (arrRandomOperation[1]) {
      case '*':
        answers.push(Number(arrRandomOperation[0]) * Number(arrRandomOperation[2]));
        break;
      case '-':
        answers.push(Number(arrRandomOperation[0]) - Number(arrRandomOperation[2]));
        break;
      default:
        answers.push(Number(arrRandomOperation[0]) + Number(arrRandomOperation[2]));
    }
  }

  gameEngine(gameRules, questions, answers);
};

export default calc;
