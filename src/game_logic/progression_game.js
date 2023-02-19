import _ from 'lodash';
import rng from '../utils/rng.js';

export default (extra = null) => {
  if (extra === 'rules') return 'What number is missing in the progression?';
  const progFirstElem = rng(10);
  const progLengt = rng(5, 10);
  const progStep = rng(1, 10);
  const elementToDrop = rng(progLengt - 1);
  const progLimiter = progFirstElem + progLengt * progStep;

  const progression = _.range(progFirstElem, progLimiter, progStep);
  const quest = `${progression.slice(0, elementToDrop).join(' ')} .. ${progression.slice(elementToDrop + 1).join(' ')}`;

  return [quest.trim(), progression[elementToDrop]];
};
