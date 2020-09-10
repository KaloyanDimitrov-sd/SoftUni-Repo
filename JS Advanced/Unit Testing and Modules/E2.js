let assert = require("chai").assert;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe("lookupChar", function() {
    it("input types check", function() {
        assert.equal(lookupChar(1, "asd"), undefined, "input types are not correct");
    });
    it("input index range check", function() {
        assert.equal(lookupChar("asdew", 10), "Incorrect index", "index is not in range of string");
    });
    it("result check", function() {
        assert.equal(lookupChar("asdew", 1), "s", "result is not correct");
    });
})