let solution = (function () {
    let storeElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    return function (input) {

        let recipeObj = {
            apple: { carbohydrate: 1, flavour: 2 },
            lemonade: { carbohydrate: 10, flavour: 20 },
            burger: { carbohydrate: 5, fat: 7, flavour: 3 },
            eggs: { protein: 5, fat: 1, flavour: 1 },
            turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
        }

        let [command, text, num] = input.split(" ");

        let restock = function (element, num) {
            storeElements[element] += num;
            return ("Success");
        }

        let prepare = function (recipe, num) {
            let arr = Object.entries(recipeObj[recipe]);
            let storeElements1 = { ...storeElements };
            for (let element of arr) {
                if (storeElements[element[0]] >= element[1] * num) {
                    storeElements[element[0]] -= element[1] * num;
                } else {
                    storeElements = { ...storeElements1 };
                    return (`Error: not enough ${element[0]} in stock`);
                }
            }

            return ("Success");
        }

        let report = function () {
            return(`protein=${storeElements.protein} carbohydrate=${storeElements.carbohydrate} fat=${storeElements.fat} flavour=${storeElements.flavour}`);
        }

        if (command === "restock") {
            return restock(text, Number(num));
        }
        if (command === "prepare") {
            return prepare(text, Number(num));
        }
        if (command === "report") {
            return report();
        }
    }
})

let manager = solution();
console.log(manager("restock flavour 50"));  // Success
console.log(manager("prepare lemonade 4"));  // Error: not enough carbohydrate in stock
