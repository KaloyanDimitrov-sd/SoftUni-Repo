function foodForPets(inputArray) {
    let allFood = Number(inputArray[1]);
    let cat = 0;
    let dog = 0;
    let count = 0;
    let biscuits;

    for (let i = 2; i < inputArray.length; i++) {
        if (i % 2 === 0) {
            dog += Number(inputArray[i]);
            count++;
        } else {
            cat += Number(inputArray[i]);
        }
        if (count === 3) {
            biscuits = (Number(inputArray[i]) + Number(inputArray[i + 1])) * 0.1;
            count = 0;
        }
    }

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${((dog + cat) / allFood * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(dog / (dog + cat) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(cat / (dog + cat) * 100).toFixed(2)}% eaten from the cat.`);
}

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);