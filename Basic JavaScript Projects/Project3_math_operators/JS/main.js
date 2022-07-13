function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}//Addition//

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
}//Subtraction//

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
}//Multiplication//

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}//Multiple Operations//

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}//Remainders//

function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}//Negatives//

function Increment_Operator() {
    var X = 5;
    X++;
    document.write(X);
}
//Increment//
function Decrement_Operator() {
    var X = 5.25;
    X--;
    document.write(X);
}//Decrement//

window.alert(Math.random() * 100);
 //Window alert that picks a number betweem 1-100//
