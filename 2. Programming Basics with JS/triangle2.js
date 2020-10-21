function triangle2(input) {
    let space = " ";
    let star = "*";
    let spaceNum = (input / 2) - 1;
    let starNum = 1;
    let output = " ";

    for (let i = 0; i < input; i += 2) {
        for (let j = 0; j < spaceNum; j++) {
            output += space;
        }
        for (let k = 0; k < starNum; k++) {
            output += star;
        }
        console.log(output);
        spaceNum--;
        starNum += 2;
        output = " ";
    }
}

triangle2(3);