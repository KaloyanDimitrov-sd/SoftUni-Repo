function winningTicket(inputArray) {
    let patternSplit = /[,\s]+/g;
    let tickets = inputArray[0].split(patternSplit);

    for (let element of tickets) {
        if (element.length !== 20) {
            console.log("invalid ticket");
        } else {
            
        }
    }
console.log();
}

winningTicket([ '$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey' ]);