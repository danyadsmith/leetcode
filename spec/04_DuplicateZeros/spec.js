const expect = require('chai').expect;
const duplicateZeros = require('../../src/04_DuplicateZeros/');

describe('[Arrays 101. Duplicate Zeros]', () => {
  describe('#duplicateZeros(arr)', () => {
    it('should be a function', () => {
      expect(duplicateZeros).to.be.a('function');
    });
    it('should not return a value', () => {});
    it('should duplicate each occurence of a zero in the Array in place', () => {
      // Arrange
      let testArray = [1, 0, 2, 3, 0, 4, 5, 0];
      // Act
      duplicateZeros(testArray);
      // Assert
      expect(testArray).to.eql([1, 0, 0, 2, 3, 0, 0, 4]);
    });

    it('should not mutate the Array if it does not include any zeros', () => {
      // Arrange
      let testArray = [1, 2, 3];
      // Act
      duplicateZeros(testArray);
      // Assert
      expect(testArray).to.eql([1, 2, 3]);
    });
    it('should duplicate each occurence of a zero in the Array even if there are several zeros in a row', () => {
      // Arrange
      let testArray = [1, 0, 2, 3, 0, 4, 5, 0, 0, 1];
      // Act
      duplicateZeros(testArray);
      // Assert
      expect(testArray).to.eql([1, 0, 0, 2, 3, 0, 0, 4, 5, 0]);
    });

  });
});