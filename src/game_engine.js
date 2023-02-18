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

    if (playerAns === correctAns) {
      console.log('Correct!');
    } else {
      console.log(
        `'${playerAns}' is wrong answer ;(. Correct answer was '${correctAns}'.`,
      );
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
