function summerOutfit(degrees, time) {
    degrees = Number(degrees);
    let outfit;
    let shoes;

    if (10 <= degrees && degrees <= 18) {
        switch (time) {
            case "Morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
        }
    } else if (18 < degrees && degrees <=24) {
        switch (time) {
            case "Morning":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
        }
    } else {
        switch (time) {
            case "Morning":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon":
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}