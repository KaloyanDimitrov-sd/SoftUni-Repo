function rotateArrayIndex(input) {
    let array = [...input[0]];
    let newArray = [];
    let output = [];
    let num;

    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < input.length; j++) {
            array = input[j];
            num = array[i];
            newArray.push(num);
        }
        output.push(newArray);
        newArray = [];
    }
    // console.log(output[0]);
    // console.log(output[1]);
    // console.log(output[2]);
    // console.log(output[3]);

    // const person = {name:'aleks' , age:33, city:'Varna' , getMyName: function () {return('My name is ' + this.name + ' and I am ' + this.age + ' years old');} }
    // console.log(person.getMyName())
    console.log(JSON.stringify(output));
}

rotateArrayIndex([[1, 2, 3, 4], [5, 6, 7, 8], [1, 2, 3, 4], [10, 11, 12, 13]]);