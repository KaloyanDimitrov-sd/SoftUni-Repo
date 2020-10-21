function hotelRoom(month, nights) {
    nights = Number(nights);
    let priceStudio;
    let priceApartment;
    let discountStudio = 1;
    let discountApartment = 1;

    if (month === "May" || month === "October") {
        priceStudio = 50;
        priceApartment = 65;
        if (nights > 14) {
            discountStudio = 0.7;
        } else if (nights > 7) {
            discountStudio = 0.95;
        }
    } else if (month === "June" || month === "September") {
        priceStudio = 75.2;
        priceApartment = 68.7;
        if (nights > 14) {
            discountStudio = 0.8;
        }
    } else {
        priceStudio = 76;
        priceApartment = 77;
    }

    if (nights > 14) {
        discountApartment = 0.9
    }

    console.log(`Apartment: ${(priceApartment * nights * discountApartment).toFixed(2)} lv.`)
    console.log(`Studio: ${(priceStudio * nights * discountStudio).toFixed(2)} lv.`)
}

hotelRoom("May", "15")