function modernTimes(input) {

    let array = input.split(" ");

    array = array.filter(x => x[0] === "#" && x.length > 1);

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].substring(1);
        arr = array[i].split("");
        for (let element of arr) {
            if ((element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90) || (
                element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122)) {
                continue;
            } else {
                array.splice(i, 1);
                i--;
                break;
            }
        }
    }
    console.log(array.join("\n"));
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');