function systemsRegister(inputArray) {

    let systemObj = {};
    let subcomponentArr = [];
    let newSystemObj = {};

    for (let element of inputArray) {
        subcomponentArr = [];
        let arr = element.split(" | ");
        let [system, component, subcomponent] = [arr[0], arr[1], arr[2]];
        if (systemObj[system]) {
            if (systemObj[system][component]) {
                subcomponentArr = systemObj[system][component];
                subcomponentArr.push(subcomponent);
            } else {
                subcomponentArr.push(subcomponent);
                systemObj[system][component] = subcomponentArr;
            }
        } else {
            subcomponentArr.push(subcomponent);
            systemObj[system] = { [component]: subcomponentArr };
        }
    }

    let systemArr = Object.entries(systemObj);

    for (let element of systemArr) {
        let array = Object.entries(element[1]);
        array.sort((a, b) => b[1].length - a[1].length);
        element[1] = array;
    }

    systemArr.sort((a, b) => {
        if (a[1].length === b[1].length) {
            return a[0].localeCompare(b[0]);
        }
        return b[1].length - a[1].length;
    });

    for (let el1 of systemArr) {
        for (let el2 of el1[1]) {
            let [comp, subcomp] = [el2[0], el2[1]];
            if (newSystemObj[el1[0]]) {
                newSystemObj[el1[0]][comp] = subcomp;
            } else {
                newSystemObj[el1[0]] = {}
                newSystemObj[el1[0]][comp] = subcomp;
            }

        }
    }

    for (let systemKey in newSystemObj) {
        console.log(systemKey);
        for (let componentKey in newSystemObj[systemKey]) {
            console.log(`|||${componentKey}`);
            console.log(`||||||${newSystemObj[systemKey][componentKey].join("\n||||||")}`)
        }
    }
}






systemsRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);
