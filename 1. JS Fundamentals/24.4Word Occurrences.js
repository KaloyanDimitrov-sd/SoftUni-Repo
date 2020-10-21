function wordOccurrences(inputArray) {

    wordsCount = {};

    for (let element of inputArray) {
        if (wordsCount[element]) {
            wordsCount[element]++;
        } else {
            wordsCount[element] = 1;
        }
    }

    let sorted = Object.entries(wordsCount).sort((a, b) => b[1] - a[1]);
    sorted.forEach(x => {
        console.log(`${x[0]} -> ${x[1]} times`);
    });
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);