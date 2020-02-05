import readlineSync from 'readline-sync';
// brain-games
export const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
// game-engine
export default (task, quest, answ, quest2, answ2, quest3, answ3) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  console.log(`Question: ${quest}`);
  const firstAnswer = readlineSync.question('Your answer: ');
  if (firstAnswer === String(answ)) {
    console.log('Correct!');
  } else {
    return console.log(`'${firstAnswer}' is wrong answer ;(. Correct answer was '${answ}'.\nLet's try again, ${userName}!`);
  }

  console.log(`Question: ${quest2}`);
  const secondAnswer = readlineSync.question('Your answer: ');
  if (secondAnswer === String(answ2)) {
    console.log('Correct!');
  } else {
    return console.log(`'${secondAnswer}' is wrong answer ;(. Correct answer was '${answ2}'.\nLet's try again, ${userName}!`);
  }

  console.log(`Question: ${quest3}`);
  const thirdAnswer = readlineSync.question('Your answer: ');
  if (thirdAnswer === String(answ3)) {
    console.log('Correct!');
  } else {
    return console.log(`'${thirdAnswer}' is wrong answer ;(. Correct answer was '${answ3}'.\nLet's try again, ${userName}!`);
  }
  return console.log(`Congratulations, ${userName}!`);
};
