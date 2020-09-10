let assert = require("chai").assert;

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

describe("createCalculator", function() {
    it ("should return object", function() {
        assert.equal(typeof(createCalculator()), "object", "result is not an object")
    })
    it ("internal sum cant be modified", function() {
            let calc = createCalculator();
            calc.value = 5;
            assert.equal(calc.get(), 0, "internal sum can be modified");
    });
    it ("add and subtract", function() {
        let calc = createCalculator();
        calc.add(4)
        calc.add("4")
        assert.equal(calc.get(), 8, "add not working");
    })
})


