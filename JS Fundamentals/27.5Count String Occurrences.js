function countStringOccurrences(text, word) {

    let count = 0;

    while (text.includes(` ${word} `)) {
        count++;
        text = text.replace(` ${word} `," ");
    }

    if (text.startsWith(`${word}`)) {
        count++;
    }
    if (text.endsWith(`${word}`)) {
        count++;
    }

    console.log(count);

    // let count = 0;
    // let array = text.split(" ");

    // for (let element of array) {
    //     if (word === element) {
    //         count++;
    //     }
    // }
    // console.log(count);
}

countStringOccurrences("is This is a word and itis also is a sentence is",
"is");