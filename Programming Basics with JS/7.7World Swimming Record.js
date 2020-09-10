function worldSwimmingRecord(record, distance, time1m) {
    record = Number(record);
    distance = Number(distance);
    time1m = Number(time1m);
    let time = time1m * distance;
    let delay = Math.floor(distance / 15 ) * 12.5;
    time = time + delay;
    if (time < record) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(time - record).toFixed(2)} seconds slower.`)
    }
}
