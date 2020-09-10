function areaOfFigures(form, input1, input2) {
    let area;
    if (form === "square") {
        let a = Number(input1);
        area = a * a;
    } else if (form === "rectangle") {
        let a = Number(input1);
        let b = Number(input2);
        area = a * b;
    } else if (form === "circle") {
        let r = Number(input1);
        area = r * r * Math.PI;
    } else {
        let a = Number(input1);
        let ha = Number(input2);
        area = a * ha /2;
    }
        console.log(area.toFixed(3));
}

areaOfFigures("square", "5")