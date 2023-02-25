import rng from '../utils/rng.js';

const maxRoll = 20;

function run() {
  const symbol = ['+', '-', '*'];
  const operation = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
  ];

  const num1 = rng(maxRoll);
  const num2 = rng(maxRoll);
  const operIndex = rng(2);

  const quest = `${num1} ${symbol[operIndex]} ${num2}`;
  const answer = String(operation[operIndex](num1, num2));
  return [quest, answer];
}

const rules = 'What is the result of the expression?';

export default { run, rules };
