function inventory(inputArray) {

    let heroesArray = [];

    class Heroes {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
            this.print = () => {
                console.log(`Hero: ${this.name}`);
                console.log(`level => ${level}`);
                console.log(`items => ${items.join(", ")}`);
            }
        }
    }

    for (let element of inputArray) {
        let arr = element.split(" / ");
        let [name, level, itemsStr] = [arr[0], Number(arr[1]), arr[2]];
        let items = itemsStr.split(", ");
        items.sort();
        let hero = new Heroes(name, level, items);
        heroesArray.push(hero);
    }

    heroesArray.sort((a, b) => a.level - b.level);

    heroesArray.forEach(x => x.print());

}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);