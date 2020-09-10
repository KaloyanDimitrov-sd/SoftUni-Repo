function perfectNumber(num) {

    function getDivisorsSumOfNum(number) {
        let sum = 0;

        for (let i = 0; i <= number / 2; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }

        return sum;
    }

    if (getDivisorsSumOfNum(num) === num) {
        console.log("We have a perfect number!");
    } else {
        console.log(" It's not so perfect.");
    }
}


perfectNumber(28);