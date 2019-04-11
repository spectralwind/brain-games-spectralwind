import getRandomInt from '../apps-bg';
import toBegin from '..';

const isEven = number => !(number % 2);

const description = 'Answer "yes" if number even otherwise answer "no"';

const createTheGame = () => {
  const question = getRandomInt(0, 50);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => toBegin(createTheGame, description);
