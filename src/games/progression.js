import getRandomInt from '../apps-bg';
import toBegin from '..';

const createProgression = () => {
  const firstElement = getRandomInt(-10, 50);
  const sequenceStep = getRandomInt(-10, 10);
  const sequence = [];
  const countOfElements = 10;
  for (let numElement = 1; numElement <= countOfElements; numElement += 1) {
    const nextElement = firstElement + ((numElement - 1) * sequenceStep);
    sequence.push(nextElement);
  }
  return sequence;
};

const description = 'What number is missing in the progression?';

const createTheGame = () => {
  const finalSequence = createProgression();
  const randomElement = getRandomInt(0, finalSequence.length - 1);
  const removeElement = finalSequence.splice(randomElement, 1, '..');
  const question = finalSequence.join(' ');
  const answer = String(removeElement);
  return [question, answer];
};

export default () => toBegin(createTheGame, description);
