module.exports = {
  defined: (val, test = '') => {
    try {
      return eval(`typeof val${test}`) !== 'undefined';
    } catch(e) {
      return false;
    }
  },
  truthy: (val, test = '') => {
    try {
      return eval(`!!val${test}`);
    } catch(e) {
      return false;
    }
  },
  isset: (val, test = '') => {
    try {
      const res = eval(`val${test}`);
      return typeof res !== 'undefined' && res !== null;
    } catch(e) {
      return false;
    }
  }
};
