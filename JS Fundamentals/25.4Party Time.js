function partyTime(inputArray) {

    let i = inputArray.indexOf("PARTY");
    let reservations = inputArray.slice(0, i);
    let guests = inputArray.slice(i + 1);
    let guestsObj = {vip: [], regular: []};


    for (let element of reservations) {
        if (Number.isNaN(Number(element[0]))) {
            guestsObj.regular.push(element);
        } else {
            guestsObj.vip.push(element);
        }
    }

    for (let element of guests) {
        let i = guestsObj.regular.indexOf(element);
        let j = guestsObj.vip.indexOf(element);
        if (guestsObj.regular[i]) {
            guestsObj.regular.splice(i, 1);
        }
        if (guestsObj.vip[j]) {
            guestsObj.vip.splice(j, 1);
        }
    }

    let count = 0;
    for (let key in guestsObj) {
        let num = guestsObj[key].length;
        count += num
    }
    console.log(count);

    for (let key in guestsObj) {
        console.log(guestsObj[key].join("\n"));
    }
}

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]);