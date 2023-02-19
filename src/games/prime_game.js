import rng from '../utils/rng.js';

export default (extras = null) => {
  if (extras === 'rules') return 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const maxNum = 100;
  const question = rng(maxNum);
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
