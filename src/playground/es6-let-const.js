var nameVar = 'Fabian';
console.log('nameVar', nameVar);

let nameLet = 'Vale';
nameLet = 'Jen';
console.log('nameLet', nameLet);

const nameConst = 'Juan';
console.log('nameConst', nameConst);

// Block scoping
const fullName = 'Fabian Hernandez';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);