import make from '..';
import getRandomInt from '../utils';

const sequenceLength = 10;

const createSequence = (element, step) => {
  const sequence = [];
  for (let numElement = 0; numElement < sequenceLength; numElement += 1) {
    const nextElement = element + (numElement * step);
    sequence.push(nextElement);
  }
  return sequence;
};

const description = 'What number is missing in the progression?';

const collectGameData = () => {
  const firstElement = getRandomInt(-10, 50);
  const step = getRandomInt(-10, 10);
  const sequence = createSequence(firstElement, step);
  const randomIndex = getRandomInt(0, sequenceLength - 1);
  const removedElement = sequence.splice(randomIndex, 1, '..');
  const question = sequence.join(' ');
  const answer = String(removedElement);
  return [question, answer];
};

export default () => make(collectGameData, description);
