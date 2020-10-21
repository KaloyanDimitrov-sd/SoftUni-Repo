function storeProvision(inputArray1, inputArray2) {
    let products = {};
    let name, quantity;

    for (let i = 0; i < inputArray1.length; i += 2) {
        [name, quantity] = [inputArray1[i], Number(inputArray1[i + 1])];
        products[name] = quantity;
    }

    for (let i = 0; i < inputArray2.length; i += 2) {
        [name, quantity] = [inputArray2[i], Number(inputArray2[i + 1])];
        if (products[name] === undefined) {
            products[name] = 0;
        }
        products[name] += quantity;
    }

    for (let key in products) {
        console.log(`${key} -> ${products[key]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);
