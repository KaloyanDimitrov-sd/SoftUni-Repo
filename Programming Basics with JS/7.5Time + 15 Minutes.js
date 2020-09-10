function timeMinutes(hours, minutes) {
    hours = Number(hours);
    minutes = Number(minutes);
    minutes = minutes + 15;

    if (minutes > 59) {
        minutes = minutes - 60;
        hours = hours + 1;
    }

    if (hours > 23) {
        hours = hours - 24;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    console.log(`${hours}:${minutes}`);
}

timeMinutes("11", "08");