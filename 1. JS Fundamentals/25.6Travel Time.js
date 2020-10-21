function travelTime(inputArray) {

    let obj = {};

    for (let element of inputArray) {
        let [country, town, cost] = element.split(" > ");
        if (obj[country]) {
            if (obj[country][town] < cost) {
                continue;
            } else {
                obj[country][town] = cost;
            }
        } else {
            obj[country] = { [town]: cost };
        }
    }

    let array = Object.entries(obj);
    array.sort((a, b) => a[0].localeCompare(b[0]));

    for (let element of array) {
        element[1] = Object.entries(element[1]);
        element[1].sort((a, b) => Number(a[1]) - Number(b[1]))
    }

    for (let element of array) {
        let text = "";
        for (let index of element[1]) {
            let text1 = index.join(" -> ");
            text = text + " " + text1;
        }
        console.log(`${element[0]} ->${text}`);
        text = "";
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);