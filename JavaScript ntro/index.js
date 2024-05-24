//first javascript code
let first = 'Anthony'; 
console.log(first);

let name = 'Anthony'; 

const interestRate = .3;
console.log(interestRate);

let age = 30;
let isApprovved = false;
let firstName = undefined;
let selectedColor = null;


let person = {
    name: "Anthony",
    age: 20
}
person.name = "John"

let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);



let selectedColors = ['red','blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

function greet (name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

greet("john", 'smith');
greet('Mary', 'smith');


function sqaure(number){
    return number*number
}
let number = sqaure(2);
console.log(number);