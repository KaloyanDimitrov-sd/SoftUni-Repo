function gladiatorInventory(inputArray) {
    let commands = [];
    let inventory = inputArray[0].split(" ");
    inputArray.shift();

    for (let element of inputArray) {
        commands = element.split(" ");

        switch (commands[0]) {
            case "Buy":
                if (!inventory.includes(commands[1])) {
                    inventory.push(commands[1]);
                }
                break;
            case "Trash":
                inventory = inventory.filter(x => x !== commands[1]);
                break;
            case "Repair":
                let index = inventory.indexOf(commands[1]);
                if (index !== -1) {
                    let repaired = inventory.splice(index, 1);
                    inventory.push(repaired[0]);
                }
                break;
            case "Upgrade":
                let upgradeEquip = commands[1].split("-");
                let i = inventory.indexOf(upgradeEquip[0]);
                if (i !== -1) {
                    inventory.splice(i + 1, 0,`${upgradeEquip[0]}:${upgradeEquip[1]}`);
                }
                break;
        }
    }

    console.log(inventory.join(" "));
}


gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']);