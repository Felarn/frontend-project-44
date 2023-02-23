import rng from '../utils/rng.js';

function isPrime(numberToCheck) {
  for (let divider = 2; divider <= numberToCheck / 2; divider += 1) {
    if (numberToCheck % divider === 0) { return false; }
  }
  return numberToCheck > 1;
}

const maxRoll = 100;

function game() {
  const question = rng(maxRoll);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
}

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default { run: game, rules };
