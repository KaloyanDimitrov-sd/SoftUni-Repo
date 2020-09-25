(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n + 1);
    };

    Array.prototype.sum = function () {
        return this.reduce((acc, x) => acc += x);
    };

    Array.prototype.average = function () {
        return this.reduce((acc, x) => acc += x) / this.length;
    };
})();