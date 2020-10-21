function tickets(inputArray, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticketsArray = [];

    for (let element of inputArray) {
        let arr = element.split("|");
        let obj = new Ticket(arr[0], Number(arr[1]), arr[2]);
        ticketsArray.push(obj);
    }

    switch (criteria) {
        case "destination":
            ticketsArray.sort((a,b) => a["destination"].localeCompare(b["destination"]));
            break;
        case "price":
            ticketsArray.sort((a,b) => Number(a["price"]) - Number(b["price"]));
            break;
        case "status":
            ticketsArray.sort((a,b) => a["status"].localeCompare(b["status"]));
            break;
    }

    return ticketsArray;

}

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');