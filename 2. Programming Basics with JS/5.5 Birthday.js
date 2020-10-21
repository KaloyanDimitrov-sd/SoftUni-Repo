function birthday(input) {
    let rent = Number(input);
    let cake = 0.2 * rent;
    let drink = 0.55 * cake;
    let animator = rent / 3;
    let overall= rent + cake + drink + animator;

    console.log(overall);
}

birthday("2250")