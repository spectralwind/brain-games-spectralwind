import { getRandomInt, startDialogue, calculateTheResult } from '../apps-bg';
import toBegin from '..';

const createTheGame = () => {
  const firstArg = getRandomInt(0, 500);
  const secondArg = getRandomInt(0, 500);
  const operator = '+-*';
  const randomOperator = getRandomInt(0, operator.length);
  const rules = 'What is the result of the expression?';
  const question = `${firstArg} ${operator[randomOperator]} ${secondArg}`;
  const answer = String(calculateTheResult(firstArg, secondArg, operator[randomOperator]));
  return startDialogue(rules, question, answer);
};

export default () => toBegin(createTheGame);
