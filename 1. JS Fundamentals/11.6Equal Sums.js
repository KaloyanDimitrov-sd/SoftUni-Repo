function equalSums(inputArray) {
    let sumBefore = 0;
    let sumAfter = 0;
    let isEqual = false;

    for (let i = 0; i < inputArray.length; i++) {
        for (j = 0; j < inputArray.length; j++) {
            if (j < i) {
                sumBefore += Number(inputArray[j]);
            } else if (j > i) {
                sumAfter += Number(inputArray[j]);
            }
        }

        if (sumBefore === sumAfter) {
            console.log(i);
            isEqual = true;
            break;
        }

        sumBefore = 0;
        sumAfter = 0;
    }

    if (!isEqual) {
        console.log("no");
    }
}


equalSums([10,5,5,99,3,4,2,5,1,1,4]);