export class Vehicle {
    color : string;
    capacity: number;

    constructor(color: string, capacity: number) {
        this.color = color;
        this.capacity = capacity;
    }

    makeSound() {
        console.log("Vehicle sound");
    }
}