// Variables can store 1 value, while
// An Array can store set of data or values

// Array Literal >> const customArrayName = [item1.... item2....]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let arrayNum = [4, 8, 12, 16, 20, 40]; // can store numeric values
let arrayString = ['Ryan', 'Kodego', 'Web', 'Array', 'Lesson']; // can also store set of string literals

// console.log(arrayNum); // When accessing elements of an array, we use zero-based index. Zero is the first number.
// console.log(arrayNum[0]); // accessing the first index of array 'arrayNum'
// console.log(arrayNum[5]); // accessing the sixth index of array 'arrayNum'

// console.log(typeof arrayNum); // an Array is type of Object
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////
// let arrayCombi = [40, 'Ryan', true]; // with Array, we can store different type of values 
// console.log(arrayCombi);
// console.log(typeof arrayCombi); // Array with the type of Object
// console.log(typeof arrayCombi[0]); // Array index 0 with the type of Number
// console.log(typeof arrayCombi[1]); // Array index 1 with the type of String Literal
// console.log(typeof arrayCombi[2]); // Array index 2 with the type of Boolean
/////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let arrayD = ['Ryan', 'Edgar', 'Sue', 'Joey'];
// console.log(arrayD[4]); // when accessing an index that is not assign inside an array, we will get a value of 'undefined'
// console.log(arrayD.length); // display the number of values inside of an array, which is actual total of items not by index
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
let arrayE = [10, 20, 30, 40, 55, 70];
arrayE[10] = 100; // add and assign a value to array index 10
arrayE[0] = 1; // change the value inside of an array
// console.log(arrayE); // display array values with 4 empty items
// console.log(arrayE.length); // display total items of 11 values
/////////////////////////////////////////////////////////////////

// const keyword is the common practice in declaring an array
const array = [10, 20, 30, 40, 55, 70];

////////////////////////////////////////////////////////////////////////////////////////
let arrayF = [10, 20, 30, 40, 55, 70];
arrayF.push(55); // pushing or adding a value to the end of index inside an array
// console.log(arrayF);
// console.log(arrayF.length);
// arrayF[10] = 100;
// console.log(arrayF);
// arrayF.pop(); // popping or removing a value from the end of index inside of an array
// console.log(arrayF);

// arrayF.pop();
// console.log(arrayF);

// arrayF.pop();
// console.log(arrayF);

// arrayF.pop();
// console.log(arrayF);

// arrayF.pop();
// console.log(arrayF);

// arrayF.unshift(5); // pushing a value to the start of an index
// console.log(arrayF);
////////////////////////////////////////////////////////////////////////////////////////

// String slice method
let fruits = 'Apple, Banana, Grapes';
let fruitSlices = fruits.slice(7, 13);
console.log(fruitSlices);


// Array Methods

let name = ['Ryan', 'Michael', 'John', 'Mark'];
let others = ['Marie', 'Jenny', 'Shane', 'Joy'];



