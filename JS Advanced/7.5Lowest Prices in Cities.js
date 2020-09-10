function lowestPricesInCities(inputArray) {

    let output = {};
    let newArr = [];


    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] = inputArray[i].split(" | ");
        let isNew = true;
        for (let j = 0; j < newArr.length; j++) {
            if (inputArray[i][0] === newArr[j][0] && inputArray[i][1] === newArr[j][1]) {
                newArr[j][2] = inputArray[i][2];
                isNew = false;
                break;
            }
        }
        if (isNew) {
            newArr.push([...inputArray[i]]);
        }
    }

    for (let element of newArr) {
        let [town, product, price] = element;
        if (output[product] !== undefined) {
            if (Number(output[product][0]) > Number(price)) {
                output[product] = [price, town];
            }
        } else {
            output[product] = [price, town];
        }
    }

    for (let key in output) {
        console.log(`${key} -> ${output[key][0]} (${output[key][1]})`);
    }

}

lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000',
    ]);