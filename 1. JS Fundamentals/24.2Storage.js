function storage(inputArray) {

    let productsObj = {};

    for (let element of inputArray) {
        let arr = element.split(" ");
        let [name, quantity] = [arr[0], arr[1]];
        if (productsObj[name]) {
            productsObj[name] += Number(quantity);
        } else {
            productsObj[name] = Number(quantity);
        }

    }

    for (let key in productsObj) {
        console.log(`${key} -> ${productsObj[key]}`);
    }

}


storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);