import { getEven, getRandomInt, startDialogue } from '../apps-bg';
import toBegin from '..';

const createTheGame = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no"';
  const question = getRandomInt(0, 500);
  const answer = getEven(question) ? 'yes' : 'no';
  return startDialogue(rules, question, answer);
};

export default () => toBegin(createTheGame);
