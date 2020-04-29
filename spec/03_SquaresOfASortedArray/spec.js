const expect = require('chai').expect;
const sortedSquares = require('../../src/03_SquaresOfASortedArray/');

describe('[Arrays 101. Squares of a Sorted Array]', () => {
  describe('#sortedSquares(A)', () => {
    it('should be a function', () => {
      expect(sortedSquares).to.be.a('function');
    });
    it('should return an Array', () => {
      expect(sortedSquares([1, 2, 3, 4])).to.be.a('Array');
    });
    it('the returned array should contain the squares of the values in the input Array', () => {
      expect(sortedSquares([1, 2, 3, 4])).to.eql([1, 4, 9, 16]);
    });
    it('the returned array should be sorted in ascending order', () => {
      expect(sortedSquares([-4, -1, 0, 3, 10])).to.eql([0, 1, 9, 16, 100]);
    });
  });
});