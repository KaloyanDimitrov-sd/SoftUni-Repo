function race(inputArray) {

    let racers = inputArray.shift();
    racers = racers.split(", ");
    let patternName = /[^A-Za-z]/g;
    let patternDistance = /\D/g;
    let racersInfo = {};


    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === "end of race") {
            break;
        }
        let name = inputArray[i].replace(patternName, "");
        let distanceNums = inputArray[i].replace(patternDistance, "");
        let distance = distanceNums.split("").map(Number).reduce((acc, a) => acc + a);

        if (racers.includes(name)) {
            if (racersInfo[name] > 0) {
                racersInfo[name] += distance;
            } else{
                racersInfo[name] = distance;
            }

        }
    }

    racersInfoArray = Object.entries(racersInfo);
    racersInfoArray.sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${racersInfoArray[0][0]}`);
    console.log(`2nd place: ${racersInfoArray[1][0]}`);
    console.log(`3rd place: ${racersInfoArray[2][0]}`);

}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);