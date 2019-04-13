import readlineSync from 'readline-sync';

const countOfRounds = 3;

export default (collectGameData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(userName ? `Hello, ${userName}` : 'Hello, Player');
  for (let i = 0; i < countOfRounds; i += 1) {
    const [currentQuestion, correctAnswer] = collectGameData();
    console.log(`Question: ${currentQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    }
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
