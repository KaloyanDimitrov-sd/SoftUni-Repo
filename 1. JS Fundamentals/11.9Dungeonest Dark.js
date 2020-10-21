function dungeonestDark(inputArray) {
    let hp = 100;
    let coins = 0;
    let monster;
    let room;
    let isAlive = true;
    let hpDiff;

    let newArray = inputArray[0].split("|");

    for (let i = 0; i < newArray.length; i++) {
        let arr = newArray[i].split(" ");
        if (arr[0] === "potion") {
            hp += Number(arr[1]);
            if (hp > 100) {
                hpDiff = hp - 100;
                hp = 100;
                arr[1] = arr[1] - hpDiff;
            }
            console.log(`You healed for ${arr[1]} hp.`);
            console.log(`Current health: ${hp} hp.`)
        } else if (arr[0] === "chest") {
            console.log(`You found ${arr[1]} coins.`);
            coins += Number(arr[1]);
        } else {
            monster = arr[0];
            hp -= arr[1];
            room = i + 1;
            if (hp > 0) {
                console.log(`You slayed ${monster}.`)
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${room}`);
                isAlive = false;
                break;
            }
        }
    }

    if (isAlive) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${hp}`);
    }
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);