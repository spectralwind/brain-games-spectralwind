import readlineSync from 'readline-sync';

// функция узнает имя игрока и приветствует его
export const learnName = (name) => {
  console.log('Welcome to the Brain Games!');
  const answer = readlineSync.question('May I have your name?: ');
  if (answer === '') {
    return console.log( `Hello, Player` );
  }
  else {
    console.log( `Hello, ${answer}` );
  }
  return name;
};