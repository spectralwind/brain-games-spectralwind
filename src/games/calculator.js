import build from '..';
import getRandomInt from '../utils';

const calculateExpression = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    default:
  }
  return x * y;
};

const signs = '+-*';

const description = 'What is the result of the expression?';

const collectGameData = () => {
  const firstArg = getRandomInt(0, 50);
  const secondArg = getRandomInt(0, 50);
  const randomOperator = getRandomInt(0, signs.length - 1);
  const currentSign = signs[randomOperator];
  const question = `${firstArg} ${currentSign} ${secondArg}`;
  const answer = String(calculateExpression(firstArg, secondArg, currentSign));
  return [question, answer];
};

export default () => build(collectGameData, description);
