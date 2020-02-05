import gameEngine from '../index.js';

const isEven = () => {
  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const num3 = getRandomNum(1, 100);
  const isEv = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  gameEngine('Answer "yes" if the number is even, otherwise answer "no".\n', num1, isEv(num1), num2, isEv(num2), num3, isEv(num3));
};

export default isEven;
