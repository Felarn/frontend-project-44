import readline from 'readline-sync';
import getPlayerName from './utils/cli.js';
import games from './utils/game_selector.js';

const maxTurns = 3;
const textcolor = { red: '\x1b[31m%s\x1b[0m', green: '\x1b[32m%s\x1b[0m' };

export default (gameName) => {
  const playerName = getPlayerName();
  console.log(games[gameName].rules);

  for (let turn = 1; turn <= maxTurns; turn += 1) {
    const [questionForPlayer, correctAns] = games[gameName].run();
    console.log(`Question: ${questionForPlayer}`);
    const playerAns = readline.question('Your answer: ');

    if (playerAns === correctAns) {
      console.log(textcolor.green, 'Correct!');
    } else {
      console.log(
        textcolor.red,
        `'${playerAns}' is wrong answer ;(. Correct answer was '${correctAns}'.`,
      );
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
