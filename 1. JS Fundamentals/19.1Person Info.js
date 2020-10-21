function personInfo(fName, sName, age) {
    let person = {
        firstName: fName,
        lastName: sName,
        age: age
    }

    for (let key in person) {
        console.log(`${key}: ${person[key]}`)
    }
}

personInfo("Peter",
    "Pan",
    "20");