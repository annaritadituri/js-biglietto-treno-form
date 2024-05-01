'use strict';

//////////////////////////////////////////////////////////

const formGeneraDati = document.getElementById('formGeneraDati');
console.dir(formGeneraDati);

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

        //CALCOLARE IL TOTALE DEL BIGLIETTO
        const price = 0.21;
        let totalPrice = (kmInput * price);
        console.log({totalPrice});

        //APPLICARE GLI SCONTI
        let discount18 = 20;
        //over 65
        let discount65 = 40;

        if (ageInput === "minors") {
            totalPrice = (totalPrice - (totalPrice / 100 * discount18));
            console.log("sono entrato nel ciclo 18;")
        } else if (ageInput === "elderly") {
            totalPrice = (totalPrice - (totalPrice / 100 * discount65));
            console.log("sono entrato nel ciclo 65;")
        }

        //METTIAMO IL RISULTATO NELLA GIUSTA FORMA E LO FACCIAMO VISUALIZZARE
        totalPrice = totalPrice.toFixed(2);
        console.log({totalPrice});
    }
)