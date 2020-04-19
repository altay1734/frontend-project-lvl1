import { gamesCount, gameEngine } from '../index.js';
import getRandomNum from '../functions.js';

const gameDescription = 'What is the result of the expression?';

const calculator = (num1, operator, num2) => {
  let result;
  switch (operator) {
    case '*':
      result = String(num1 * num2);
      break;
    case '-':
      result = String(num1 - num2);
      break;
    case '+':
      result = String(num1 + num2);
      break;
    default:
      return null;
  }
  return result;
};

const getQuestionsAndAnswers = () => {
  const questions = [];
  const answers = [];
  const operators = ['*', '-', '+'];
  const operatorsLastIndex = operators.length - 1;
  for (let i = 0; i < gamesCount; i += 1) {
    const firstRandomNum = getRandomNum(1, 30);
    const secondRandomNum = getRandomNum(1, 30);
    const randomOperator = operators[getRandomNum(0, operatorsLastIndex)];
    const question = `${firstRandomNum} ${randomOperator} ${secondRandomNum}`;
    questions.push(question);
    answers.push(calculator(firstRandomNum, randomOperator, secondRandomNum));
  }

  return gameEngine(gameDescription, questions, answers);
};

export default getQuestionsAndAnswers;
