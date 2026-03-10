import { Animal } from "./animal";

class Dog extends Animal {
    constructor() {
        super();
        this.name = "Dog";
    }

    makeSound() {
        console.log("Dog sound");
    }
}

const d = new Dog();
d.makeSound();

// function Dog() {
//     Animal.call(this);
//     this.name = "Dog";
// }
// 
// Dog.prototype = Object.create(Animal.prototype);
// 
// Dog.prototype.makeSound = function() {
//     console.log("Dog sound");
// }