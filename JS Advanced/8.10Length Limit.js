class Stringer {

    constructor(string, initialLength) {
        this.string = string;
        this.initialLength = initialLength;
        this.innerString = string;
        this.innerLength = initialLength;

    }
    increase(length) {
        this.innerLength += length;
    }
    decrease(length) {
        if (length < this.innerLength) {
            this.innerLength -= length;
        } else {
            this.innerLength = 0;
        }
    }
    toString() {
        if (this.string.length <= this.innerLength) {
            return this.string;
        } else {
            this.innerString = this.string.slice(0, this.innerLength) + "...";
            return this.innerString;
        }
    }
}

let s = new Stringer("Viktor", 6);
s.decrease(3);
console.log(s.toString());

