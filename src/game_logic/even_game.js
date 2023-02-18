import rng from '../utils/rng.js';

export default (extras = null) => {
  if (extras === 'rules') return 'Answer "yes" if the number is even, otherwise answer "no".';

  const maxNum = 100;

  const question = rng(maxNum);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
