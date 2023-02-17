import readlineSync from "readline-sync";

export default () => {
  console.log("обращение к cli.js");
  const name = readlineSync.question("Your answer: ");
  console.log(`Hello ${name}`);
};
