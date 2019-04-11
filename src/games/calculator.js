import getRandomInt from '../apps-bg';
import toBegin from '..';

const calculateTheResult = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return console.log("I don't know...");
  }
};

const sign = '+-*';

const description = 'What is the result of the expression?';

const createTheGame = () => {
  const firstArg = getRandomInt(0, 50);
  const secondArg = getRandomInt(0, 50);
  const randomOperator = getRandomInt(0, sign.length - 1);
  const currentSign = sign[randomOperator];
  const question = `${firstArg} ${currentSign} ${secondArg}`;
  const answer = String(calculateTheResult(firstArg, secondArg, currentSign));
  return [question, answer];
};

export default () => toBegin(createTheGame, description);
