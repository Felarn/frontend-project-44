import even from '../game_logic/even_game.js';

export default (gameName, action) => {
  return eval(gameName)(action);
};
