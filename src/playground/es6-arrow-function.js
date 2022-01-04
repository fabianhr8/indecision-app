// Normal function
const square = function (x) {
    return x*x;
};

// Arrow function
const squareArrow = x => x*x;
console.log(square(5));
console.log(squareArrow(5));

//// Challenge
const getFirstName = fullName => fullName.split(' ')[0];
console.log(getFirstName('Fabian Hernandez'));

// With arrow function the argument object is no logner bound
// const add = (a, b) => {
//     console.log(arguments);
//     return a+b;
// }
// console.log(add(5, 4));

// With arrow function the 'this' keyword is no logner bound
const user = {
    name: 'Susy',
    cities: ['El Paso', 'New York', 'Los Angeles'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city); 
    }
};
console.log(user.printPlacesLived());

//// Challenge
const multiplier = {
    numbers: [3, 7, 8],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());