import evenGame from "../game_logic/even_game.js";

export default (gameName, action) => {
  switch (gameName) {
    case "even_game.js":
      return evenGame(action);
    case "placeholder":

    default:
      return false;
  }
};
