import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const countOfRounds = 3;

export default (collectGameData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = readlineSync.question('May I have your name?: ');
  console.log(userName ? `Hello, ${userName}` : 'Hello, Player');
  for (let i = 0; i < countOfRounds; i += 1) {
    const dataCategory = collectGameData();
    const currentQuestion = dataCategory[0];
    const correctAnswer = dataCategory[1];
    console.log(`Question: ${currentQuestion}`);
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
