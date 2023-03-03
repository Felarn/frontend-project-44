export default (arg1, arg2 = 0) => {
  minValue = Math.min(arg1,arg2);
  maxValue = Math.max(arg1,arg2);

  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};
