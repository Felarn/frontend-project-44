import even from '../game_logic/even_game.js';
import calc from '../game_logic/calc_game.js';

export default (gameName, action) => {
  return eval(gameName)(action);
};
