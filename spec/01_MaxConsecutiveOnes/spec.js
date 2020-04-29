/* globals describe it */

const expect = require("chai").expect;
const findMaxConsecutiveOnes = require("../../src/01_MaxConsecutiveOnes/");
describe("[Arrays 101. Find Max Consecutive Ones]", () => {
  describe("#findMaxConsecutiveOnes(nums)", () => {
    it("should be a function", () => {
      expect(findMaxConsecutiveOnes).to.be.a("function");
    });
    it("should return a number", () => {
      expect(findMaxConsecutiveOnes([1, 0, 1, 1])).to.be.a("number");
    });
    it("should return the correct value", () => {
      expect(findMaxConsecutiveOnes([1, 0, 1, 1])).to.eql(2);
      expect(findMaxConsecutiveOnes([1, 0, 1, 1, 1])).to.eql(3);
      expect(findMaxConsecutiveOnes([1, 1, 1, 1, 1, 0, 1, 1, 1])).to.eql(5);
      expect(findMaxConsecutiveOnes([0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1])).to.eql(10);
    });
  });
});