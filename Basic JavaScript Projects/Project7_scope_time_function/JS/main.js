var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
//Global Variable//

function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
//Local Variable//

function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();
//X is not defined bug in a console log function//

function get_Date() {
    if (new Date().getHours() < 12) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

if (1 < 2) {
    document.write("The left number is smaller than the number on the right.")
}//if statement//

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 25) {
        Rent = "You are old enough to rent a car!";
    }
    else  {
        Rent = "You are not old enough to rent a car.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Rent;
}//Function that determines age required to rent a car//

function Time_function() {
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
} //Time Function//