import getRandomInt from '../apps-bg';
import toBegin from '..';

export const findGcd = (x, y) => {
  let num1 = x;
  let num2 = y;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
};

const description = 'Find the greatest common divisor of given numbers.';

const createTheGame = () => {
  const firstArg = getRandomInt(1, 50);
  const secondArg = getRandomInt(1, 50);
  const question = `${firstArg} ${secondArg}`;
  const answer = String(findGcd(firstArg, secondArg));
  return [question, answer];
};

export default () => toBegin(createTheGame, description);
