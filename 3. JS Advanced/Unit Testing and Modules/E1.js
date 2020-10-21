let assert = require("chai").assert;
let expect = require("chai").expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("isOddOrEven", function() {
    it ("should return undefined with a number parameter", function() {
        expect(isOddOrEven(15)).to.equal(undefined);
    });
    it ("should return undefined with a number parameter", function() {
        assert.equal(isOddOrEven(15),undefined);
    });
    it ("should return undefined with an object parameter", function() {
        assert.equal(isOddOrEven({animal: "cat"}), undefined)
    });
    it ("should return undefined with an array parameter", function() {
        assert.equal(isOddOrEven(["Pesho", "Gosho"]), undefined)
    });
    it ("should return even if string length is even", function() {
        assert.equal(isOddOrEven("even"), "even")
    });
    it ("should return odd if string length is odd", function() {
        assert.equal(isOddOrEven("odd"),"odd")
    });
});
