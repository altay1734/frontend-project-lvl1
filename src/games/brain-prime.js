import gameEngine from '../index.js';

export default () => {
  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const question1 = getRandomNum(1, 100);
  const question2 = getRandomNum(1, 100);
  const question3 = getRandomNum(1, 100);
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  gameEngine('Answer "yes" if given number is prime. Otherwise answer "no".', question1, isPrime(question1), question2, isPrime(question2), question3, isPrime(question3));
};
