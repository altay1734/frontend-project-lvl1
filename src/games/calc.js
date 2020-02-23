import { gamesCount, gameEngine } from '../index.js';
import getRandomNum from '../functions.js';

const gameDescription = 'What is the result of the expression?';

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
    switch (randomOperator) {
      case '*':
        answers.push(String(firstRandomNum * secondRandomNum));
        break;
      case '-':
        answers.push(String(firstRandomNum - secondRandomNum));
        break;
      case '+':
        answers.push(String(firstRandomNum + secondRandomNum));
        break;
      default:
        return null;
    }
  }

  return gameEngine(gameDescription, questions, answers);
};

export default getQuestionsAndAnswers;
