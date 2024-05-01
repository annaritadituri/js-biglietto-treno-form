<!--
TRACCIA

Descrizione:
Scrivere un programma che chieda all’utente:
    -Il numero di chilometri da percorrere
    -Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    -il prezzo del biglietto è definito in base ai km (0.21 € al km)
    -va applicato uno sconto del 20% per i minorenni
    -va applicato uno sconto del 40% per gli over 65.

-->

<!--
MILESTONE 1:
    Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

-->


<!--
ACQUISIRE I DATI CHE CI SERVONO IN INPUT DALL'UTENTE
-->

<!--
per permetterci di leggere gli input da console
-->
const formGeneraDati = document.getElementById('formGeneraDati');
formGeneraDati.addEventListener('submit', 
    
    function(e) {
        e.preventDefault();
    }
)
<!---->

-Creare un eventListener che legga gli input nel momento in cui l'utente gli invia
    -Nella funzione creare una variabile che ci permetta di salvare l'input dato dall'utente per il nome
    --Nella funzione creare una variabile che ci permetta di salvare l'input dato dall'utente per il numero di chilometri
    ---Nella funzione creare una variabile che permetta di salvare l'input dato dall'utente per l'età del passeggero
    <!--
    RENDERE I DATI UTILIZZABILI
    -->
        -Trasformare gli input degli utenti in valori numerici con cui possiamo lavorare
    <!--
    CALCOLARE IL TOTALE DEL BIGLIETTO
    -->
        -Creare una costante su cui segniamo il prezzo PER OGNI km
        --Creare una variabile per il totale dei biglietto senza nessuno sconto
        ---Calcolare il prezzo del biglietto in base al numero dei chilometri inserito dall'utente
    <!--
    APPLICARE GLI SCONTI
    -->
        -Creare una variabile per lo sconto applicato ai minorenni
        --Creare una variabile per lo sconto applicato agli over 65
        ---Controllare l'input di età che hanno inserito gli utenti
            -SE è <18
                -Sovrascriviamo la variabile del totale e la sostituiamo con {totale - [(totale / 100) * 20]}
            -ELSE SE è >65
                --Sovrascriviamo la variabile del totale e la sostituiamo con {totale - [(totale / 100) * 40]}
    <!--
    METTIAMO IL RISULTATO NELLA GIUSTA FORMA E LO FACCIAMO VISUALIZZARE
    -->
        -Utilizziamo il metodo toFixed(2) per far stampare il totale con i giusti decimali <!--nomeVariabile.toFixed(2);--> 