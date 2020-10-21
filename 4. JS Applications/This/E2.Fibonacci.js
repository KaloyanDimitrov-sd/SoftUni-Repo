function getFibonator() {
    let arr = [0];
    let fib = () => {
        if (arr.length === 1) {
            arr.push(1);
            return 1;
        }
        let num = arr[arr.length-1] + arr[arr.length-2];
        arr.push(num);
        return num;
    }
    return fib;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
