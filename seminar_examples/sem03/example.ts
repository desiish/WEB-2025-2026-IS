class Point {
    x: number = 0;
    y: number = 0;

    constructor() {
        console.log("Point constructor");
    }

    print() {
        console.log(this);
    }

    test() {
        this.print();
        const arr = [1, 2];
        arr.forEach(this.exampleArrow);
    }

    exampleArrow = () => {
        console.log(this);
    }
}

const p = new Point();
//console.log(typeof Point);
//p.print();
//const printOfP = p.print;
//printOfP();

// function Point() {
//    this.x = 0;
//    this.y = 0;
//   this.exampleArrow = () => {
//       console.log(this);
//    }

//    console.log("Point constructor");
// }

// Point.prototype.print = function() {
//    console.log(`Point(${this.x}, ${this.y})`);
// }

// __proto__
//p.print();

//const PrintOfP2 = Point.prototype.print.bind(p);
//PrintOfP2();

//Point.prototype.print.call(p);

p.test();

class Point3D extends Point {
     z: number = 0;

    constructor() {
        super();
        console.log("Point3D constructor");
    }

     print() {
        console.log(`Point3D(${this.x}, ${this.y}, ${this.z})`);
    }
}

const p2 = new Point3D();

// function Point3D() {
//     Point.call(this);
//     this.z = 0;
//     console.log("Point3D constructor");
// }

// Point3D.prototype = Object.create(Point.prototype);

// Point3D.prototype.print = funtion() {
//     console.log(`Point3D(${this.x}, ${this.y}, ${this.z})`);
// }
