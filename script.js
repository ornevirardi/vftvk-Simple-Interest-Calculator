//validation

function validateAmount() {
    var principal = document.getElementById("principal").value;
    var moreThenZero = parseInt(principal) > 0;
    if (!moreThenZero) {
        alert("Enter a positive Number");
        document.getElementById("principal").focus();
    }
}

//function to change the slider

function updateRate (){
var rateval = document.getElementById("rate").value;
document.getElementById("rate_val").innerText=rateval + "%";

}
//compute
function compute(){
//variables

var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var yearInTheFuture = new Date().getFullYear()+parseInt(years);

// results
document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>" +
    "at an interest rate of <mark>" + rate + "%"+"</mark>,<br/>" +
    "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
    "in the year <mark>" + yearInTheFuture + "</mark>";

}
