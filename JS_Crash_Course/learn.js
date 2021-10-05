// Data types in JS are...
// String, Numbers, Boolean, null, undefined

/* String and String Methods */
const name = 'John';
const age = 30;
// Concatenation (uses ' text ')
console.log('My name is ' + name + ' and I am ' + age);
// Template String (uses ` text `)
console.log(`My name is ${name} and I am ${age}`);
// Can also assign to a variable and print to log
const greeting = `My name is ${name} and I am ${age}`;
console.log(greeting);

/* Arrays */
// Using a constructor
const numbers = new Array(1, 2, 3, 4, 5);
// Using an array literal
const fruits = ['apples', 'oranges', 'pears', 10, true];
// Array doesn't require all variables to be the same type
console.log(fruits[1]); // Prints Oranges
// put a value onto the end of the array
fruits.push("grapes");
// remove from the end of an array
fruits.pop("grapes");
// put a value onto the front of the array
fruits.unshift("strawberries");
// look up others to find out more

/* Object Literals */
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
    }
}
// person access everything person.lastName looks at just the last name.
console.log(person, person.lastName);
console.log(person.address.city);
// can pull specific thigns from an object
const { firstName, lastName } = person;
console.log(person)
// can also make a array with all the values
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
]
console.log(todos[2].text);
//This can also be done with JSON and that's whats used when sending data to the server

/* For Loops */
// This is basically the same as Java
for(let i = 0; i < 10; i++){
    console.log(`For Loop Number: ${i}`);
}

/* While Loops */
// Also similar to Java
let i = 0;
while(i < 10){
    console.log(`While Loop Number: ${i}`);
    i++; // need this otherwise it will go forever
}

/* Navigating through an array */
// for loop
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

/* High Order Array Methods */
// forEach
todos.forEach(function(todo){ // takes in a function(variable)
    console.log(todo.text);
})
// for of
for(let todo of todos){
    console.log(todo.text);
}
// for in
for(let i in todos){
    console.log(todos[i].text);
}

/* Conditional Statements */
const x = 10;
if (x == 10){ // == is equal to
    console.log('x is 10');
} else {
    console.log('x is not 10');
}
if (x === 10){ // === is strict equality, checks data types
    console.log('x is 10');
}
// question mark is a ternary operator that returns the first value if true and the second if false
const color = x > 10 ? 'red' : 'blue';

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
}

/* Functionals */
function addNums(num1 = 1, num2 = 1){
    return num1 + num2;
}
console.log(addNums(5, 10)); // if not a number will output NaN (Not a number)

/* Arrow Functions */
const addNums2 = (num1 = 1, num2 = 1) => {
    console.log(num1 + num2);
}
addNums2(5, 10);
/*
If only one parameter and one value, can remove the (), {}, and return
const addNums = num1 => num1 + 1;
console.log(addNums(5));
*/

/* Object Oriented Programming */

// Constructor function
function Person(firstName, lastName, dob){
    // this sets the properties of the object with the values passed in
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
// Prototypes are used to add methods to all objects created from a constructor function
// This is used to add methods to all objects created from a constructor function
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
//Instantiate object
const person1 = new Person('John', 'Doe', 04-30-1980);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

/* ES6 Classes for constructors */
class Person2{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
const person2 = new Person2('John', 'Doe', 04-30-1980);
console.log(person2.getBirthYear());
console.log(person2.getFullName());

/* DOM */
// REFER To Main.js for the DOM Section