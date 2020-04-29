/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumbers(nums) {
  let countOfNumbersWithEvenDigits = 0;

  let containsOnlyNumbers = function (testArray) {
    return testArray.reduce((acc, value) => {
      return acc && typeof value === "number";
    }, true);
  };

  if (Array.isArray(nums)) {} else {
    throw TypeError("The parameter nums must be an Array.");
  }

  if (containsOnlyNumbers(nums)) {} else {
    const errArrContainsNonNumbers = RangeError(
      "The nums Array should only contain numbers."
    );
    throw errArrContainsNonNumbers;
  }

  nums.forEach(item => {
    if (item.toString().length % 2 === 0) {
      countOfNumbersWithEvenDigits++;
    }
  })

  return countOfNumbersWithEvenDigits;
}


module.exports = findNumbers;