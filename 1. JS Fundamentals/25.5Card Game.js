function cardGame(inputArray) {

    let obj = {};

    for (let element of inputArray) {
        let array = element.split(": ");
        let name = array[0];
        let cards = array[1];
        cards = cards.split(", ")
        if (obj[name]) {
            obj[name] = obj[name].concat(cards);
        } else {
            obj[name] = cards;
        }
    }

    for (let key in obj) {
        let set = new Set;
        obj[key].forEach(x => set.add(x));
        arr = Array.from(set);
        result = getValueOfCards(arr);
        obj[key] = result;
        set.clear();
    }

    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }

    function getValueOfCards(array) {
        let result = 0;

        for (let element of array) {
            let cardResult = 0;
            let power = element[0];
            let type = element[element.length - 1];
            if (!Number.isNaN(Number(power))) {
                if (Number(power) === 1) {
                    cardResult += 10;
                } else {
                    cardResult += Number(power);
                }
            } else {
                switch (power) {
                    case "J":
                        cardResult += 11;
                        break;
                    case "Q":
                        cardResult += 12;
                        break;
                    case "K":
                        cardResult += 13;
                        break;
                    case "A":
                        cardResult += 14;
                        break;
                }
            }
            switch (type) {
                case "S":
                    cardResult *= 4
                    break;
                case "H":
                    cardResult *= 3
                    break;
                case "D":
                    cardResult *= 2
                    break;
            }

            result += cardResult;
            cardResult = 0;
        }
        return result;
    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);