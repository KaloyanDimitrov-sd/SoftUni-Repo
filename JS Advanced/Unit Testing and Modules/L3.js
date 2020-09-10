let assert = require("chai").assert;

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe("rgbToHexColor", function () {
    describe("inputs range should be 0-255", function () {
        it("firstNum", function () {
            assert.equal(rgbToHexColor(-10), undefined, "firstNum is not in range");
            assert.equal(rgbToHexColor(260), undefined, "firstNum is not in range");

        });
        it("secondNum", function () {
            assert.equal(rgbToHexColor(10, -10), undefined, "secondNum is not in range");
            assert.equal(rgbToHexColor(10, 260), undefined, "secondNum is not in range");

        });
        it("thirdNum", function () {
            assert.equal(rgbToHexColor(10, 110, -1), undefined, "thirdNum is not in range");
            assert.equal(rgbToHexColor(10, 50, 320), undefined, "thirdNum is not in range");
        });
    });
    describe("inputs should be integer", function () {
        it("firstNum", function() {
            assert.equal(rgbToHexColor(1.654), undefined, "firstNum is not integer");
            assert.equal(rgbToHexColor("10"), undefined, "firstNum is not integer");
            assert.equal(rgbToHexColor({name:"Pesho"}), undefined, "firstNum is not integer");
        });
        it("secondNum", function() {
            assert.equal(rgbToHexColor(10, 1.654), undefined, "secondNum is not integer");
            assert.equal(rgbToHexColor(10, "10"), undefined, "secondNum is not integer");
            assert.equal(rgbToHexColor(10, {name:"Pesho"}), undefined, "secondNum is not integer");
        });
        it("thirdNum", function() {
            assert.equal(rgbToHexColor(20, 10, 1.654), undefined, "thirdNum is not integer");
            assert.equal(rgbToHexColor(20, 10, "10"), undefined, "thirdNum is not integer");
            assert.equal(rgbToHexColor(10, 15, {name:"Pesho"}), undefined, "thirdNum is not integer");
        });
    });
});

