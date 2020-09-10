function adAstra(input) {

    let pattern = /([#|])(?<name>[a-zA-Z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

    let foodArr = input[0].matchAll(pattern);
    let total = 0;
    let result = [];

    for (let element of foodArr) {
        total += Number(element.groups.calories);
        result.push({name: element.groups.name, date: element.groups.date, calories: element.groups.calories})
    }

    let days = Math.floor(total / 2000);
        console.log(`You have food to last you for: ${days} days!`);
        result.forEach(x => console.log(`Item: ${x.name}, Best before: ${x.date}, Nutrition: ${x.calories}`));

}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
  ]);