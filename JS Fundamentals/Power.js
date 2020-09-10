function power(num, vac) {
    let key = String(num) + "_" + String(vac);
    let result;

    if (cache[key] === undefined) {
        result = Math.pow(num, vac);
        cache[key] = result;
    } else {
        result = cache.key;
    }

    return result;
}

var cache = {};

power(3,5);
console.log(cache["3_5"]);
