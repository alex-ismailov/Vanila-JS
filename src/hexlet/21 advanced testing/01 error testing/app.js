export default (n) => {
  if (n === 0) {
    throw new Error('Unknown state!');
  }
  return true;
};
