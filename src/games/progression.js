import toBegin, { getRandomInt } from '..';

const countOfElements = 10;

const createSequence = (element, step) => {
  const sequence = [];
  for (let numElement = 0; numElement < countOfElements; numElement += 1) {
    const nextElement = element + (numElement * step);
    sequence.push(nextElement);
  }
  return sequence;
};

const description = 'What number is missing in the progression?';

const collectGameData = () => {
  const firstElement = getRandomInt(-10, 50);
  const sequenceStep = getRandomInt(-10, 10);
  const finalSequence = createSequence(firstElement, sequenceStep);
  const randomElement = getRandomInt(0, finalSequence.length - 1);
  const removedElement = finalSequence.splice(randomElement, 1, '..');
  const question = finalSequence.join(' ');
  const answer = String(removedElement);
  return [question, answer];
};

export default () => toBegin(collectGameData, description);
