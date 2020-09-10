function nxnMatrix(num) {

    function getArrayOfNum(number) {
        let arr = [];

        for (let i = 0; i < number; i++) {
            arr.push(number);
        }

        return arr;
    }

    for (let i = 0; i < num; i++) {
        console.log((getArrayOfNum(num).join(" ")));
    }

}


nxnMatrix(7);