function getConstantBlackJackPoints(cardValue) {
    switch (cardValue) {
        case "2":
            return 2;
        case "3":
            return 3;
        case "4":
            return 4;
        case "5":
            return 5;
        case "6":
            return 6;
        case "7":
            return 7;
        case "8":
            return 8;
        case "9":
            return 9;
        case "10":
        case "Queen":
        case "King":
        case "Jack":
            return 10;
        case "A":
            return 11;
    }
}

function getBlackJackPoints(card1, card2, card3) {
    let c1 = getConstantBlackJackPoints(card1);
    let c2 = getConstantBlackJackPoints(card2);
    let c3 = getConstantBlackJackPoints(card3);
    let sum = c1 + c2 + c3;

    if (sum > 21 && card1 === "A") {
        sum = sum - 10;
    }
    if (sum > 21 && card2 === "A") {
        sum = sum - 10;
    }
    if (sum > 21 && card3 === "A") {
        sum = sum - 10;
    }
return(sum)

}

