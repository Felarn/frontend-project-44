import readline from 'readline-sync';
import getPlayerName from './utils/cli.js';
import game from './utils/game_selector.js';

export default (gameName) => {
  const maxTurns = 3;
  const playerName = getPlayerName();
  console.log(game(gameName, 'rules'));

  for (let turn = 1; turn <= maxTurns; turn += 1) {
    const [numberInQuestion, correctAns] = game(gameName);
    console.log(`Question: ${numberInQuestion}`);
    const playerAns = readline.question('Your answer: ');

    if (playerAns === String(correctAns)) {
      console.log('\x1b[32m%s\x1b[0m', 'Correct!');
    } else {
      console.log(
        '\x1b[31m%s\x1b[0m',
        `'${playerAns}' is wrong answer ;(. Correct answer was '${correctAns}'.`,
      );
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
