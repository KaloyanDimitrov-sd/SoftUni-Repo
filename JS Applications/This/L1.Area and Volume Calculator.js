function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};

function solve(area, vol, input) {
    let areaResult, volResult, obj;
    let arr = [];
    input = JSON.parse(input)

    for (let element of input) {
        areaResult = Math.abs(area.call(element));
        volResult = Math.abs(vol.call(element));
        obj = {area: areaResult, volume: volResult};
        arr.push(obj);
    };

    return arr;
};

console.log(solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`));