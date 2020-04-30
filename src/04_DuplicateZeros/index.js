const validate = require('../00_HelperFunctions/typeValidation')
const validateRange = require('../00_HelperFunctions/rangeValidation')
/**
 * @param {number[]} arr
 * @return {number}
 */
function duplicateZeros(A) {
  const indiciesOfZeroes = [];

  validate.Array.isArray(A);

  // Find the index of each 0 in Array A and push it
  // into the indicesOfZeroes array

  A.forEach((item, index) => {
    if (item === 0) indiciesOfZeroes.push(index);
  });

  // Increase the length of the array by the length
  // of indiciesOfZeroes. This adds x empty items
  // at the end of A

  // A.length = A.length + indiciesOfZeroes.length;

  // NOTE: mutating the length of the array was not
  // required. The instruction said: "elements beyond the
  // length of the original array are not written"

  // For each index in indiciesOfZeroes:
  // 1. Add a zero at the position item + (index + 1)
  //    and don't delete anything
  // 2. This results in an array that is one item longer than it 
  //    should be
  // 3. Remove the last item from the end of the array

  indiciesOfZeroes.forEach((item, index) => {
    A.splice((item + (index + 1)), 0, 0);
    A.pop();
  });

}

module.exports = duplicateZeros;