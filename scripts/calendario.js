"use strict";
function LoadPage() {

    var listaCadeiras = document.getElementById("listaReservasCadeiras");

    var reservaCadeiras = JSON.parse(localStorage.getItem("reservasCadeiras"));

    var node = document.createElement("li");
    var textnode = document.createTextNode("Cadeiras:");
    node.style.fontSize = "50px";
    node.appendChild(textnode);
    listaCadeiras.appendChild(node);

    for (var reserva in reservaCadeiras) {

        var node = document.createElement("li");
        node.style.fontSize = "13px";
        var textnode = document.createTextNode("Secção:" + reservaCadeiras[reserva][0].split("id_")[0] + " | " + "Lugar:" + 
        reservaCadeiras[reserva][0].split("id_")[1] + " | " + "Data:" + reservaCadeiras[reserva][3] + " | " + "Hora Inicio:" + reservaCadeiras[reserva][1] +
        " | " + "Hora Fim:" + reservaCadeiras[reserva][2]);
        node.appendChild(textnode);
        listaCadeiras.appendChild(node);
    }

    var node = document.createElement("li");
    var textnode = document.createTextNode("Guarda-Sóis:");
    node.style.fontSize = "50px";
    node.appendChild(textnode);
    listaCadeiras.appendChild(node);
    
    var node = document.createElement("li");
    var textnode = document.createTextNode("Toalhas:");
    node.style.fontSize = "50px";
    node.appendChild(textnode);
    listaCadeiras.appendChild(node);

    var node = document.createElement("li");
    var textnode = document.createTextNode("Bilhetes Espetáculos:");
    node.style.fontSize = "50px";
    node.appendChild(textnode);
    listaCadeiras.appendChild(node);

}


document.addEventListener("DOMContentLoaded", function (event) { LoadPage() });


