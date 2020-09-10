function listOfProducts(inputArray) {
    let sorted = inputArray.sort();
    let i = 1;

    for (let element of sorted) {
        console.log(`${i}.${element}`);
        i++;
    }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);