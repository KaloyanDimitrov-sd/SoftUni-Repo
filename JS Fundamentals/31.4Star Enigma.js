function starEnigma(inputArray) {

    let pattern = /@(?<planet>[A-Z][a-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->\d+/;
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let i = 1; i < inputArray.length; i++) {
        let count = 0;

        for (let j = 0; j < inputArray[i].length; j++) {
            if ("starSTAR".includes(inputArray[i][j])) {
                count++;
            }
        }
        let letter;
        let newCode = "";

        for (let j = 0; j < inputArray[i].length; j++) {
            let n = inputArray[i].charCodeAt(j);
            letter = String.fromCharCode(n-count);
            newCode += letter;
        }
        let obj = newCode.match(pattern);
        if (obj === null) {
            continue;
        } else if (obj.groups["attackType"] === "A") {
            attackedPlanets.push(obj.groups["planet"]);
        } else if (obj.groups["attackType"] === "D") {
            destroyedPlanets.push(obj.groups["planet"]);
        }
    }
    
    attackedPlanets.sort((a,b) => a.localeCompare(b));
    destroyedPlanets.sort((a,b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(x => console.log(`-> ${x}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(x => console.log(`-> ${x}`));
}

starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
  ]);
