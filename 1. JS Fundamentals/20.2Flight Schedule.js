function flightSchedule(inputArray) {
    let flightsInfo = {};
    let flightsInfoArr = [];

    for (let element of inputArray[0]) {
        let arr = element.split(" ");
        flightsInfo = { flight: arr[0], destination: arr[1], status: "Ready to fly" };
        flightsInfoArr.push(flightsInfo);
    }

    for (let element of inputArray[1]) {
        let arr = element.split(" ");
        for (let x of flightsInfoArr) {
            if (x.flight === arr[0]) {
                x.status = arr[1];
            }
        }
    }

    for (let element of flightsInfoArr) {
        if (element.status === inputArray[2][0]) {
            console.log(`{ Destination: '${element.destination}', Status: '${element.status}' }`);
        }
    }
}

flightSchedule([["WN269 Delaware","FL2269 Oregon","WN498 Las vegas","WN3145 Ohio","WN612 Alabama","WN4010 New York","WN1173 California","DL2120 Texas","KL5744 Illinois","WN678 Pennsylvania"],["DL2120 Cancelled","WN612 Cancelled","WN1173 Cancelled","SK330 Cancelled"],["Ready to fly"]]);