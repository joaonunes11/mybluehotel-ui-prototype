"use strict";
function LoadPage() {

    $(document).ready(function(){
        $(document).on("click", function () {
            if (event.target.classList[0] && freeze == false) {
                let status = event.target.src.split("/").pop().split(".")[0];
                switch(status) {
                    case "Livre":
                        if (nrBilhetesComprados >  nrLugaresSelecionados) {
                            event.target.src = "Imagens/Escolhido.png";
                            nrLugaresSelecionados += 1;
                            precoTotal += 10;
                            preco.value = precoTotal + " €";
                        }
                      break;
                    case "Escolhido":
                        event.target.src = "Imagens/Livre.png";
                        nrLugaresSelecionados -= 1;
                        precoTotal -= 10;
                        preco.value = precoTotal + " €";
                      break;
                    case "Livre2":
                    if (nrBilhetesComprados >  nrLugaresSelecionados) {
                        event.target.src = "Imagens/Escolhido2.png";
                        nrLugaresSelecionados += 1;
                        precoTotal += 10;
                        preco.value = precoTotal + " €";
                    }
                    break;
                    case "Escolhido2":
                        event.target.src = "Imagens/Livre2.png";
                        nrLugaresSelecionados -= 1;
                        precoTotal -= 10;
                        preco.value = precoTotal + " €";
                        break;
                  }
            }
            if (nrLugaresSelecionados > 0) {
                reservarButton.disabled = false;
            }
            else {
                reservarButton.disabled = true;
            }
         });    
      });

    var freeze = false;

    var continuarButton = document.getElementById("continuarButton");
    var voltarButton = document.getElementById("voltarButton");
    var precoTotal = 0;
    var nrLugaresSelecionados = 0;
    var nrBilhetesComprados = 0;
    var lugaresGrid = document.getElementById("lugaresGrid");
    var lugaresGrid2 = document.getElementById("lugaresGrid2");
    var piscina = document.getElementById("pool");
    var reservarButton = document.getElementById("cadeira_button");
    var preco = document.getElementById("preco");

    var todayDateInput = document.getElementById("dateDay");
    var time = document.getElementById("time");
    var timeFim = document.getElementById("timeFim");
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var todayFormated = dd + '-' + mm + '-' + yyyy;

    var dataEscolhida;
    var dataEscolhidaFormated;

    var nowHour = today.toString().split(" ")[4];
    
    var dateError = document.getElementById("dateError");
    var hourError = document.getElementById("hourError");
    var nrCadeirasError = document.getElementById("nrCadeirasError");
    var afirmDateError = document.getElementById("afirmativoDateError");
    var afirmHourError = document.getElementById("afirmativoHourError");
    var afirmNrCadeirasError = document.getElementById("afirmativoNrCadeirasError");
    var c = 0;

    var dataInicioDiv = document.getElementById("dataInicioDiv");
    var horaInicioDiv = document.getElementById("horaInicioDiv");
    var horaFimDiv = document.getElementById("horaFimDiv");
    var precoReservarDiv = document.getElementById("precoReservarDiv");
    var reservadoSucessoDiv = document.getElementById("reservadoSucessoDiv");
    var reservadoSucesso = document.getElementById("reservadoSucesso");

    var step2 = false;
    var step3 = false;
    var step4 = false;
    var currentStep = 2;


    var temCerteza = document.getElementById("teste");
    var afirmativo = document.getElementById("afirmativo");
    var negativo = document.getElementById("negativo");

    continuarButton.onclick = function() {
        if (step2 && currentStep == 2){
            dataInicioDiv.style.display = "none";
            horaInicioDiv.style.display = "block";
            voltarButton.style.display = "inline-block";
            currentStep = 3;
            continuarButton.disabled = true;
        }
        else if (step3 && currentStep == 3){
            horaInicioDiv.style.display = "none";
            horaFimDiv.style.display = "block";
            currentStep = 4;
            continuarButton.disabled = true;
        }
        else if (step4 && currentStep == 4){
            horaFimDiv.style.display = "none";
            MakeLugares(1);
            piscina.style.display = "inline";
            MakeLugares2(1);
            precoReservarDiv.style.display = "block";
            continuarButton.style.display = "none";
            voltarButton.style.display = "block";
            reservarButton.disabled = true;
            currentStep = 5;
            document.getElementById("divLugares").style.display = "block";
            document.getElementById("precoReservarDiv").style.display = "block";
        }
    }
    voltarButton.onclick = function() {
        if (step2 && currentStep == 3){
            dataInicioDiv.style.display = "block";
            horaInicioDiv.style.display = "none";
            voltarButton.style.display = "none";
            currentStep = 2;
            continuarButton.disabled = false;
        }
        if (step3 && currentStep == 4){
            horaInicioDiv.style.display = "block";
            horaFimDiv.style.display = "none";
            currentStep = 3;
            continuarButton.disabled = false;
        }
        if (step4 && currentStep == 5){
            continuarButton.disabled = false;
            document.getElementById("divLugares").style.display = "none";
            document.getElementById("precoReservarDiv").style.display = "none";
            horaFimDiv.style.display = "block";
            continuarButton.style.display = "inline-block";
            voltarButton.style.display = "inline-block";
            currentStep = 4;
        }
    }

    afirmDateError.onclick = function() {
        dateError.style.display = "none";
        todayDateInput.value = "dd/mm/aaaa";
    }

    afirmHourError.onclick = function() {
        hourError.style.display = "none";
    }

    afirmNrCadeirasError.onclick = function() {
        nrCadeirasError.style.display = "none";
    }

    todayDateInput.onchange = function() {
        dataEscolhida = todayDateInput.value.split("-");
        dataEscolhidaFormated = dataEscolhida[2] + "-" + dataEscolhida[1] + "-" + dataEscolhida[0];
        if (todayFormated > dataEscolhidaFormated) {
            dateError.style.display = "block";
            step2 = false;
            continuarButton.disabled = true;
        }
        else {
            step2 = true;
            continuarButton.disabled = false;
        }

    }

    time.onchange = function() {
        //nowHour = "15:00:00";
        if (todayFormated == dataEscolhidaFormated) {
            if (time.value > time.max || time.value < time.min || time.value < nowHour) {
                time.value = "--:--";
                hourError.style.display = "block";
                step3 = false;
                continuarButton.disabled = true;
            }
            else {
                step3 = true;
                continuarButton.disabled = false;
            }
        }
        else {
            if (time.value > time.max || time.value < time.min) {
                time.value = "--:--";
                hourError.style.display = "block";
                step3 = false;
                continuarButton.disabled = true;
            }
            else {
                step3 = true;
                continuarButton.disabled = false;
            }
        } 
    }

    timeFim.onchange = function() {
        if (timeFim.value <= time.value) {
            timeFim.value = "--:--";
            hourError.style.display = "block";
            step4 = false;
            continuarButton.disabled = true;
        }
        else {
            step4 = true;
            continuarButton.disabled = false;
        }
    }

    reservadoSucesso.onclick = function() {
        reservadoSucessoDiv.style.display = "none";
        window.location.href = "piscina.html";
    }


    reservarButton.onclick = function() {
        if (nrLugaresSelecionados > 0 && freeze == false) {
            //reservadoSucessoDiv.style.display = "block";
            temCerteza.style.display = "block";
            freeze = true;
        }
        else {

        }
    };

    afirmativo.onclick = function() {
        reservadoSucessoDiv.style.display = "block";
        temCerteza.style.display = "none";
        var children = lugaresGrid.children;
        var array = [];
        for (var i = 0; i < children.length; i++) {
            if (children[i].src.split("/").pop().split(".")[0] == "Escolhido"){
                console.log("entrei");
                let reserva = [];
                reserva.push("1"+children[i].id);
                reserva.push(time.value);
                reserva.push(timeFim.value);
                reserva.push(dataEscolhidaFormated);
                array.push(reserva);
            }
    
            }
            for (var j = 0; j < lugaresGrid2.children.length; j++) {
            if (lugaresGrid2.children[j].src.split("/").pop().split(".")[0] == "Escolhido2"){
                console.log("entrei2");
                let reserva = [];
                reserva.push("2"+lugaresGrid2.children[j].id);
                reserva.push(time.value);
                reserva.push(timeFim.value);
                reserva.push(dataEscolhidaFormated);
                array.push(reserva);
            }
            }
            console.log(array);
            var reservasAtuaisCadeiras = JSON.parse(localStorage.getItem("reservasCadeiras"));
            if (reservasAtuaisCadeiras == null) {
                localStorage.setItem("reservasCadeiras", JSON.stringify(array));
            }
            else {
                console.log("chegeui aki");
                console.log(reservasAtuaisCadeiras);
                for (var reserva in array) {
                reservasAtuaisCadeiras.push(array[reserva]);
                }
                localStorage.setItem("reservasCadeiras", JSON.stringify(reservasAtuaisCadeiras));
            }
    }

    negativo.onclick = function() {
        temCerteza.style.display = "none";
        freeze = false;
    }

    function MakeLugares(sessionN) {     
        while (lugaresGrid.firstChild) {
            lugaresGrid.firstChild.remove();
            nrBilhetesComprados = 200;
            nrLugaresSelecionados = 0;
        }

        let grid = 0;   
        grid = String(100 / 5) + "%";
        lugaresGrid.style.gridTemplateColumns = grid.repeat(5);
        for (let i = 0; i < 2; i++) {     
            for (let j = 0; j < 5; j++) {  
                let lugar = document.createElement("img");
                lugar.classList = "grid-item";
                lugar.style.width = "55%";
                lugar.id = "id_" + String(i) + String(j);

                if (sessionN == 1) {
                    if ((i == 2 && j == 3) || (i == 2 && j == 1)){
                        lugar.src ="Imagens/Ocupado.png";
                    }
                    else {
                        lugar.src = "Imagens/Livre.png";
                    }
                }
                else if (sessionN == 2) {
                    if ((i == 2 && j == 2) || (i == 4 && j == 4)){
                        lugar.src ="Imagens/Ocupado.png";
                    }
                    else {
                        lugar.src = "Imagens/Livre.png";
                    }
                }
                
                lugaresGrid.appendChild(lugar);
            }
        }

    }

    function MakeLugares2(sessionN) {     
        while (lugaresGrid2.firstChild) {
            lugaresGrid2.firstChild.remove();
            nrLugaresSelecionados = 0;
        }

        nrBilhetesComprados = 200;

        let grid = 0;   
        grid = String(100 / 5) + "%";
        lugaresGrid2.style.gridTemplateColumns = grid.repeat(5);
        for (let i = 0; i < 2; i++) {     
            for (let j = 0; j < 5; j++) {  
                let lugar = document.createElement("img");
                lugar.classList = "grid-item";
                lugar.style.width = "55%";
                lugar.id = "id_" + String(i) + String(j);

                if (sessionN == 1) {
                    if ((i == 1 && j == 3) || (i == 2 && j == 1)){
                        lugar.src ="Imagens/Ocupado2.png";
                    }
                    else {
                        lugar.src = "Imagens/Livre2.png";
                    }
                }
                else if (sessionN == 2) {
                    if ((i == 2 && j == 2) || (i == 4 && j == 4)){
                        lugar.src ="Imagens/Ocupado2.png";
                    }
                    else {
                        lugar.src = "Imagens/Livre2.png";
                    }
                }
                lugaresGrid2.appendChild(lugar);
            }
        }

    }
}


document.addEventListener("DOMContentLoaded", function (event) { LoadPage() });


