import readlineSync from 'readline-sync';
import { getText, getAnswer, getQuestion } from './apps-bg';

export default (createTheGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(getText(createTheGame()));

  const userName = readlineSync.question('May I have your name?: ');
  console.log(userName ? `Hello, ${userName}` : 'Hello, Player');

  const countOfRounds = 3;

  for (let i = 0; i < countOfRounds; i += 1) {
    const iteration = createTheGame();
    const question = getQuestion(iteration);
    const correctAnswer = getAnswer(iteration);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    }
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};
