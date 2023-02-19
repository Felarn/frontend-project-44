import rng from '../utils/rng.js';

export default (extra = null) => {
  if (extra === 'rules') return 'What is the result of the expression?';

  const N1 = rng(10);
  const N2 = rng(10);
  let quest = '';
  let answer = '';

  switch (rng(1, 3)) {
    case 1:
      quest = `${N1} + ${N2}`;
      answer = String(N1 + N2);
      break;

    case 2:
      quest = `${N1} - ${N2}`;
      answer = String(N1 - N2);
      break;

    case 3:
      quest = `${N1} * ${N2}`;
      answer = String(N1 * N2);
      break;

    default:
      console.error('wrong index for math operation');
  }

  return [quest, answer];
};
