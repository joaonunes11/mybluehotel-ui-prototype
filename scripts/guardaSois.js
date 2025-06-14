"use strict";
function LoadPage() {

    var numGuardaSois = document.getElementById("numGuardaSois");
    var dataInicio = document.getElementById("dataInicio");
    var horaInicio = document.getElementById("horaInicio");
    var horaFim = document.getElementById("horaFim");

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var todayFormated = dd + '-' + mm + '-' + yyyy;
    var nowHour = today.toString().split(" ")[4];
    var dataEscolhida;
    var dataEscolhidaFormated;

    var dateError = document.getElementById("dateError");
    var hourError = document.getElementById("hourError");
    var nrCadeirasError = document.getElementById("nrCadeirasError");
    var afirmDateError = document.getElementById("afirmativoDateError");
    var afirmHourError = document.getElementById("afirmativoHourError");
    var afirmNrCadeirasError = document.getElementById("afirmativoNrCadeirasError");
    var reservarButton = document.getElementById("cadeira_button");

    var precoTotal = document.getElementById("precoTotal");

    var confirmacao = document.getElementById("teste");
    var afirmativo = document.getElementById("afirmativo");
    var negativo = document.getElementById("negativo");

    var sucecida = document.getElementById("sucedida");


    var numOk = false;
    numGuardaSois.oninput = function() {
        if (numGuardaSois.value > 0) {
            numOk = true;
            dataInicio.disabled = false;
        }
        else {
            nrCadeirasError.style.display = "block";
            numGuardaSois.value = "";
            numOk = false;
            dataInicio.disabled = true;
            dataInicio.value = "dd/mm/yyyy";
        }
    }

    afirmDateError.onclick = function() {
        dateError.style.display = "none";
        dataInicio.value = "dd/mm/yyyy";
    }

    afirmHourError.onclick = function() {
        hourError.style.display = "none";
    }

    afirmNrCadeirasError.onclick = function() {
        nrCadeirasError.style.display = "none";
    }

    dataInicio.onchange = function(){
        dataEscolhida = dataInicio.value.split("-");
        dataEscolhidaFormated = dataEscolhida[2] + "-" + dataEscolhida[1] + "-" + dataEscolhida[0];
        if (todayFormated > dataEscolhidaFormated) {
            horaInicio.disabled = true;
            dateError.style.display = "block";
            dataInicio.value = "dd/mm/yyyy";
        }
        else {
            horaInicio.disabled = false;
        }
    }

    horaInicio.onchange = function(){
        nowHour = "12:00:00";
        if (todayFormated == dataEscolhidaFormated) {
            if (horaInicio.value > horaInicio.max || horaInicio.value < horaInicio.min || horaInicio.value < nowHour) {
                horaInicio.value = "--:--";
                hourError.style.display = "block";
                horaFim.disabled = true;
            }
            else {
                horaFim.disabled = false;
            }
        }
        else {
            if (horaInicio.value > horaInicio.max || horaInicio.value < horaInicio.min) {
                horaInicio.value = "--:--";
                hourError.style.display = "block";
                horaFim.disabled = true;
            }
            else {
                horaFim.disabled = false;
            }
        } 
    }

    horaFim.onchange = function() {
        if (horaFim.value <= horaInicio.value) {
            horaFim.value = "--:--";
            hourError.style.display = "block";
        }
        else {
            reservarButton.disabled = false;
            let valor = numGuardaSois.value * 2;
            precoTotal.innerText = valor + "€";
        }
    }

    reservarButton.onclick = function() {
        teste.style.display = "block";
    }
    
    afirmativo.onclick = function() {
        sucecida.style.display = "block";
        teste.style.display = "none";
    }
    negativo.onclick = function() {
        teste.style.display = "none";
    }

}


document.addEventListener("DOMContentLoaded", function (event) { LoadPage() });


