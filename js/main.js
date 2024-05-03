'use strict';

//////////////////////////////////////////////////////////

//MILESTONE 1

const formGeneraDati = document.getElementById('formGeneraDati');
//console.dir(formGeneraDati);

//CAMBIARE PROPRIETÀ DI STILE CON IL CLICK DEL MOUSE AL PULSANTE GENERA
let buttonSubmit = document.querySelector('input[type="submit"]');
buttonSubmit.addEventListener('mousedown',
    function() {
        buttonSubmit.style.borderColor = "orange";
        
    }
)

buttonSubmit.addEventListener('mouseup',
    function() {
        buttonSubmit.style.borderColor = "#8d8d8d";
    }
)

//CAMBIARE PROPRIETÀ DI STILE CON IL CLICK DEL MOUSE AL PULSANTE ANNULLA
let buttonReset = document.querySelector('input[type="reset"]');
buttonReset.addEventListener('mousedown',
    function() {
        buttonReset.style.borderColor = "orange";
    }
)

buttonReset.addEventListener('mouseup',
    function() {
        buttonReset.style.borderColor = "#8d8d8d";
    }
)

formGeneraDati.addEventListener('submit', 
    
    function(e) {
        e.preventDefault();

        //ACQUISIRE I DATI CHE CI SERVONO IN INPUT DALL'UTENTE
        let nameInput = document.getElementById('name').value;
        let kmInput = document.getElementById('kilometers').value;
        let ageInput = document.getElementById('age').value;

        console.log({nameInput});
        console.log({ageInput});
        console.log({kmInput});

        //RENDERE I DATI UTILIZZABILI
        kmInput = Number(kmInput);
        //console.log({kmInput});

        //CALCOLARE IL TOTALE DEL BIGLIETTO
        const price = 0.21;
        let totalPrice = (kmInput * price);
        //console.log({totalPrice});

        //APPLICARE GLI SCONTI
        let discount18 = 20;
        //over 65
        let discount65 = 40;

        if (ageInput === "minors") {
            totalPrice = (totalPrice - (totalPrice / 100 * discount18));
            //console.log("sono entrato nel ciclo 18;")
        } else if (ageInput === "elderly") {
            totalPrice = (totalPrice - (totalPrice / 100 * discount65));
            //console.log("sono entrato nel ciclo 65;")
        }

        //METTIAMO IL RISULTATO NELLA GIUSTA FORMA E LO FACCIAMO VISUALIZZARE
        totalPrice = Number(totalPrice.toFixed(2));
        console.log({totalPrice});

        //////////////////////////////////////////////////
        //MILESTONE 2

        //display
        document.querySelector('.ticket').style.display = "block";

        //permettere al codice CP di rigenerarsi sempre invece di aggiungere cifre all'infinito
        let inputRead = document.getElementById('code-input');
        inputRead.innerHTML = "";

        //visualizzare nome
        inputRead = document.getElementById('name-input');
        inputRead.innerText = nameInput;

        //visualizzare prezzo
        inputRead = document.getElementById('price-input');
        inputRead.innerText = totalPrice + "\u20AC";

        //generare numero random carrozza
        let randomNumber = Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1) + Math.ceil(1));
        console.log({randomNumber});

        //visualizzare numero carrozza
        inputRead = document.getElementById('traincar-input');
        inputRead.innerText = randomNumber;

        //generare numero random codice CP e visualizzarlo
        inputRead = document.getElementById('code-input');
        //genera la 1 cifra
        randomNumber = Math.floor(Math.random() * (Math.floor(9) - Math.ceil(1) + 1) + Math.ceil(1));
        inputRead.innerText += randomNumber;
        //genera la 2 cifra
        randomNumber = Math.floor(Math.random() * (Math.floor(9) - Math.ceil(1) + 1) + Math.ceil(1));
        inputRead.innerText += randomNumber;
        //genera la 3 cifra
        randomNumber = Math.floor(Math.random() * (Math.floor(9) - Math.ceil(1) + 1) + Math.ceil(1));
        inputRead.innerText += randomNumber;
        //genera la 4 cifra
        randomNumber = Math.floor(Math.random() * (Math.floor(9) - Math.ceil(1) + 1) + Math.ceil(1));
        inputRead.innerText += randomNumber;
        //genera la 5 cifra
        randomNumber = Math.floor(Math.random() * (Math.floor(9) - Math.ceil(1) + 1) + Math.ceil(1));
        inputRead.innerText += randomNumber;

    }
)

//CON IL CLICK SUL PULSANTE ANNULA SI RICARICA TUTTA LA PAGINA PER PERDERE TUTTI GLI INPUT AGGIUNTI
formGeneraDati.addEventListener('reset', 
    
    function(e) {
        e.preventDefault();

        location.reload();
    }
)