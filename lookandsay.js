const debug = require('debug')('lookandsay');

module.exports = (initialValue = 1) => {
  let result = initialValue;

  const toArray = (number) => number.toString().split('');

  const next = () => {
    debug(`Going to next after current value ${result}...`);
    const numberSplitted = toArray(result);
    const families = numberSplitted.reduce((total, digit) => {
      if (total.length === 0) {
        total.push([digit])
      } else {
        const lastFamily = total[total.length - 1];
        if (lastFamily.contains(digit)) {
          lastFamily.push(digit);
        } else {
          const family = [digit];
          total.push(family);
        }
      }
      return total;
    }, []);
    debug(`Families: ${families}`);
    const familiesInfo = families.map((family) => ({
      times: family.length,
      number: family[0],
    }));
    debug(`Families info: ${JSON.stringify(familiesInfo)}`);
    result = parseInt(familiesInfo.map(({ times, number }) => `${times}${number}`).join(''));
  };

  const getResult = () => result;

  return {
    next,
    getResult
  };
};