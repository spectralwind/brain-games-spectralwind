import toBegin, { getRandomInt } from '..';

const calculateExpression = (x, y, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    default:
      result = x * y;
  }
  return result;
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

export default () => toBegin(collectGameData, description);
