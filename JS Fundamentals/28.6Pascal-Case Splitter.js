function pascalCaseSplitter(input) {

    let array = input.split("");

    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[i].toLowerCase()) {
            array.splice(i, 0, ", ");
            i++;
        }
    }

    console.log(array.join(""));

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');