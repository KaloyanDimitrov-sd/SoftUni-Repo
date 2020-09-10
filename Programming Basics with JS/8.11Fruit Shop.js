function fruitShop(fruit, day, amount) {
    amount = Number(amount);
    let price;
    let isValid = true;
    
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            day = "lowPrice";
            break;
        case "Saturday":
        case "Sunday":
            day = "highPrice";
            break;
        default:
            isValid = false
            break;
    }
    if (day === "lowPrice") {
        switch (fruit) {
            case "banana":
                price = 2.5;
                break;
            case "apple":
                price = 1.2;
                break;
            case "orange":
                price = 0.85;
                break;
            case "grapefruit":
                price = 1.45;
                break;
            case "kiwi":
                price = 2.7;
                break;
            case "pineapple":
                price = 5.5;
                break;
            case "grapes":
                price = 3.85;
                break;
            default:
                isValid = false
                break;
        }
    } else {
        switch (fruit) {
            case "banana":
                price = 2.7;
                break;
            case "apple":
                price = 1.25;
                break;
            case "orange":
                price = 0.9;
                break;
            case "grapefruit":
                price = 1.6;
                break;
            case "kiwi":
                price = 3;
                break;
            case "pineapple":
                price = 5.6;
                break;
            case "grapes":
                price = 4.2;
                break;
            default:
                isValid = false
                break;
        }
    }
    if (isValid) {
        console.log((amount * price).toFixed(2));
    } else {
        console.log("error");
    }

}