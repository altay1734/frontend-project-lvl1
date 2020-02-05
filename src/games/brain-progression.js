import gameEngine from '../index.js';

export default () => {
  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const getRandomProgr = () => {
    let result = '';
    let randomBegin = getRandomNum(1, 30);
    const randomStep = getRandomNum(1, 10);
    const randomPosition = getRandomNum(1, 10);
    let missingNum = '';
    for (let i = 0; i < 10; i += 1) {
      if (i !== randomPosition) {
        result = `${result} ${randomBegin}`;
        randomBegin += randomStep;
      } else {
        result = `${result} ..`;
        missingNum = `${randomBegin}`;
        randomBegin += randomStep;
      }
    }
    const arr = [result, missingNum];
    return arr;
  };
  const arr = getRandomProgr();
  const arr2 = getRandomProgr();
  const arr3 = getRandomProgr();
  gameEngine('What number is missing in the progression?', arr[0], arr[1], arr2[0], arr2[1], arr3[0], arr3[1]);
};
