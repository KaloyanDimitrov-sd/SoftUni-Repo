function argumentInfo() {

    let obj = {};

    for (let element of arguments) {
        let type = typeof (element);
        console.log(`${type}: ${element}`);
        if (obj[type] === undefined) {
            obj[type] = 1;
        } else {
            obj[type]++;
        }
    }

    let arr = Object.entries(obj);
    arr.sort((a,b) => b[1] - a[1]);
    arr.forEach(element => console.log(`${element[0]} = ${element[1]}`))
}

argumentInfo(42, 'cat', 15, 'kitten', 'tomcat')