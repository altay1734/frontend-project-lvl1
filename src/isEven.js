import readlineSync from "readline-sync";

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  console.log(`Question: 15`);
  const question15 = readlineSync.question('Your answer: ');
  if (question15 === 'no') {
    console.log('Correct!');
  } else {
    return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`)
  }
  console.log(`Question: 6`);
  const question6 = readlineSync.question('Your answer: ');
  if (question6 === 'yes') {
    console.log('Correct!');
  } else {
    return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`)
  }
  console.log('Question: 7');
  const question7 = readlineSync.question('Your answer: ');
  if (question7 === 'no') {
    console.log(`Correct!\nCongratulations, ${userName}!`);
  } else {
    return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`)
  }
};

export default isEven;
