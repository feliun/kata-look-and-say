module.exports = (initialValue = 1) => {
  let result = initialValue;

  const next = () => {
    result = 11;
  };

  const getResult = () => result;

  return {
    next,
    getResult
  };
};