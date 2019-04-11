import { cons, car, cdr } from 'hexlet-pairs';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const getEven = number => !(number % 2);
export const calculateTheResult = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return console.log("I don't know...");
  }
};
export const findGcd = (x, y) => {
  let firstArg = x;
  let secondArg = y;
  while (firstArg !== secondArg) {
    if (firstArg > secondArg) {
      firstArg -= secondArg;
    } else {
      secondArg -= firstArg;
    }
  }
  return firstArg;
};
export const startDialogue = (rules, question, answer) => cons(rules, cons(question, answer));
export const getText = stage => car(stage);
export const getQuestion = stage => car(cdr(stage));
export const getAnswer = stage => cdr(cdr(stage));
