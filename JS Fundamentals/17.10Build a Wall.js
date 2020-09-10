function buildAWall(inputArray) {
    let concretePerDay = 0;
    let finalConcrete = 0;
    let array = [];
    let cost = 0;
    let isReady = false;

    while (!isReady) {

        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] < 30) {
                inputArray[i]++;
                concretePerDay += 195;
            }
        }

        finalConcrete += concretePerDay;
        array.push(concretePerDay);
        concretePerDay = 0;

        for (let i = 0; i < inputArray.length; i++) {  
            if (inputArray[i] !== 30) {
                break;
            }

            if (i === inputArray.length - 1) {
                isReady = true;
            }
        }
    }

    cost = finalConcrete * 1900;
    console.log(array.join(", "))
    console.log(`${cost} pesos`);

}

buildAWall([21, 25, 28]);