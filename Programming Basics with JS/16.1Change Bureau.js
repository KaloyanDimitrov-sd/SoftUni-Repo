function changeBureau(bitcoin, iuan, commission) {
    let dollar = iuan * 0.15;
    let lv = dollar * 1.76 + 1168 * bitcoin;
    let euro = (100 - commission) * lv / 1.95 / 100;
    console.log(euro.toFixed(2));
}

changeBureau(1, 5, 5);