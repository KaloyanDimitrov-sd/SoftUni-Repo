function passwordValidator(password) {

    function isDigit(input) {
        if (input.charCodeAt(0) >= 48 && input.charCodeAt(0) <= 57) {
            return true;
        } else {
            return false;
        }
    }

    function isLetterOrDigit(pass) {

        let isLettOrDig = true;

        function isLetter(input) {
            if ((input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) || (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122)) {
                return true;
            } else {
                return false;
            }
        }

        for (let element of pass) {
            if (!isDigit(element) && !isLetter(element)) {
                isLettOrDig = false;
            }
        }

        return isLettOrDig;
    }

    function isLengthGood(pass) {
        let isOk = false;

        if (pass.length >= 6 && pass.length <= 10) {
            isOk = true;
        }

        return isOk;
    }

    function isPassHave2Digits(pass) {
        let count = 0;
        let isOk = false;

        for (let element of pass) {
            if (isDigit(element)) {
                count++;
            }
            if (count === 2) {
                isOk = true;
            }
        }

        return isOk;
    }

    if (isLetterOrDigit(password) && isLengthGood(password) && isPassHave2Digits(password)) {
        console.log("Password is valid");
    }
    
    if (!isLengthGood(password)) {
        console.log("Password must be between 6 and 10 characters")
    }

    if (!isLetterOrDigit(password)) {
        console.log("Password must consist only of letters and digits")
    }

    if (!isPassHave2Digits(password)) {
        console.log("Password must have at least 2 digits")
    }
}


passwordValidator('logIn');