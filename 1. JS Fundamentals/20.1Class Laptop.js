function classLaptop() {

    class Laptop {
        constructor(info, quality,) {
            this.info = info;
            this.quality = quality;
            this.isOn = false;
            this.turnOn = () => {
                this.quality--;
                this.isOn = true;
            }
            this.turnOff = () => {
                this.quality--;
                this.isOn = false;
            }
            this.showInfo = () => JSON.stringify(this.info);
        }
        get price() {
            return 800 - (this.info.age * 2) + (this.quality * 0.5);
        }
    }

    // let info = { producer: "Dell", age: 2, brand: "XPS" }
    let laptop = new Laptop({ producer: "Dell", age: 2, brand: "XPS" }, 10)
    laptop.turnOn()
    console.log(laptop.showInfo())
    laptop.turnOff()
    console.log(laptop.quality)
    laptop.turnOn()
    console.log(laptop.isOn)
    console.log(laptop.price)
}

classLaptop();