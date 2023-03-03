export default (arg1, arg2 = 0) => {
  const minValue = Math.min(arg1,arg2);
  const maxValue = Math.max(arg1,arg2);

  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};
