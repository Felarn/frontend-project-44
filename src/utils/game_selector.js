import even from '../games/even_game.js';
import calc from '../games/calc_game.js';
import gcd from '../games/gcd_game.js';
import progression from '../games/progression_game.js';
import prime from '../games/prime_game.js';

export default (gameName, action) => {
  switch (gameName) {
    case 'even':
      return even(action);

    case 'calc':
      return calc(action);

    case 'gcd':
      return gcd(action);

    case 'progression':
      return progression(action);

    case 'prime':
      return prime(action);

    default:
      console.error('wrong game name');
      return null;
  }
};
