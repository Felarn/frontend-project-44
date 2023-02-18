import getPlayerName from "./utils/cli.js";
import game from "./utils/game_selector.js";

export default (gameName) => {
  console.log("----- this is game_engine -----\n"); // дебаг

  console.log("Welcome to the Brain Games!");
  const playerName = getPlayerName();

  console.log(`now game_engine knows, that your name is: ${playerName}`);
  console.log(`You are playing ${gameName}`);
  console.log(game(gameName, "rules"));

  for (let turn = 1; turn <= 3; turn += 1) {
    console.log(`turn ${turn}`);
    const result = game(gameName, "run");

    if (result) {
      console.log("correct!");
    } else {
      console.log("fail!");
      return;
    }
  }
  console.log("GRATZ!");
};
