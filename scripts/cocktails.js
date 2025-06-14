var c = 0;
var i = 0;
var l = 0;

var count = 0;
var price = 6;
var reservations = [];

var total = 0;

function scroll() {
    console.log("test");
    document.getElementById("caixaCocktails").scroll(500,0); //dar a entender ao user que é scrollable
}

window.onload = function() {
    scroll();
  };
function CountPlus(id) {
    ele = document.getElementById(id);
    val = ele.innerHTML;
    ele.innerHTML = parseInt(val) + 1;
    total += 3;
    document.getElementById("preco").value = total + "€";
    if (total>0) {
        document.getElementById("cadeira_button").disabled = false;
    }
    else {
        document.getElementById("cadeira_button").disabled = true;
    }
    
}
function CountMinus(id) {
    ele = document.getElementById(id);
    val = ele.innerHTML;
    if (val > 0) {
        ele.innerHTML = parseInt(val) - 1;
        total -= 3;
        document.getElementById("preco").value = total + "€";
    }
    if (total>0) {
        document.getElementById("cadeira_button").disabled = false;
    }
    else {
        document.getElementById("cadeira_button").disabled = true;
    }
    
}

function reset() {
    window.location.reload();
/**
    count = 0;
    document.getElementById("result").innerHTML = count + " Cocktails";
**/ 
    amount(price); 
} 
function amount(price){
    var total = count * price;
    document.getElementById("price").innerHTML = "Preço: " + total + " €"
}
function pop() {   
    if(total>0){
    if(c == 0){
        document.getElementById("teste").style.display = "block";
        c = 1;
    }else {document.getElementById("teste").style.display = "none";
        c = 0;}
    }
    else{
    if(i == 0){
        document.getElementById("testeNegativo").style.display = "block";
        i = 1;
    }else {document.getElementById("testeNegativo").style.display = "none";
        i = 0;}
        
    }
}

function sucedida(){

if(l == 0){
        document.getElementById("sucedida").style.display = "block";
        l = 1;
    }else {document.getElementById("sucedida").style.display = "none";
        l = 0;}


}
