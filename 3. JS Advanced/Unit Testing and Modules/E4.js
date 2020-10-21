class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}

let assert = require("chai").assert;
let text = new StringBuilder("hello");
let empty = new StringBuilder("");


describe("StringBuilder", function() {
    it("Should be instantiated with a passed in string argument or without anything", function() {
        assert.equal(text.toString(), "hello", "not working properly with argument string");
        assert.equal(empty.toString(), "", "not working properly without argument");
        assert.throws(() => new StringBuilder("12"), "should return error with type of input number");
    });
});
        assert.equal(text.toString(), "hello", "not working properly with argument string");
        assert.equal(empty.toString(), "", "not working properly without argument");
        assert.throws(() => new StringBuilder("12"), "should return error with type of input number");
