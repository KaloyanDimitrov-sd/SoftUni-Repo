function sumPrimeNonPrime(inputArray) {
    let i = 0;
    let num;
    let isPrime = true;
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (inputArray[i] !== "stop") {
        num = Number(inputArray[i]);

        if (num < 0) {
            console.log("Number is negative.")
            i++;
            continue;
        }

        for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sumPrime += num;
        } else {
            sumNonPrime += num;
        }

        isPrime = true;
        i++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])