import toBegin, { getRandomInt } from '..';

const isEven = number => !(number % 2);

const description = 'Answer "yes" if number even otherwise answer "no"';

const collectGameData = () => {
  const question = getRandomInt(0, 50);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => toBegin(collectGameData, description);
