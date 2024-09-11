// Datatypes

// 1. Primitive Data Types
// 2. Object Data Type

// 1. Primitive Data Types

//===>String
let Name= /Elanchezhiyan/;
console.log(Name); // Output: Elanchezhiyan

//===>Number -Special numeric values(Nan)
let age= 21;// Integer
console.log(age);// Output:21
let percentage= 9.99; //Floating point
console.log(percentage);// Output:9.99
let negative = -15; //Negative Number
console.log(negative);// Output:-15
let bigNumber = 1.23e5; // Scientific notation
console.log(bigNumber);// Output:123000
// Infinity and -Infinity: Represent positive and negative infinity, respectively.
console.log(10 / 0);   // Output: Infinity
console.log(-10 / 0);  // Output: -Infinity
console.log("abc" / 2); // Output: NaN

//===>BigInt
const bigIntNumber = 1234567890123456789012345678901234567890n;
console.log(bigIntNumber); // Output: 1234567890123456789012345678901234567890n

//===>Boolean
const isActive = true;
console.log(isActive) // Output:true
const isComplete = false; 
console.log(isComplete) // Output:False


//===>Undefined
let user;
console.log(user); // Output: undefined
//===>Null
const empty = null;
console.log(empty); // Output: null

//////////////////////////////////////////////
// 2. Object Data Type

//===>Object (An Object is a complex data structure that can contain multiple key-value pairs.)
const person = {
    name: "Alice",
    age: 30,
    isEmployed: true
  };
  console.log(person.name); // Output: "Alice"

//===>Array(An Array is an ordered list of values. Arrays are a special type of object.)
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Output: 1

//===>Function (A Function is a reusable block of code that can be defined once and executed later.)
function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("Bob")); // Output: "Hello, Bob!"

//===>Date(Represents a specific moment in time, including date and time.)
const today = new Date();
console.log(today); // Output: Current date and time

//===>RegExp (Represents regular expressions, used for pattern matching within strings.)
const pattern = /hello/;
console.log(pattern.test("hello world")); // Output: true

//===>Error: Represents runtime errors
let error = new Error("Something went wrong!");
console.log(error);