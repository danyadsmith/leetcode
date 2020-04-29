const expect = require("chai").expect;
const validate = require("../../src/00_HelperFunctions/typeValidation");
const validateRange = require("../../src/00_HelperFunctions/rangeValidation");
describe("[Helper Function Unit Tests]", () => {
  describe("Type Validators", () => {
    describe("#Array.isArray()", () => {
      it("should return true when the parameter is an Array", () => {
        expect(validate.Array.isArray([])).to.be.true;
      });
      it("should throw an exception kwhen the parameter is not an Array", () => {
        expect(function () {
          validate.Array.isArray("string", "string")
        }).to.throw(/The parameter string must be an Array./)
        expect(function () {
          validate.Array.isArray(12345, "number")
        }).to.throw(/The parameter number must be an Array./)
        expect(function () {
          validate.Array.isArray(false, "boolean")
        }).to.throw(/The parameter boolean must be an Array./)
        expect(function () {
          validate.Array.isArray(null, "null")
        }).to.throw(/The parameter null must be an Array./)
        expect(function () {
          validate.Array.isArray(undefined, "undefined")
        }).to.throw(/The parameter undefined must be an Array./)
        expect(function () {
          validate.Array.isArray({}, "object")
        }).to.throw(/The parameter object must be an Array./)
      });
    });
  });
  describe("Range Validators", () => {
    describe("#Array.isNotEmpty()", () => {
      it("should return true when the Array is not empty", () => {
        expect(validateRange.Array.isNotEmpty([1, 2, 3])).to.be.true;
      });
      it("should throw an exception when Array is empty", () => {
        expect(function () {
          validateRange.Array.isNotEmpty([], "array")
        }).to.throw(/The array Array cannot be empty./);
      });
    });
    describe("#Array.containsOnlyNumbers()", () => {
      it("should return true when the Array contains only numbers", () => {
        expect(validateRange.Array.containsOnlyNumbers([1, 2, 3], "array")).to.be.true;
        expect(validateRange.Array.containsOnlyNumbers([1, 2, 3, 0, -1, -2, -3, 0.5, 2.3425], "array")).to.be.true;
      });
      it("should throw an exception when there are non-numeric values in the array", () => {
        expect(function () {
          validateRange.Array.containsOnlyNumbers([1, "string"], "array")
        }).to.throw(/The array Array should only contain numbers./);
        expect(function () {
          validateRange.Array.containsOnlyNumbers([1, {}], "array")
        }).to.throw(/The array Array should only contain numbers./);
        expect(function () {
          validateRange.Array.containsOnlyNumbers([1, false, null, undefined, 2, 3, 4, [], 0, -1], "array")
        }).to.throw(/The array Array should only contain numbers./);
      });
    });
    describe("#Array.containsOnlySpecifiedValues()", () => {
      it("should return true when the Array only contains items specified in allowedValues", () => {
        expect(validateRange.Array.containsOnlySpecifiedValues([0, 1, 0], "array", [0, 1])).to.be.true;
        expect(validateRange.Array.containsOnlySpecifiedValues(["cat", "dog", "cat", "cat", "cat", "dog"], "array", ["cat", "dog"])).to.be.true;
      });
      it("should throw an exception when the Array contains values that are not specified as allowedValues", () => {
        expect(function () {
          validateRange.Array.containsOnlySpecifiedValues([1, 2, 4, 3, 5, 3, 4, 2, 1], "array", [1, 2, 3, 4])
        }).to.throw(/The array Array should only contain these values: 1,2,3,4./);
      });
    });
    describe("#Array.maxLength()", () => {
      it("should return true when Array contains fewer than maxItems", () => {
        expect(validateRange.Array.maxItems([], "array", 3)).to.be.true;
        expect(validateRange.Array.maxItems([0], "array", 3)).to.be.true;
        expect(validateRange.Array.maxItems(["cat", "cat", "dog"], "array", 6)).to.be.true;
      });
      it("should return true when Array contains exactly maxItems", () => {
        expect(validateRange.Array.maxItems([0, 1, 0], "array", 3)).to.be.true;
        expect(validateRange.Array.maxItems(["cat", "dog", "cat", "cat", "cat", "dog"], "array", 6)).to.be.true;
      });
      it("should throw an exception when the Array contains more values than specified by maxItems", () => {
        expect(function () {
          validateRange.Array.maxItems([1, 2, 4, 3, 5, 3, 4, 2, 1, 0, 8], "array", 10)
        }).to.throw(/The array Array cannot contain more than 10 items./);
        expect(function () {
          validateRange.Array.maxItems(["x", "y"], "array", 1)
        }).to.throw(/The array Array cannot contain more than 1 items./);
      });
    });
  });
});