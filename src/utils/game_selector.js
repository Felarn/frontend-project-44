import even from '../game_logic/even_game.js';
import calc from '../game_logic/calc_game.js';
import gcd from '../game_logic/gcd_game.js';
import progression from '../game_logic/progression_game.js';

export default (gameName, action) => eval(gameName)(action);
