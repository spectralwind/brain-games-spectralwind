import toBegin, { getRandomInt } from '..';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let currentDivisor = 2; currentDivisor < number; currentDivisor += 1) {
    if (number % currentDivisor === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const collectGameData = () => {
  const question = getRandomInt(0, 50);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => toBegin(collectGameData, description);
