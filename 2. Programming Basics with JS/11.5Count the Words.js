function countTheWords(text) {
    let words = 1;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            words++
        }
    }

    if (words > 10) {
        console.log(`The message is too long to be send! Has ${words} words.`)
    } else {
        console.log(`The message was send successfully!`)
    }
}

countTheWords("This message has exactly eleven words. One more as it's allowed!");