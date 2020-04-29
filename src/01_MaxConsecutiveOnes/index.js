/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
  let maxConsecutiveOnes = 0;
  let currentConsecutiveOnes = 0;

  let containsOnlyNumbers = function (testArray) {
    return testArray.reduce((acc, value) => {
      return acc && typeof value === "number";
    }, true);
  };

  let containsOnlyOnesAndZeros = function (testArray) {
    return testArray.every((item) => item === 1 || item === 0);
  };

  let isNotEmpty = function (testArray) {
    return testArray.length > 0;
  };

  let containsNumberOfAllowedItems = function (testArray) {
    return testArray.length < 10000;
  };

  if (Array.isArray(nums)) {} else {
    const errArrType = TypeError("The parameter nums must be an Array.");
    throw errArrType;
  }

  if (isNotEmpty(nums)) {} else {
    const errArrayContentsEmpty = RangeError("The nums Array cannot be empty.");
    throw errArrayContentsEmpty;
  }

  if (containsOnlyNumbers(nums)) {} else {
    const errArrContainsNonNumbers = RangeError(
      "The nums Array should only contain numbers."
    );
    throw errArrContainsNonNumbers;
  }

  if (containsOnlyOnesAndZeros(nums)) {} else {
    const errArrContainsOtherNumbers = RangeError(
      "The nums Array should only contain the numbers 1 or 0."
    );
    throw errArrContainsOtherNumbers;
  }

  if (containsNumberOfAllowedItems(nums)) {} else {
    throw RangeError("The nums Array cannot have more than 10,000 items.");
  }

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