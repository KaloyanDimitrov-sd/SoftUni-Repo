function arenaTier(inputArray) {

    let gladiatorsObj = {};

    for (let element of inputArray) {
        if (element === "Ave Cesar") {
            break;
        }

        let array = element.split(" ");

        if (array[1] === "vs") {
            let [gladiator1, gladiator2] = [array[0], array[2]];
            if (gladiatorsObj[gladiator1] && gladiatorsObj[gladiator2]) {
                let tech1 = Object.keys(gladiatorsObj[gladiator1]);
                let skill1 = Object.values(gladiatorsObj[gladiator1]);
                let totalSkill1 = 0;
                let tech2 = Object.keys(gladiatorsObj[gladiator2]);
                let skill2 = Object.values(gladiatorsObj[gladiator2]);
                let totalSkill2 = 0;
                for (let i = 0; i < tech2.length; i++) {
                    let j = tech1.indexOf(tech2[i]);
                    if (j > -1) {
                        for (let element of (skill1)) {
                            totalSkill1 += Number(element);
                        }
                        for (let element of (skill2)) {
                            totalSkill2 += Number(element);
                        }
                        if (totalSkill1 > totalSkill2) {
                            delete gladiatorsObj[gladiator2];
                        } else if (totalSkill2 > totalSkill1) {
                            delete gladiatorsObj[gladiator1];
                        }
                        break;
                    }
                }
            }
            continue;
        } else {
            let [name, technique, skill] = element.split(" -> ");

            if (gladiatorsObj[name]) {
                if (!gladiatorsObj[name][technique] || gladiatorsObj[name][technique] < skill) {
                    gladiatorsObj[name][technique] = skill;
                }
            } else {
                gladiatorsObj[name] = { [technique]: skill };
            }
        }
    }

    let totalSkill = 0;
    for (let element in gladiatorsObj) {
        let arr = Object.values(gladiatorsObj[element]);
        for (let i of arr) {
            totalSkill += Number(i);
        }
        gladiatorsObj[element]["totalSkill"] = totalSkill;
        totalSkill = 0;
    }

    let gladiatorsArr = [];

    for (let key in gladiatorsObj) {
        gladiatorsObj[key] = Object.entries(gladiatorsObj[key]);
    }

    gladiatorsArr = Object.entries(gladiatorsObj);

    gladiatorsArr.sort((a, b) => {
        if (b[1][b[1].length - 1][1] === a[1][a[1].length - 1][1]) {
            return a[0].localeCompare([b][0]);
        } else {
            return b[1][b[1].length - 1][1] - a[1][a[1].length - 1][1];
        }
    });

    for (let element of gladiatorsArr) {
        let temp = element[1].pop();
        element[1].sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0].localeCompare(b[0]);
            } else {
                return b[1] - a[1];
            }
        });
        element[1].push(temp);
    }

    for (let element of gladiatorsArr) {
        let name = element.shift();
        let txt = element[0].pop();
        console.log(`${name}: ${txt[1]} skill`);
        element[0].forEach(x => console.log(`- ${x[0]} <!> ${x[1]}`));
    }
}

arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
]);