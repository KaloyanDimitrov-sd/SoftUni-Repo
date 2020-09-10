function softUniBarIncome(inputArray) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|([^|$%.]*[^\d|$%.]{1})?(?<price>[0-9.]+)\$/;
    let total = 0;

    for (let element of inputArray) {
        if (element === "end of shift"){
            break;
        }
        let info = element.match(pattern);
        if (info !== null) {
            console.log(`${info.groups["name"]}: ${info.groups["product"]} - ${(Number(info.groups["price"]) * Number(info.groups["count"])).toFixed(2)}`);
            total += Number(info.groups["price"]) * Number(info.groups["count"]);
        }
    }

    console.log(`Total income: ${total.toFixed(2)}`);

}

softUniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
  ]);