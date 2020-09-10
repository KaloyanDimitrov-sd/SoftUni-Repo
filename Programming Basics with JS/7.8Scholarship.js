function scholarship(income, average, minSalary) {
    income = Number(income);
    average = Number(average);
    minSalary = Number(minSalary);
    let social = Math.floor(0.35 * minSalary);
    let success = Math.floor(average * 25);

    if (average < 5.5) {
        success = 0;
    }

    if (income >= minSalary) {
        social = 0
    }

    if (average <= 4.5) {
        console.log("You cannot get a scholarship!");
    } else if (social > success) {
        console.log(`You get a Social scholarship ${social} BGN`);
    } else if (success > social) {
        console.log(`You get a scholarship for excellent results ${success} BGN`);
    } else if (success !== 0) {
        console.log(`You get a scholarship for excellent results ${success} BGN`);
    } else {
        console.log("You cannot get a scholarship!")
    }


}

scholarship("480.00", "4.60", "450.00")