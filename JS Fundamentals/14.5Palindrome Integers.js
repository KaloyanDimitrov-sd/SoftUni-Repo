function palindromeIntegers(inputArray) {
    let isPalindrome = (input) => {
        input = String(input);
        for (let i = 0; i < Math.floor(input.length / 2); i++) {
            if (Number(input[i]) !== Number(input[input.length - i - 1])) {
                return false;
            }
        }
        return true;
    }

    for (let j = 0; j < inputArray.length; j++) {
        console.log(isPalindrome(inputArray[j]));
    }


}

palindromeIntegers([32,2,232,1010]);