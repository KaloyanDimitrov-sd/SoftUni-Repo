function furniture(inputArray) {

    let pattern = />>(?<furniture>\w+)<<(?<price>[0-9.]+)!(?<quantity>[0-9]+)/;
    let boughtFurniture = [];

    for (let element of inputArray) {
        if (element === "Purchase") {
            break;
        }
        
        let obj = element.match(pattern);
        if (obj !== null) {
            boughtFurniture.push(obj);
        }
    }
    console.log("Bought furniture:");
    boughtFurniture.forEach(x => console.log(x.groups["furniture"]));
    let sum = 0;
    boughtFurniture.forEach(x => sum += x.groups["price"]*x.groups["quantity"]);
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);