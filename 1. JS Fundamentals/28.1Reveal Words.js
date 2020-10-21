function revealWords(words, text) {

    let wordsArr = words.split(", ");

    for (let element of wordsArr) {
        let stars = "*".repeat(element.length);
        while (text.includes(` ${stars} `)) {
            text = text.replace(` ${stars} `, ` ${element} `);
        }
        if (text.startsWith(`${stars} `)) {
            text = text.replace(`${stars} `, `${element} `);
        }
        if (text.endsWith(` ${stars}`)) {
            text = text.replace(` ${stars}`, ` ${element}`);
        }
    }

    console.log(text);

}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');