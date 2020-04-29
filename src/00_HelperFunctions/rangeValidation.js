module.exports = {
  "Array": {
    "isNotEmpty": (param, paramName) => {
      if (param.length > 0) {
        return true;
      } else {
        throw RangeError(`The ${paramName} Array cannot be empty.`);
      }
    },
    "containsOnlySpecifiedValues": (param, paramName, allowedValues) => {
      const onlySpecifiedValues = param.every((item) => allowedValues.includes(item));

      if (onlySpecifiedValues) {
        return true
      }
      throw RangeError(`The ${paramName} Array should only contain these values: ${allowedValues.toString()}.`)
    },
    "maxItems": (param, paramName, maxItems) => {
      const conformsWithMaxItems = param.length < maxItems + 1;

      if (conformsWithMaxItems) {
        return true;
      }

      throw RangeError(`The ${paramName} Array cannot contain more than ${maxItems.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} items.`);
    },
    "numbers": {
      "containsOnlyNumbers": (param, paramName) => {
        const onlyNums = param.reduce((acc, value) => {
          return acc && typeof value == "number";
        }, true);
        if (onlyNums) {
          return true;
        }
        throw RangeError(`The ${paramName} Array should only contain numbers.`);
      },
      "isSortedAsc": (param, paramName) => {
        let sorted = true;
        for (let i = 0; i < param.length; i++) {
          if (param[i] > param[i + 1]) {
            sorted = false;
            break;
          }
        }
        if (sorted) {
          return true;
        }
        throw RangeError(`The ${paramName} Array must be sorted in ascending order.`);
      },
      "isSortedDesc": (param, paramName) => {
        let sorted = true;
        for (let i = 0; i < param.length; i++) {
          if (param[i] < param[i + 1]) {
            sorted = false;
            break;
          }
        }
        if (sorted) {
          return true;
        }
        throw RangeError(`The ${paramName} Array must be sorted in descending order.`);
      }
    }
  }
}