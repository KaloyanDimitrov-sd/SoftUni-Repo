class PlayingCards {
    constructor(face, suit) {
        this.validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        this.validSuits = ['S', 'H', 'D', 'C'];
        this.suitsObj = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" };
        if (!this.validFaces.includes(face)) {
            throw new TypeError("Invalid face");
        }
        if (!this.validSuits.includes(suit)) {
            throw new TypeError("Invalid suit");
        }
        this.cardFace = face;
        this.cardSuit = suit;
    }

    set face(input) {
        if (!this.validFaces.includes(input)) {
            throw new TypeError("Invalid face");
        }
        this.cardFace = input;
        return this.cardFace;
    }
    set suit(input) {
        if (!this.validSuits.includes(input)) {
            throw new TypeError("Invalid suit");
        }
        this.cardSuit = input;
        return this.cardSuit;
    }
    get face() {
        return this.cardFace;
    }
    get suit() {
        return this.cardSuit;
    }
    toString() {
        return this.cardFace + this.suitsObj[this.cardSuit];
    }
}

function deckOfCards(inputArray) {
    let deck = [];
    let currentCard;

    try {
        for (let element of inputArray) {
            let face = element.slice(0, element.length - 1);
            let suit = element.slice(element.length - 1);
            currentCard = element;
            let card = new PlayingCards(face, suit);
            deck.push(card);
        }

        console.log(deck.join(" "));
    } catch (error) {
        console.log(`Invalid card: ${currentCard}`);
    }


}

deckOfCards(['AS', '10D', 'KH', '2C']);