import rng from '../utils/rng.js';

export default (extra = null) => {
  if (extra === 'rules') return 'What is the result of the expression?';
  const maxRng = 10;
  const num1 = rng(maxRng);
  const num2 = rng(maxRng);
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
