function cinemaTickets(inputArray) {
    let film;
    let capacity;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    let totalTickets = 0;
    let totalStudent = 0;
    let totalStandard = 0;
    let totalKids = 0;
    let i = 0;

    while (inputArray[i] !== "Finish") {
        film = inputArray[i];
        i++
        capacity = Number(inputArray[i]);
        i++
        let availableTickets = capacity;

        while (availableTickets > 0) {
            if (inputArray[i] === "standard") {
                standardTickets++;
                i++;
            } else if (inputArray[i] === "student") {
                studentTickets++;
                i++;
            } else if (inputArray[i] === "kid") {
                kidTickets++;
                i++;
            } else {
                break;
            }
            availableTickets--
        }
        totalKids += kidTickets;
        totalStandard += standardTickets;
        totalStudent += studentTickets;
        totalTickets += (standardTickets + studentTickets + kidTickets);
        console.log(`${film} - ${((standardTickets + studentTickets + kidTickets) / capacity * 100).toFixed(2)}% full.`);
        standardTickets = 0;
        studentTickets = 0;
        kidTickets = 0;
        if (inputArray[i] !== "Finish") {
            i++;
        }
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(totalStudent / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(totalStandard / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(totalKids / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"standard",
"Finish"])