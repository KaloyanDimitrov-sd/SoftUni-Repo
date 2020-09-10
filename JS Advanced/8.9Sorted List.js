class List {
    constructor() {
        this.array = [];
        this.size = this.array.length;
    }

    get(index) {
        if (this.array[index] !== undefined) {
            return this.array[index];
        }

    }
    remove(index) {
        if (this.array[index] !== undefined) {
            this.size--
            this.array.splice(index, 1);
        }
    }
    add(num) {
        this.size++
        if (this.array.length === 0) {
            this.array.push(num);
        } else {
            let isBiggest = true;
            for (let i = 0; i < this.array.length; i++) {

                if (num < this.array[i]) {
                    this.array.splice(i, 0, num);
                    isBiggest = false;
                    break;
                }
            }
            if (isBiggest) {
                this.array.push(num);
            }
        }

    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
