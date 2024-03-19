let person1={
    name:'Sponge Bob',
    sayHello:function(){
        console.log('Hello, my name is ${this.name}!');
    }
};

let person2={
    name:'Patrick Star',
    sayHello:function(){
        console.log('Hello, my name is ${this.name}!');
    }
};

let person3={
    name:'Mr. Krabs',
    sayHello:function(){
        console.log('Hello, my name is ${this.name}!');
    }
};

let person4={
    name:'Squidward Tentacles',
    sayHello:function(){
        console.log('Hello, my name is ${this.name}!');
    }
};

let person5={
    name:'Sandy Cheeks',
    sayHello:function(){
        console.log('Hello, my name is ${this.name}!');
    }
};
 person1.sayHello();
 person2.sayHello();
 person3.sayHello();
 person4.sayHello();
 person5.sayHello();
 // function Person(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
// 

// Person.prototype.sayHello = function() {
//     console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old, and I live in ${this.city}.`);
// }

// let person1 = new Person('Josh', 33, 'Birmingham');
// let person2 = new Person('Ana', 41, 'Birmingham');
// let person3 = new Person('Henry', 18, 'Birmingham');
// let person4 = new Person('Emmie', 12, 'Fort Myers');
// let person5 = new Person('Bob', 100, 'New York');

// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

// ES6 syntax

// class Person {
//     constructor(name, age, city) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }

//     sayHello() {
//         console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old, and I live in ${this.city}.`);
//     }

// }


// let person1 = new Person('Josh', 33, 'Birmingham');
// let person2 = new Person('Ana', 41, 'Birmingham');
// let person3 = new Person('Henry', 18, 'Birmingham');
// let person4 = new Person('Emmie', 12, 'Fort Myers');
// let person5 = new Person('Bob', 100, 'New York');

// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

class Vehicle {
    constructor(manufacturer, numWheels) {
        this.manufacturer = manufacturer;
        this.numWheels = numWheels;
        this.type = 'vehicle';
    }

    aboutVehicle() {
        console.log(`This ${this.type} was made by ${this.manufacturer} and has ${this.numWheels} wheels.`);
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, numWheels, numDoors) {
        super(manufacturer, numWheels);
        this.numDoors = numDoors;
        this.hasBed = true;
        this.type = 'truck';
    }

    aboutVehicle() {
        console.log(`This ${this.type} was made by ${this.manufacturer}. It has ${this.numDoors} doors, ${this.numWheels} wheels, and has a bed.`);
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, numWheels, numDoors, size, mpg) {
        super(manufacturer, numWheels);
        this.numDoors = numDoors;
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle() {
        console.log(`This ${this.size} ${this.type} was made by ${this.manufacturer}. It has ${this.numDoors} doors, ${this.numWheels} wheels, and gets ${this.mpg} mpg.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer, numWheels, numDoors) {
        super(manufacturer, numWheels);
        this.numDoors = numDoors;
        this.type = 'motorcycle';
        this.hasHandleBars = true;
    }

    aboutVehicle() {
        console.log(`This ${this.type} was made by ${this.manufacturer}. It has ${this.numDoors} doors, ${this.numWheels} wheels, and has handlebars instead of a steering wheel.`);
    }
}



let v1 = new Vehicle('Toyota', 4);
v1.aboutVehicle();

let t1 = new Truck('Ford', 4, 2);
t1.aboutVehicle();

let s1 = new Sedan('Honda', 4, 4, 'medium', 34);
s1.aboutVehicle();

let m1 = new Motorcycle('BMW', 2, 0);
m1.aboutVehicle();