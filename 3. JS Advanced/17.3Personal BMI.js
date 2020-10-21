function personalBMI(name, age, weight, height) {

    let BMI = Number((weight / ((height / 100) ** 2)).toFixed(0));
    let personalInfo = {age, weight, height};
    let status, recommendation;

    if (BMI < 18.5) {
        status = "underweight";
    } else if (BMI < 25) {
        status = "normal";
    } else if (BMI < 30) {
        status = "overweight";
    } else {
        status = "obese";
        recommendation = "admission required";
    }

    let output = {name, personalInfo, BMI, status};

    if (recommendation !== undefined) {
        output["recommendation"] = recommendation;
    }

    return output;

}

personalBMI('Peter', 29, 75, 182);