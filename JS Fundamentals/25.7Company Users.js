function companyUsers(inputArray) {

    let companiesData = {};

    for (let element of inputArray) {
        let [company, id] = element.split(" -> ");
        if (companiesData[company]) {
            companiesData[company].add(id);
        } else {
            companiesData[company] = new Set;
            companiesData[company].add(id);
        }
    }

    let companiesDataArr = Object.entries(companiesData);
    companiesDataArr.sort((a, b) => a[0].localeCompare(b[0]));

    for (let element of companiesDataArr) {
        console.log(element[0]);
        element[1] = Array.from(element[1]);
        console.log(`-- ${element[1].join("\n-- ")}`);
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);