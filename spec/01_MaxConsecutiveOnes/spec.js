/* globals describe it */

const expect = require("chai").expect;
const findMaxConsecutiveOnes = require("../../src/01_MaxConsecutiveOnes/");
describe("Arrays 101. Find Max Consecutive Ones", () => {
  describe("#findMaxConsecutiveOnes(nums)", () => {
    it("should be a function", () => {
      expect(findMaxConsecutiveOnes).to.be.a("function");
    });
    it("should return a number", () => {
      expect(findMaxConsecutiveOnes([1, 0, 1, 1])).to.be.a("number");
    });
    it("should throw an error when the first parameter is not an Array", () => {
      expect(function () {
        findMaxConsecutiveOnes(true);
      }).to.throw(TypeError, "The parameter nums must be an Array.");
      expect(function () {
        findMaxConsecutiveOnes(20);
      }).to.throw(TypeError, "The parameter nums must be an Array.");
      expect(function () {
        findMaxConsecutiveOnes({});
      }).to.throw(TypeError, "The parameter nums must be an Array.");
      expect(function () {
        findMaxConsecutiveOnes(null);
      }).to.throw(TypeError, "The parameter nums must be an Array.");
      expect(function () {
        findMaxConsecutiveOnes(undefined);
      }).to.throw(TypeError, "The parameter nums must be an Array.");
    });
    it("should throw an error when the Array contains values that are not numbers", () => {
      expect(function () {
        findMaxConsecutiveOnes([1, 0, false]);
      }).to.throw(RangeError, "The nums Array should only contain numbers.");
      expect(function () {
        findMaxConsecutiveOnes([1, 0, {}]);
      }).to.throw(RangeError, "The nums Array should only contain numbers.");
      expect(function () {
        findMaxConsecutiveOnes([1, 0, null]);
      }).to.throw(RangeError, "The nums Array should only contain numbers.");
      expect(function () {
        findMaxConsecutiveOnes([1, 0, undefined]);
      }).to.throw(RangeError, "The nums Array should only contain numbers.");
      expect(function () {
        findMaxConsecutiveOnes([1, 0, "hello"]);
      }).to.throw(RangeError, "The nums Array should only contain numbers.");
    });
    it("should throw an error when the Array contains values that are not 1 or 0", () => {
      expect(function () {
        findMaxConsecutiveOnes([1, 0, 2, 3]);
      }).to.throw(
        RangeError,
        "The nums Array should only contain the numbers 1 or 0."
      );
    });
    it("should throw an error when the nums Array is empty", () => {
      expect(function () {
        findMaxConsecutiveOnes([]);
      }).to.throw(RangeError, "The nums Array cannot be empty.");
    });
    it("should throw an error when the nums Array has more than 10,000 items.", () => {
      expect(function () {
        let largeArray = [];
        for (let i = 0; i < 10001; i++) {
          largeArray.push(1);
        }
        findMaxConsecutiveOnes(largeArray);
      }).to.throw(
        RangeError,
        "The nums Array cannot have more than 10,000 items."
      );
    });
    it("should return the correct value", () => {
      expect(findMaxConsecutiveOnes([1, 0, 1, 1])).to.eql(2);
      expect(findMaxConsecutiveOnes([1, 0, 1, 1, 1])).to.eql(3);
      expect(findMaxConsecutiveOnes([1, 1, 1, 1, 1, 0, 1, 1, 1])).to.eql(5);
      expect(
        findMaxConsecutiveOnes([
          1,
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1,
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
        ])
      ).to.eql(10);
    });
  });
});