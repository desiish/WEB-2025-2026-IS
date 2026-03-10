export class Animal {
    name = "Animal";
    age = 2;

    constructor() {
        console.log("Animal constructor");
    }

    makeSound() {
        console.log("Animal sound");
    }
}

const a = new Animal();

// function Animal() {
//     this.name = "Animal";
//     this.age = 2;
// 
//     console.log("Animal constructor");
// }
// 
// Animal.prototype.makeSound = function() {
//     console.log("Animal sound");
// }

