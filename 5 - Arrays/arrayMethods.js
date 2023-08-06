// Array Methods

// concat method
let names = ['Ryan', 'Michael', 'John', 'Mark'];
let others = ['Marie', 'Jenny', 'Shane', 'Joy'];
let lost = [4, 8, 12, 16, 20];
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 23, 34, 55];

var combine = lost.concat(fibonacci);
// console.log(combine);

// join method
// console.log(fibonacci);
// console.log(typeof fibonacci);
// let a = fibonacci.join('~');
// console.log(a);
// console.log(a.length);
// console.log(typeof a); //  when using join method, it will become string typeof

// console.log(fibonacci.join('~'));
// console.log(typeof fibonacci);
// console.log(fibonacci.length);

//////////////////////////////////////////////////////////////////////
// shift method
console.log(lost.shift()); // shifting the first index of the array
console.log(lost);
//////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// unshift method 
console.log(lost.unshift(1, 2, 3, 4));
console.log(lost);
///////////////////////////////////////

//////////////////////////////
// reverse method
console.log(names.reverse());
//////////////////////////////

//////////////////////////////
// sort method
console.log(names.sort());
//////////////////////////////

///////////////////////////////////////
// indexOf method
console.log(others.indexOf('Jenny'));
///////////////////////////////////////

////////////////////////////////////////
// lastIndexOf method
console.log(combine);
console.log(combine.lastIndexOf(55));
////////////////////////////////////////


////////////////////////////////////////////
// filter method
var filteredVal = combine.filter((x) => {
    if (x <= 15)
    return x;
});

console.log(filteredVal);
////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// forEach method with template literal
names.forEach((name) => console.log(`Rey ${name}`)); // with the use of template literals or backticks (`) and also '$' sign
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

names.forEach((name) => {
    console.log(`Rey ${name}`)
});