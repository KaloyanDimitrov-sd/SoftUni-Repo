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

let card = new PlayingCards("5", "H");
console.log(card.face);
console.log(card.suit);
console.log(card.toString());
card.face = "9";
card.suit = "C"
console.log(card.toString());
