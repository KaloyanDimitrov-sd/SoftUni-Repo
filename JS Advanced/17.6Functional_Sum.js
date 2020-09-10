let add = (function () {
    let result = 0;

    function solve(num1) {
        result += num1;
        return solve;
    }

    solve.toString = () => result;
    return solve;
})()

console.log(add(1)(5).toString())