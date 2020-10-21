function numberPyramid(input) {
    let num = 1;
    let positions = 1;
    let output = "";
    let isReady = false;

    while (!isReady) {
        for (let i = 0; i < positions; i++) {
            output += `${String(num)} `;
            num++ ;
            if (num > Number(input)) {
                isReady = true;
                break;
            }
        }
        positions++ ;
        console.log(output);
        output = "";
    }
}

numberPyramid(["15"])

