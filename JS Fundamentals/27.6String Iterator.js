function stringIterator(input) {

    let array = input.split(" ");

    let words = {
        [Symbol.iterator]: function() {
            return {
                next: function () {
                    let isDone = array.length === 0;
                    let currentWord = array.shift();

                    return {
                        value: currentWord,
                        done: isDone,
                    }
                }
            }
        }
    }

    for (let word of words) {
        console.log(word);
    }
}

stringIterator("Et cillum do voluptate cillum ut cupidatat aliqua.");