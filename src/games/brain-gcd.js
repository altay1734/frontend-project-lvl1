import gameEngine from '../index.js';

export default () => {
  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const getRandomNum1 = `${getRandomNum(1, 100)} ${getRandomNum(1, 100)}`;
  const getRandomNum2 = `${getRandomNum(1, 100)} ${getRandomNum(1, 100)}`;
  const getRandomNum3 = `${getRandomNum(1, 100)} ${getRandomNum(1, 100)}`;
  const arr = [getRandomNum1, getRandomNum2, getRandomNum3];
  // eslint-disable-next-line consistent-return
  const gcd = (randomNum) => {
    const num = randomNum;
    const arrNum = num.split(' ');
    const minNum = Math.min(...arrNum);
    const maxNum = Math.max(...arrNum);
    for (let i = minNum; i > 0; i -= 1) {
      if (minNum % i === 0 && maxNum % i === 0) {
        return i;
      }
    }
  };
  gameEngine('Find the greatest common divisor of given numbers.', arr[0], gcd(getRandomNum1), arr[1], gcd(getRandomNum2), arr[2], gcd(getRandomNum3));
};
