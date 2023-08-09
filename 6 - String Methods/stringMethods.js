// String slice method
let fruits = 'Apple, Banana, Grapes';
let fruitSlices = fruits.slice(7, 13);
console.log(fruitSlices);

// String replace method
let replaceString = "Example of the Use of Replace Method()";
let newString = replaceString.replace("Example", "Test");
console.log(newString); // with the use of replace method, it will replace the value from param1 with the value from param2

let regExpressionText = "Let's test a regular expression.";
let newRegularExpression = regExpressionText.replace(/test/i, "test2");
console.log(newRegularExpression); // another example of replace method with the use 'i' flag or Insensitive which only targets first match

let globalRegEx = "Peter Piper picked a peck of pickle pepper."
let newGlobalRegEx = globalRegEx.replace(/Piper/g, "Pan");
console.log(newGlobalRegEx); // another example but with the use of 'g' flag or Global which targets all matches
// so for better result in targetting all matches without sensitivity with case, use 'ig' or 'gi' flag

// to Upper Case a string
let capitalizedLetter = "You don't have to be great to start, but you need to start to be great.";
let cL = capitalizedLetter.toUpperCase();
console.log(cL);

// to Lower Case a string
let lowerCase = cL.toLowerCase();
console.log(lowerCase);

// concat string method
let concatText1 = "Conca";
let concatText2 = "tenated";
let concatText = concatText1.concat("", concatText2);
console.log(concatText);
