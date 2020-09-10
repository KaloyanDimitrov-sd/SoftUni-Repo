let assert = require("chai").assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcer", function () {
    it("addFive method", function () {
        assert.equal(mathEnforcer.addFive(10), 15, "result is not correct");
        assert.equal(mathEnforcer.addFive("asd"), undefined, "input string should return undefined");
    });
    it("sum method", function () {
        assert.equal(mathEnforcer.sum(1.1, 2.2), 3.3, "result is not correct");
        assert.closeTo(mathEnforcer.sum(1.1, 2.2), 3.3, 0.0001, "result is not correct");
    });
});
