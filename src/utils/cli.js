import readlineSync from 'readline-sync';

export default () => {
  console.log('--- обращение к cli.js ---'); // дебаг
  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${playerName}`);
  return playerName;
};
