function cats(inputArray) {
    class Cat {
        
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => {console.log(`${name}, age ${age} says Meow`);}
        }
    }

    let cats = [];

    for (let element of inputArray) {
        let name, age;
        let catData = element.split(" ");
        [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name, age));
    }

    for (let element of cats) {
        element.meow()
    }

}

cats(['Mellow 2', 'Tom 5']);