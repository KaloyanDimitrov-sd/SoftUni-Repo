function wordTracker(inputArray) {

    let words = inputArray.shift();
    let wordArr = words.split(" ");
    let wordObj = {}

    for (let element of wordArr) {
        wordObj[element] = 0;
    }

    for (let element of inputArray) {
        if (wordObj[element] !== undefined) {
            wordObj[element]++;
        }
    }

    let array = Object.entries(wordObj);

    array.sort((a,b) => b[1] - a[1]);

    array.forEach(x => console.log(`${x[0]} - ${x[1]}`));
}

wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);