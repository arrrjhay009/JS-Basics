

// let x = 1;
// while (x < 10) {
//     console.log(x++);
//     if (x == 7) break;
// }

// Variable Scope:
// lifespan and citizenship

// Test a variable scope
// let a = 'First';
// function scopeTest() {
//     console.log(a);
//     let b = 'Second';
// }
// scopeTest();

// let a = 'First'; // GLobal Declaration
// function scopeTest() { // Function Scope
//     console.log(a);
//     if (a != '') { // Code Block Scope
//         console.log(a);
//         let c = 'Third';
//     }
//     console.log(c); // outside block console, so this is an error
// }
// scopeTest();

let a = 'First'; // Declaration and initialization outside of function
function scopeTest() {
    console.log(a);
    a = 'Second'; // Reassignment inside of a function
    if (a != '') {
        console.log(a);
        let c = 'Third';
        console.log(c);
    }
}
scopeTest();
console.log(a);


