function reverseAnArrayOfNumbers(n, inputArray) {
    newArray = inputArray.slice(0, n);
    newArray = newArray.reverse();
    console.log(newArray.join(" "));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);