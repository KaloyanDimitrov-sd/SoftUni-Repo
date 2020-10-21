function lastKNumbersSequance(n, k) {
    let newArray = [1];
    let newNum = 0;

    while (newArray.length < n) {
        if (newArray.length <= k) {
            for (let element of (newArray)) {
                newNum += element;
            }

            newArray.push(newNum);
            newNum = 0;

        } else {
            let arr = newArray.slice(newArray.length - k);
            for (let element of arr) {
                newNum += element;
            }

            newArray.push(newNum);
            newNum = 0;
        }
    }

    console.log(newArray.join(" "))
}

lastKNumbersSequance(8, 2)