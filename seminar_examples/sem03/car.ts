import {Vehicle} from './vehicle'
class Car extends Vehicle {
    plateNumber: string;

    constructor(color: string, capacity: number, plateNumber: string) {
        super(color, capacity);
        this.plateNumber = plateNumber;
    }

    makeSound() {
        console.log("Beep");
    }

    async drive() {
        console.log('Driving the car')
        return 'Done';
    }
}

const c = new Car('red', 5, 'ABC-123');
c.makeSound();
c.drive();

async function foo(x: number) {
    const res = await c.drive();
    return x;
}

async function test() {
    const arr = [1, 2, 3];
    arr.forEach(async (num) => {
        const res = await foo(num);
        console.log(res);
    })
}

 test();