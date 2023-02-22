import rng from '../utils/rng.js';

const maxRoll = 100;

const run = () => {
  const question = rng(maxRoll);
  let answer = 'yes';

  if (question <= 1) {
    answer = 'no';
  } else {
    for (let divider = 2; divider < question; divider += 1) {
      if (question % divider === 0) {
        answer = 'no';
        break;
      }
    }
  }

  return [question, answer];
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default { run, rules };
