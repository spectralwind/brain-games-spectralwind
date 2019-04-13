import build from '..';
import getRandomInt from '../utils';

const isEven = number => number % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no"';

const collectGameData = () => {
  const question = getRandomInt(0, 50);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => build(collectGameData, description);
