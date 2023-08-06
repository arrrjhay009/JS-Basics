// var a;
// let b;
// const PLAYER = 'Player1';

var a = 'Ryan'; // data type of string
var b = 40; // data type of number
var c = a + b; // data type of string that is concatenated thru coercion

const pi = 3.14; // constant value and cannot be re-initialize with a new value
let x = 10;
x = 20;

let d = c + ' ' + (x + b);

console.log(pi);
console.log(x);
console.log(a);
console.log(b);
console.log(c);
console.log(d);



// RULE FOR NAMING CONVENTIONS
// 1. Can use letter, dollar sign or underscore
// 2. Cannot contain special characters, numbers and do not use space
// 3. Cannot use a reserved keyword like var
// 4. Naming is case-sensitive
// 5. Must be descriptive and specific
// 6. camelCase, snake_case, PascalCase


// We can declare multiple variable in one line but initialize it in separate line
let test1, test2; 
test1 = 1;
test2 = 2;
console.log(test1 + test2);

