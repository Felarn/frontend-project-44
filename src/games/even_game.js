import rng from '../utils/rng.js';

const maxRoll = 100;

const run = () => {
  const question = rng(maxRoll);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default { run, rules };
