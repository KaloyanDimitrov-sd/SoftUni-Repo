let assert = require("chai").assert;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe("isSymmetric", function () {
    describe("is input correct", function () {
        it("should return false with type of input number", function () {
            assert.equal(isSymmetric(13), false);
        })
        it("should return false with type of input string", function () {
            assert.equal(isSymmetric("string"), false);
        })
        it("should return false with type of input object", function () {
            assert.equal(isSymmetric({ name: "Pesho" }), false);
        })
    });
    describe("is result correct", function () {
        it("should return true with input symmetric array", function () {
            assert.equal(isSymmetric([1, 3, 5, 3, 1]), true);
        })
        it("should return false with input non-symmetric array", function () {
            assert.equal(isSymmetric(["1", "3", 5, 3, 1]), false);
        })
    });
});
