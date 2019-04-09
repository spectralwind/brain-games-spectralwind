import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

// узнает имя игрока и приветствует его
const learnName = () => {
  const answer = readlineSync.question('May I have your name?: ');
  if (answer === '') {
    console.log('Hello, Player');
    return 'Player';
  }
  console.log(`Hello, ${answer}`);
  return answer;
};

// генерирует случайное целое число
const getRandomInt = (max = 100000) => Math.floor(Math.random() * Math.floor(max));

// проверяет число на четность
export const checkParity = () => {
  const countOfRounds = 3; // количество вопросов игры
  console.log('Answer "yes" if number even otherwise answer "no"');
  const name = learnName();
  for (let i = 0; i < countOfRounds; i += 1) {
    const num = getRandomInt();
    console.log(`Question: ${num}`);
    const evenNumber = !(num % 2); // четное число
    const responseOfUser = readlineSync.question('Your answer: ');
    if (responseOfUser === 'yes' && !evenNumber) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      return console.log(`Let's try again, ${name}`);
    }
    if (responseOfUser === 'no' && evenNumber) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      return console.log(`Let's try again, ${name}`);
    }
    if (responseOfUser === 'yes' && evenNumber) {
      console.log('Correct!');
    }
    if (responseOfUser === 'no' && !evenNumber) {
      console.log('Correct!');
    } else if (responseOfUser !== 'yes' && responseOfUser !== 'no') {
      console.log(`'${responseOfUser}' is wrong answer ;(`);
      return console.log(`Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};
export default learnName;
