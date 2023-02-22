import rng from '../utils/rng.js';

const maxRoll = 100;

const run = () => {
  const num1 = rng(maxRoll);
  const num2 = rng(maxRoll);
  let GCD = 1;

  const quest = `${num1} ${num2}`;

  for (let possibleGCD = Math.max(num1, num2); possibleGCD > 0; possibleGCD -= 1) {
    if ((num1 % possibleGCD === 0) && (num2 % possibleGCD === 0)) {
      GCD = possibleGCD;
      break;
    }
  }

  return [quest, GCD];
};

const rules = 'Find the greatest common divisor of given numbers.';

export default { run, rules };
