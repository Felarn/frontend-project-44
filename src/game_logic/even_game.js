export default (action = "run") => {
  if (action === "rules")
    return 'Answer "yes" if the number is even, otherwise answer "no".';

  console.log("test run");
  return true;
};
