var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);


function compute()
{
    p = document.getElementById("principal").value;
    
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

document.getElementById("result").innerHTML="If you deposit " + <mark>principal</mark>  + "," <br> +
"At an interest rate of " + <mark>rate</mark> + "%" + "." <br> +
"You will receive an amount of " + <mark>interest</mark> + "," <br> +
"In the year " + <mark>year</mark> + <br/>

function validation() {
    var inputPrincipal = document.getElementById("principal").value;
    if (inputPrincipal == 0){
        alert("Enter a postive number");
        inputPrincipal.focus();
        return false;

    }
    if (inputPrincipal == -1 ){
        alert("Enter a postive number");
        inputPrincipal.focus();
        return false;
    }
}