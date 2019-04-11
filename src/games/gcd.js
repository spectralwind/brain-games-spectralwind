import { getRandomInt, startDialogue, findGcd } from '../apps-bg';
import toBegin from '..';

const createTheGame = () => {
  const firstArg = getRandomInt(1, 50);
  const secondArg = getRandomInt(1, 50);
  const rules = 'Find the greatest common divisor of given numbers.';
  const question = `${firstArg} ${secondArg}`;
  const answer = String(findGcd(firstArg, secondArg));
  return startDialogue(rules, question, answer);
};

export default () => toBegin(createTheGame);
