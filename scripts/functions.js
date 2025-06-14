"use strict";
function LoadPage() {

    $(document).ready(function(){
        $(document).on("click", function () {
            if (event.target.classList[0] && freeze == false) {
                let status = event.target.src.split("/").pop().split(".")[0];
                console.log(event.target.src.split("/").pop().split(".")[0]);

                switch(status) {
                    case "Livre":
                        if (nrBilhetesComprados >  nrLugaresSelecionados) {
                            event.target.src = "Imagens/Escolhido.png";
                            nrLugaresSelecionados += 1;
                            precoTotal += 15;
                            preco.value = precoTotal + " €"
                        }
                      break;
                    case "Escolhido":
                        event.target.src = "Imagens/Livre.png";
                        nrLugaresSelecionados -= 1;
                        precoTotal -= 15;
                        preco.value = precoTotal + " €"

                      break;
                  }
            }
         });    
      });


    var freeze = false;
    var nrBilhetesComprados = 100;
    var nrLugaresSelecionados = 0;

    var lugaresGrid = document.getElementById("lugaresGrid");
    var session1 = document.getElementById("session1");
    var session2 = document.getElementById("session2");
    var ecra = document.getElementById("ecra");
    var reservarButton = document.getElementById("reservar-espetaculo");
    var preco = document.getElementById("preco");
    var reservadoSucessoDiv = document.getElementById("reservadoSucessoDiv");
    var reservadoSucesso = document.getElementById("reservadoSucesso");

    var precoTotal = 0;

    var temCerteza = document.getElementById("temCerteza");
    var afirmativo = document.getElementById("afirmativo");
    var negativo = document.getElementById("negativo");

    afirmativo.onclick = function() {
        reservadoSucessoDiv.style.display = "block";
        temCerteza.style.display = "none";
    }

    negativo.onclick = function() {
        temCerteza.style.display = "none";
        freeze = false;
        reservarButton.disabled = false;
    }

    session1.onclick = function(){
        MakeLugares(1);
        ecra.style.display = "inline";
        precoTotal = 0;
    };
    session2.onclick = function(){
        MakeLugares(2);
        ecra.style.display = "inline";
        precoTotal = 0;
    };

    reservarButton.onclick = function() {
        if (nrLugaresSelecionados > 0) {
            temCerteza.style.display = "block";
            freeze = true;
            reservarButton.disabled = true;
        }
    };

    reservadoSucesso.onclick = function() {
        window.location.href = "espetaculos.html";
    }

    function MakeLugares(sessionN) {     
        while (lugaresGrid.firstChild) {
            lugaresGrid.firstChild.remove();
            nrBilhetesComprados = 1;
            nrLugaresSelecionados = 0;
        }

        let grid = 0;   
        grid = String(100 / 10) + "%";
        lugaresGrid.style.gridTemplateColumns = grid.repeat(10);
        for (let i = 0; i < 10; i++) {     
            for (let j = 0; j < 5; j++) {  
                let lugar = document.createElement("img");
                lugar.classList = "grid-item";
                lugar.style.width = "75%";
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
}


document.addEventListener("DOMContentLoaded", function (event) { LoadPage() });


