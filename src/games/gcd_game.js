import rng from '../utils/rng.js';

const maxRoll = 100;

function run() {
  const [lesserNum, biggerNum] = [rng(maxRoll), rng(maxRoll)].sort((a, b) => a - b);
  let GCD = lesserNum || biggerNum;
  const quest = `${biggerNum} ${lesserNum}`;

  for (let possibleGCD = lesserNum; possibleGCD > 0; possibleGCD -= 1) {
    if ((lesserNum % possibleGCD === 0) && (biggerNum % possibleGCD === 0)) {
      GCD = possibleGCD;
      break;
    }
  }

  return [quest, String(GCD)];
}

const rules = 'Find the greatest common divisor of given numbers.';

export default { run, rules };
