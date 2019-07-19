const debug = require('debug')('lookandsay');

module.exports = (initialValue = 1) => {
  let result = initialValue;

  const toMetadata = family => ({ times: family.length, number: family[0] });
  const toSplit = (sequence) => sequence.split('');
  const build = ({ times, number }) => `${times}${number}`;

  const next = () => {
    debug(`Going to next after current value ${result}...`);
    const families = `${result}`.match(/(.)\1*/g)
    .map(toSplit)
    .map(toMetadata)
    .map(build);
    result = parseInt(families.join(''));
  };

  const getResult = () => result;

  return {
    next,
    getResult
  };
};