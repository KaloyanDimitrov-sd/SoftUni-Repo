function oldBooks(inputArray) {
    let book = inputArray[0];
    let i = 1;
    let isFound = false;

    while (inputArray[i] !== "No More Books") {
        if (inputArray[i] === book) {
            isFound = true;
            break;
        }
        i++
    }

    if (isFound) {
        console.log(`You checked ${i-1} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${i-1} books.`);
    }
}

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])