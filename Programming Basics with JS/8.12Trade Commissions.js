function tradeCommissions(town, sales) {
    sales = Number(sales);
    let isValid = true;
    let commissionSofia;
    let commissionVarna;
    let commissionPlovdiv;

    if (sales < 0) {
        isValid = false;
    } else {
        if (sales <= 500) {
            commissionSofia = 5;
            commissionVarna = 4.5;
            commissionPlovdiv = 5.5;
        } else if (500 < sales && sales <= 1000) {
            commissionSofia = 7;
            commissionVarna = 7.5;
            commissionPlovdiv = 8;
        } else if (1000 < sales && sales <= 10000) {
            commissionSofia = 8;
            commissionVarna = 10;
            commissionPlovdiv = 12;
        } else {
            commissionSofia = 12;
            commissionVarna = 13;
            commissionPlovdiv = 14.5;
        }
    }

    if (isValid) {
        if (town === "Sofia") {
            console.log((commissionSofia / 100 * sales).toFixed(2));
        } else if (town === "Varna") {
            console.log((commissionVarna / 100 * sales).toFixed(2));
        } else if (town === "Plovdiv") {
            console.log((commissionPlovdiv / 100 * sales).toFixed(2));
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }
}