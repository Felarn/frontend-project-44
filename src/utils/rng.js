export default (arg1 = 10, arg2 = null) => {
  let minValue = arg1;
  let maxValue = arg2;

  if (arg2 === null) {
    minValue = 0;
    maxValue = arg1;
  }

  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};
