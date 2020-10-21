function cutAndReverse(input) {

    let num = input.length / 2;
    let firstHalf = input.substring(0, num).split("").reverse();
    let secondHalf = input.substring(num).split("").reverse();
    console.log(firstHalf.join(""));
    console.log(secondHalf.join(""));

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');