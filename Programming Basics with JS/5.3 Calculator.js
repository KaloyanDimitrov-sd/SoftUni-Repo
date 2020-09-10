function calcDeposit(input1, input2, input3) {
    let deposit = Number(input1);
    let months = Number(input2);
    let interest = Number(input3);
    let total = deposit + months * deposit * interest / 100 / 12;

    console.log(total);
}

calcDeposit("2350", "6", "7")