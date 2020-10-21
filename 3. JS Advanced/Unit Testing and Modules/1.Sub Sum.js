function subSum(inputArray, start, end) {

    try {
        if (!Array.isArray(inputArray)) {
            throw new TypeError("NaN");
        }
        if (start < 0) {
            start = 0;
        }
        if (end > inputArray.length) {
            end = inputArray.length;
        }
        if (inputArray.length === 0) {
            return 0;
        }
        let array = inputArray.slice(start, end + 1);
        let result = array.reduce((acc, x) => acc += x);
        if (Number.isNaN(Number(result))) {
            throw new TypeError("NaN");
        }
        return result
    } catch (error) {
        return error.message;
    }
}

console.log(subSum('text', 0, 2));