function Spy(target, met) {
    let originalFunction = target[met];
    let result = {count: 0};

    target[met] = function() {
        result.count++;
        return originalFunction()
    }

    return result;
}

let obj = {
    gg:()=>"invoked"
}
let spy = Spy(obj,"gg");

console.log(obj.gg());
console.log(obj.gg());
console.log(obj.gg());

console.log(spy) // { count: 3 }