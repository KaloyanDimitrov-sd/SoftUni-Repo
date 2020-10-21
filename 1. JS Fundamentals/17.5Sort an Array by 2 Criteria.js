function sortAnArrayBy2Criteria(inputArray) {

    function compareLengthAndAlphabetical(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }
    }
    inputArray.sort(compareLengthAndAlphabetical);
    console.log(inputArray.join("\n"))

}

sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);