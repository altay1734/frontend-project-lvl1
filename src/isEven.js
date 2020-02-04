import gameEngine from './index.js';

const isEven = () => {
  gameEngine('Answer "yes" if the number is even, otherwise answer "no".\n', '15', 'no', '6', 'yes', '7', 'no');
};

export default isEven;
