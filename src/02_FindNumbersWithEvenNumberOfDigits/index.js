const validate = require('../00_HelperFunctions/typeValidation')
const validateRange = require('../00_HelperFunctions/rangeValidation')
/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumbers(nums) {
  let countOfNumbersWithEvenDigits = 0;

  validate.Array.isArray(nums, "nums");
  validateRange.Array.containsOnlyNumbers(nums, "nums");

  nums.forEach(item => {
    if (item.toString().length % 2 === 0) {
      countOfNumbersWithEvenDigits++;
    }
  });

  return countOfNumbersWithEvenDigits;
}


module.exports = findNumbers;