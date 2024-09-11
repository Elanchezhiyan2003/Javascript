// Map()- return element to new Array

var data=[10,20,30,40,50];

data.map((item) => {
    console.log(item)
});
// output:
// 10
// 20
// 30
// 40
// 50

//Filter-return true to keep the element, false otherwise

// const numbers = [1, 2, 3, 4, 5 ,6 ,7, 8,];
// const doubled = numbers.filter(n => n % 2 == 0); // [2, 4, 6]

// console.log(doubled);

//reduse
const number = [1, 2, 3, 4, 5];
const sum = number.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(sum); // Output: 15

//some
// const numbers = [1, 2, 3, 4];
// const hasEven = numbers.some(n => n % 2 === 0); 
// console.log(hasEven);// true


//every()
// const numbers = [2, 4, 6, 9];
// const allEven = numbers.every(n => n % 2 === 0); 
// console.log(allEven);// true

//find()
// const numbers = [1, 2, 3, 4];
// const firstEven = numbers.find(n => n % 2 === 0); 
// console.log(firstEven);// 2


//findIndex
const numbers = [1,  3, 4];
const firstEvenIndex = numbers.findIndex(n => n % 2 === 0); 
console.log(firstEvenIndex);// 2

//bind
function greet() {
    console.log(`Hello, ${this.name}`);
}
const person = { name: 'Alice' };
const boundGreet = greet.bind(person);
boundGreet(); // "Hello, Alice"

// setTimeout(() => console.log('Hello after 1 second'), 1000);
// setInterval(() => console.log('Hello every 2 seconds'), 2);


//call
function greet(age) {
    console.log(`Hello, my name is ${this.name} and I am ${age} years old`);
}
const persons = { name: 'Bob' };
greet.call(persons, 30); // "Hello, my name is Bob and I am 30 years old"

// apply
function greet(age, city) {
    console.log(`Hello, my name is ${this.name}, I'm ${age} years old and I live in ${city}`);
}
const personss = { name: 'Charlie' };
greet.apply(personss, [25, 'New York']); // "Hello, my name is Charlie, I'm 25 years old and I live in New York"
