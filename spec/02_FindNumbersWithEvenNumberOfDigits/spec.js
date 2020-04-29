/* globals describe it */

const expect = require('chai').expect;
const findNumbers = require('../../src/02_FindNumbersWithEvenNumberOfDigits/');

describe('[Arrays 101. Find Numbers with Even Number of Digits]', () => {
  describe('#findNumbers(nums)', () => {
    it('should be a function', () => {
      expect(findNumbers).to.be.a('function');
    });
    it('should return a number', () => {
      expect(findNumbers([1, 23, 456, 7890])).to.be.a('number');
    });
    it("should return 0 when the nums Array is empty", () => {
      expect(findNumbers([])).to.eql(0);
    });
    it("should return 0 when all of the numbers in the Array have an odd number of digits", () => {
      expect(findNumbers([1, 234, 56789])).to.eql(0);
    });
    it("should return the correct response when the Array contains numbers with an even number of digits", () => {
      expect(findNumbers([1, 234, 56789, 10])).to.eql(1);
      expect(findNumbers([12, 345, 2, 6, 7896])).to.eql(2);
      expect(findNumbers([1, 23, 4567, 98, 543200])).to.eql(4);
    });
  });
});