const validate = require('../00_HelperFunctions/typeValidation')
const validateRange = require('../00_HelperFunctions/rangeValidation')
/**
 * @param {number[]} A
 * @return {number}
 */
function sortedSquares(A) {
  let sortedSquaresOutput = [];

  validate.Array.isArray(A);
  validateRange.Array.numbers.isSortedAsc(A);

  A.forEach(item => {
    sortedSquaresOutput.push(item * item);
  });

  return sortedSquaresOutput.sort((a, b) => a - b);
}

module.exports = sortedSquares;