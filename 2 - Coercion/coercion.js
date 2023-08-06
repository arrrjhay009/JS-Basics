// DATA TYPES:

////////////////////////////////////////////////////
// Number
// let a;
// a = 10;
// a = 12;
// console.log(a);
// console.log(typeof a);

// // String Literal
// let b;
// b = 'Text of a string literal.';
// console.log(b);
// console.log(typeof b);

// // Boolean
// let c;
// c = false;
// console.log(c);
// console.log(typeof c);

// // Undefined
// let d;
// console.log(d);
// console.log(typeof d);

///////////////////////////////////////////////////

// What happens if we need to use them together?
// let e = 8;
// let f = '6'; // at this point, variable f is still in data type of string
// console.log(f);
// console.log(typeof f);
// let g = e + f;
// console.log('Answer is ' + g + ' and is an example of coercion.');
// console.log(g);
// console.log(typeof g);
// // parseInt
// f = parseInt(f,10) // thru parsing or parseInt, it will become in data type of number
// console.log(f);
// console.log(typeof f);
// let g = e + f;
// console.log('Answer is ' + g + ' and is an example of coercion.');
// console.log(g);
// console.log(typeof g);

// Type of Coercion
// Convert a string to a number
// Convert a number to a string
// Convert an object to a boolean

// let a = 10;
// console.log(a);
// console.log(typeof a);

// // from a string to a number
// let b = '7';
// console.log(b);
// console.log(typeof b);
// b = Number(b);
// console.log(b);
// console.log(typeof b);


// Coercion is an Implicit Conversion

// Type of Conversion: Explicit and Implicit

// Explicit Conversion - parseFloat(), parseInt()

    // creating a function
    function explicit() {
        let d = 5;
        let e = '6';
        e = parseInt(e, 10);
        let f = d + e;
        console.log("Explicit Answer: " + f);
        console.log(typeof f);
    }

    // function implicit() {
    //     // an if statement/condition
    //     if(1 == "1"){
    //         let a = 1;
    //         let b = '1';
    //         let c = a + b;
    //         console.log("Implicit Answer: " + c);
    //         console.log(typeof c);
    //     }
        
    //     // an else statement/condition
    //     else {
    //         document.getElementById('false').innerHTML = 'This function did not execute due to strict equality operator.';
    //         console.log('This function did not execute due to strict equality operator.');
    //     }
    // }

    function implicit() {
        // an if statement/condition
        if(1 == "1"){
            let a = 1;
            let b = '1';
            let c = a + b;
            document.getElementById('true').innerHTML = "Implicit Answer: " + c;
            console.log("Implicit Answer: " + c);
            console.log(typeof c);
        }
        
        // an else statement/condition
        else {
            document.getElementById('false').innerHTML = 'This function did not execute due to strict equality operator.';
            console.log('This function did not execute due to strict equality operator.');
        }
    }

    // explicit(); // a function calling
    // implicit();

    











