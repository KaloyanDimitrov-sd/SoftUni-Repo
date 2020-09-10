function censoredWords(text, word) {

    while (text.includes(word)) {
        let newWord = "*".repeat(word.length);
        text = text.replace(word, newWord);
    }

    console.log(text);
}

censoredWords("A small sentence with some words", "small");