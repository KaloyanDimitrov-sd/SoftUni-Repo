function solution() {

    let string = "";

    return {
        append: function (str) {
            string += String(str);
        },
        removeStart: function (n) {
            string = string.slice(n);
        },
        removeEnd: function (n) {
            string = string.slice(0, string.length - n);
        },
        print: function () {
            console.log(string);
        }
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print()