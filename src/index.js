import readlineSync from 'readline-sync';

export const gamesCount = 3;
export const gameEngine = (task, question, answer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  let i = 0;
  let userAnswer;
  for (; i < question.length; i += 1) {
    console.log(`Question: ${question[i]}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer[i]) {
      console.log('Correct!');
    } else {
      break;
    }
  }
  const lastAnswer = answer.length - 1;
  if (i === question.length && userAnswer === answer[lastAnswer]) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer[i]}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
};
