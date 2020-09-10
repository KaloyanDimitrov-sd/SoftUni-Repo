function reverseAnArrayOfStrings(inputArray) {
    newArray = [...inputArray];
    newArray = newArray.reverse();
    console.log(newArray.join(" "));
}


reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e'])