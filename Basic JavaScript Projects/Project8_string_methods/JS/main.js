function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//Search Method//
const str = "My blue sweater itches. I'll wear a red t-shirt and blue jeans today"

//string that will be converted into RegExp internally//
let blue = "blue";
console.log(str.search(blue));

//RegExp without case sensitivity//
let RegExpIns = /blue/i;
console.log(str.search(RegExpIns));

//explicitly RegExp//
let regExp = /blue/;
console.log(str.search(regExp));

const cities = "new york, paris, milan, tokyo, ...";

//use the method with variable containing string value//
console.log(cities.toUpperCase());

console.log("- - -");

//use it directly with a string value//
console.log("alphabet".toUpperCase())

console.log("- - -");

//no lowercase - orginal value equals to converted value//
let orginalString = "HELLO THERE!";
let convertedString = orginalString.toUpperCase();

function string_Method() {
    var X=182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}