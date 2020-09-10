function classStorage() {
    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
            this.addProduct = function (productObj) {
                this.storage.push(productObj);
                this.totalCost += productObj.price * productObj.quantity;
                this.capacity -= productObj.quantity;
            }
            this.getProducts = function () {
                let arr = [];
                this.storage.forEach(i => arr.push(JSON.stringify(i)))
                return (`${arr.join("\n")}`);
            }
        }
    }

    let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
    let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
    let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    storage.getProducts();
    console.log(storage.capacity);
    console.log(storage.totalCost);

}

classStorage()