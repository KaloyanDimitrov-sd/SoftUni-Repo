function solve() {
    class Figure {
        #initialUnits;
        #currentUnitsMultiplier;
        #unitsMultipliers;
        constructor(units = "cm") {
            this.units = units;
            this.#initialUnits = units;
            this.#unitsMultipliers = {'mm': 0.1, 'cm': 1, 'm': 100};

            this.#currentUnitsMultiplier =  this.#unitsMultipliers["cm"] / this.#unitsMultipliers[this.units];
        }

        changeUnits(value) {
            this.#currentUnitsMultiplier =  this.#unitsMultipliers["cm"] / this.#unitsMultipliers[value];
            this.units = value;
        }

        get unitsMultiplier() {
            return this.#currentUnitsMultiplier;
        }
    }

    class Circle extends Figure {
        constructor(radius, units = "cm") {
            super(units);

            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius * this.unitsMultiplier * this.unitsMultiplier;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius * this.unitsMultiplier}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units = "cm") {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height * this.unitsMultiplier * this.unitsMultiplier;
        }

        toString() {

            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width * this.unitsMultiplier}, height: ${this.height * this.unitsMultiplier}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}