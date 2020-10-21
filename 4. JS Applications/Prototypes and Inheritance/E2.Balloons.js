function solve() {

    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        };
    };

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
        };

        get ribbon() {
            return { color: this.ribbonColor, length: this.ribbonLength }
        };
    };

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        };
    };

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    };

};


let p = new PartyBaloon("red", 10, "red", 5);
p.ribbonLength = 15;
console.log(p.ribbon);