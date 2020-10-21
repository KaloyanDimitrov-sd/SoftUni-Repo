function phoneBook(inputArray) {

    let phonesObj = {};

    for (let element of inputArray) {
        let arr = element.split(" ");
        let [name, num] = [arr[0], arr[1]];
        phonesObj[name] = num;
    }

    for (let key in phonesObj) {
        console.log(`${key} -> ${phonesObj[key]}`);
    }

}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);