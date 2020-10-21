function workingHours(hour, day) {
    hour = Number(hour);

    if (hour < 10 || hour > 18) {
        console.log("closed");
    } else {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open");
                break;
            case "Sunday":
                console.log("closed");
                break;
        }
    }
}

workingHours("11", "Monday")