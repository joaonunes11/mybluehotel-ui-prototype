var c = 0;
var i = 0;
var l = 0;

function pop() {
    var a = document.getElementById("number").value;    
    if(a>0){
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



function limpar(){
    document.getElementById("number").value = "";  
}


function licitar(){
    var valor = document.getElementById("number").value; 
    localStorage.setItem("licitacao", valor );
}
   

function sucedida(){

if(l == 0){
        document.getElementById("sucedida").style.display = "block";
        l = 1;
    }else {document.getElementById("sucedida").style.display = "none";
        l = 0;}


}






