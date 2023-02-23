import rng from '../utils/rng.js';

const maxRoll = 100;

function run() {
  const [num1, num2] = [rng(maxRoll), rng(maxRoll)].sort((a, b) => a - b);
  let GCD = num1 || num2;
  const quest = `${num2} ${num1}`;

  for (let possibleGCD = num1; possibleGCD > 0; possibleGCD -= 1) {
    if ((num1 % possibleGCD === 0) && (num2 % possibleGCD === 0)) {
      GCD = possibleGCD;
      break;
    }
  }

  return [quest, String(GCD)];
}

const rules = 'Find the greatest common divisor of given numbers.';

export default { run, rules };
