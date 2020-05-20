class Counter {
    constructor (input) {
        this.input = 0;
    }
    increase() {
        // this.input ++;
        return ++ this.input

    } 
    decrease() {
        // this.input --
        return -- this.input
    }
}



const counter1 = new Counter();
console.log(counter1.increase()); // 1
console.log(counter1.increase()); // 2
console.log(counter1.decrease()); // 1
console.log(counter1.decrease()); // 0
console.log(counter1.decrease()); // -1