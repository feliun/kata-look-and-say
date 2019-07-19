module.exports = (initialValue = 1) => {

  let result = initialValue;

  const next = () => {};

  return {
    next,
    result,
  }
};