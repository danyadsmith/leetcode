const validate = require('../00_HelperFunctions/typeValidation')
const validateRange = require('../00_HelperFunctions/rangeValidation')
/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
  let maxConsecutiveOnes = 0;
  let currentConsecutiveOnes = 0;

  validate.Array.isArray(nums, "nums");
  validateRange.Array.isNotEmpty(nums, "nums");
  validateRange.Array.numbers.containsOnlyNumbers(nums, "nums");
  validateRange.Array.containsOnlySpecifiedValues(nums, "nums", [0, 1]);
  validateRange.Array.maxItems(nums, "nums", 10000);

  nums.forEach((item) => {
    if (item === 1) {
      currentConsecutiveOnes++;
    } else {
      currentConsecutiveOnes = 0;
    }
    maxConsecutiveOnes =
      currentConsecutiveOnes > maxConsecutiveOnes ?
      currentConsecutiveOnes :
      maxConsecutiveOnes;
  });

  return maxConsecutiveOnes;
}

module.exports = findMaxConsecutiveOnes;