import gameEngine from './index.js';

const calc = () => {
  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const operators = ['*', '-', '+'];
  const getRandomOperation1 = `${getRandomNum(1, 30)} ${operators[getRandomNum(0, 3)]} ${getRandomNum(1, 30)}`;
  const getRandomOperation2 = `${getRandomNum(1, 30)} ${operators[getRandomNum(0, 3)]} ${getRandomNum(1, 30)}`;
  const getRandomOperation3 = `${getRandomNum(1, 30)} ${operators[getRandomNum(0, 3)]} ${getRandomNum(1, 30)}`;
  const arr = [getRandomOperation1, getRandomOperation2, getRandomOperation3];

  // eslint-disable-next-line no-eval
  gameEngine('What is the result of the expression?', arr[0], String(eval(getRandomOperation1)), arr[1], String(eval(getRandomOperation2)), arr[2], String(eval(getRandomOperation3)));
};

export default calc;
