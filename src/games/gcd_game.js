import rng from '../utils/rng.js';

export default (extra = null) => {
  if (extra === 'rules') return 'Find the greatest common divisor of given numbers.';
  const maxRng = 100;
  const num1 = rng(maxRng);
  const num2 = rng(maxRng);
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
