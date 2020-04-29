module.exports = {
  "Array": {
    "isArray": (param, paramName) => {
      if (Array.isArray(param)) {
        return true;
      } else {
        throw TypeError(`The parameter ${paramName} must be an Array.`);
      }
    }
  }
}