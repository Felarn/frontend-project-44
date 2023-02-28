import _ from 'lodash';
import rng from '../utils/rng.js';

const MaxFirstElement = 20;
const progrMinLength = 5;
const progrMaxLength = 10;
const progrMinStep = 1;
const progrMaxStep = 10;

function run() {
  const progrFirstElem = rng(MaxFirstElement);
  const progrLengt = rng(progrMinLength, progrMaxLength);
  const progrStep = rng(progrMinStep, progrMaxStep);
  const progLimiter = progrFirstElem + progrLengt * progrStep;
  const elementToHide = rng(1, progrLengt) - 1;

  const progression = _.range(progrFirstElem, progLimiter, progrStep);
  const partN1 = progression.slice(0, elementToHide).join(' ');
  const partN2 = progression.slice(elementToHide + 1).join(' ');
  const quest = `${partN1} .. ${partN2}`.trim();
  const answer = String(progression[elementToHide]);

  return [quest, answer];
}

const rules = 'What number is missing in the progression?';

export default { run, rules };
