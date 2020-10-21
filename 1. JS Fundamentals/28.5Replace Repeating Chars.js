function replaceRepeatingChars(input) {

    let array = input.split("");
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i+1]) {
            array.splice(i, 1);
            i--;
        }
    }

    console.log(array.join(""));

}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
