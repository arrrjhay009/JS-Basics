// Variable Declaration >> giving an identifier or a name
// Function Declaration >> giving an identifier or a name

// What if we do not need a name?
// We utilize a different approach if we do not give a function an identifier.

// We want to create a function expression.

/*
let a = 10;
let b = 11;
let c = a + 10; variable declaration and initialization
*/

// Function Declaration naming conventions
// Contains letters, digits, underscore, or $ which is just similar to variable declaration naming conventions rules

// Custom Functions


// Built in Fucntions - (methods) - are functions which are part of the language

// Anonymous Function
setTimeout(function () {
    console.log('I waited 2 seconds!');
}, 2000);

setTimeout(function () {
    console.log('I waited 3 seconds!');
}, 3000);

setTimeout(function () {
    console.log('I waited 4 seconds!');
}, 4000);

setTimeout(function () {
    console.log('I waited 5 seconds!');
}, 5000);

/*
function name(param1, param2) {
    // instructions
}

name(argument1, argument2);
*/


// declare a variable "counter"
let counter = 0;

// declare a custom function identifier called "timeOut"
function timeOut() {
    // built in function "setTimeout" and anonymous function "fucntion ()"
    setTimeout(function () {
        console.log('Counter Value: ' + counter++ );
    }, 6000);
}

timeOut(); // function invocation

// IIFE - Immediately Invoked Function Expression
// () we want to invoke the IIFE with the use of the function invocaton operator 
// (function(){}) We can invoke this function anonymous or sometimes self invoked
(function(){
    console.log('This is an example of an IIFE!');

})();



