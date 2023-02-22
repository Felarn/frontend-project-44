import rng from '../utils/rng.js';

const maxRoll = 20;

const run = () => {
  const num1 = rng(maxRoll);
  const num2 = rng(maxRoll);
  let quest = '';
  let answer = '';

  switch (rng(1, 3)) {
    case 1:
      quest = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;

    case 2:
      quest = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;

    case 3:
      quest = `${num1} * ${num2}`;
      answer = num1 * num2;
      break;

    default:
      console.error('wrong index for math operation');
  }

  return [quest, answer];
};

const rules = 'What is the result of the expression?';

export default { run, rules };
