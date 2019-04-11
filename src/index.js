import readlineSync from 'readline-sync';

export default (createTheGame, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = readlineSync.question('May I have your name?: ');
  console.log(userName ? `Hello, ${userName}` : 'Hello, Player');

  const countOfRounds = 3;

  for (let i = 0; i < countOfRounds; i += 1) {
    const dataCategory = createTheGame();
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
