function getLengthBetweenPoints(x1, y1, x2, y2) {
    // let a;
    let b;
    let length;

    // if (x1 > x2) {
    //     a = x1 - x2;
    // } else {
    //     a = x2 - x1;
    // }

    const a = Math.abs (x1-x2);

    if (y1 > y2) {
        b = y1 - y2;
    } else {
        b = y2 - y1;
    }

    length = Math.sqrt(a ** 2 + b ** 2);
    console.log(length);
    return(length)
}


getLengthBetweenPoints(1, 1, 3, 3)