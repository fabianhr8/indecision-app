class Person {
    // The constructor function is called when creating a new instance of the class
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        // Get values from Person's constructor
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        // Flip it two times to get either true or false
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.major) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Traveler('Fabian', 29,  'Juarez');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());