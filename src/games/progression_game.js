import _ from 'lodash';
import rng from '../utils/rng.js';

const MaxFirstElement = 20;
const progrMinLength = 5;
const progrMaxLength = 10;
const progrMinStep = 1;
const progrMaxStep = 10;

const run = () => {
  const progrFirstElem = rng(MaxFirstElement);
  const progrLengt = rng(progrMinLength, progrMaxLength);
  const progrStep = rng(progrMinStep, progrMaxStep);
  const elementToHide = rng(progrLengt - 1);
  const progLimiter = progrFirstElem + progrLengt * progrStep;

  const progression = _.range(progrFirstElem, progLimiter, progrStep);
  const quest = `${progression.slice(0, elementToHide).join(' ')} .. ${progression.slice(elementToHide + 1).join(' ')}`;

  return [quest.trim(), progression[elementToHide]];
};

const rules = 'What number is missing in the progression?';

export default { run, rules };
