// Arrow function
var myArrowFunc = () => {
    console.log("Our first arrow function");
}

var add = function (a, b) {
    return a + b;
}

var addArrowfunc = (a, b) =>  a + b; 

myArrowFunc();
console.log(addArrowfunc(2,4));

name = "Mohaib Ali";
weight = 60;

// const person = {
//     name: "Laiba Saeed",
//     age: 21,    
//     intro: function () {
//         console.log("Hey my name is " + this.name);
//     }
// }

const person = {
    name: "Laiba",
    intro: () => {
        console.log("Hey my name is " + this.name);
    },
    show: {
        weight: 45,
        walk:  () => {
            console.log(this.weight);
        }
    }
}

person.intro();
person.show.walk();

// JavaScript Classes
class Car {
    constructor(name, engine) {
        this.name = name,
        this.engine = engine
    }

    start() {
        console.log("The Engine of ", this.name);
    }
}
var car = new Car("BMW I8", "W8084");
car.start();

var car1 = new Car("Honda", "5r6546")
car1.start();

// Prototype
var parent = {
    money: 70000
}

var child = Object.create(parent);
child.age = 24;
console.log(child);