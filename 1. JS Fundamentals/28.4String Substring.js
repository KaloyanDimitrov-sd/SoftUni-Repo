function stringSubstring(word, text) {
    let check = word.toLowerCase();
    text = text.toLowerCase();

    if (text.includes(` ${check} `) || text.includes(`${check} `) || text.includes(` ${check}`)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}

stringSubstring('Javascript',
'JavaScript is the best programming language')