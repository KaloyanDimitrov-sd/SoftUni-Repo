function sumSeconds(time1, time2, time3) {
    time1 = Number(time1);
    time2 = Number(time2);
    time3 = Number(time3);
    let total = time1 + time2 + time3;
    let minutes = Math.floor(total / 60);
    let seconds = total % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}

sumSeconds("35", "45", "44")