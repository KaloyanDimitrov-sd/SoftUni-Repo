function orders(product, quantity) {
    let price;
    switch (product) {
        case "coffee":
            price = 1.5;
            break;
        case "water":
            price = 1;
            break;
        case "coke":
            price = 1.4;
            break;
        case "snacks":
            price = 2;
            break;
    }
    let totalPrice = (x, y) => x * y;
    return totalPrice(price, quantity).toFixed(2);
}