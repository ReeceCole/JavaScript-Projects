document.write(typeof "Number");
document.write("10" + 5);

document.write(3E310);
document.write(-3E310);

document.write(10 > 2);
document.write(10 == 10);
document.write(10 == 3);

document.write(5 > 2 && 10 > 4);
document.write(5 > 10 && 10 > 4);
document.write(5 > 10 || 10 > 4);
document.write(5 > 10 || 10 > 20);


function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
    document.getElementById("Test").innerHTML = isNaN('Not a number');
    document.getElementById("Test").innerHTML = isNaN('1');
}//This function display either a true or false based upon if the valuses are the same data type.//

console.log(2 + 2);
console.log(10 < 2); //To access console press f12 these 2 commands display 4 and false in console.//

A = "Animal";
B = "Animal";
document.write(A === B);

A = "Animal";
B = "10";
document.write(A === B);

function Not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}

function True_Function() {
    document.getElementById("True").innerHTML = !(20 > 10);
}





