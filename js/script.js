// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

// STEP 1 generiamo 5 numeri casuali con una funzione e li pushiamo dentro un array che verrà visualizzato all'utente
// -- non devono ripetersi -- -- devono essere casuali -- -- devono essere visualizzati in un prompt --

// dichiaro una variabile array per i numeri casuali
var numeriGenerati = [];
numeriGenerati = (generaNumeri(1,100));
console.log("i numeri generati sono:", numeriGenerati);
// STEP 2 l'utente dovrà ricordare i 5 numeri usciti e dovrà poi dopo 30 secondi inserirli all'interno di un prompt ripetuto per 5 volte.

// ci sarà quindi una funzione setTimeout e all'interno un ciclo for a cui chiediamo all'utente di inserire per 5 volte un numero con i vari
// casi limite.

// creo variabile del punteggio giocatore
var punteggio = 0;

var partita = setTimeout(function () {
   var arrayUtente = [];
   for (var i = 0; i < 5; i++) {
     var numeroInserito = [i];

     numeroInserito = parseInt(prompt("inserisci numero"));

     while ((arrayUtente.includes(numeroInserito)) || (isNaN(numeroInserito))) {
       numeroInserito = parseInt(prompt("inserisci numero"));
     }
     arrayUtente.push(numeroInserito);
     console.log("array utente",arrayUtente);
     if (numeriGenerati.includes(numeroInserito)) {
       punteggio++;
     }
     console.log("il tuo punteggio è",punteggio);
   }


})

// STEP 3 una volta inseriti il programma dovrà stabilire quanti numeri inseriti dall'utente sono uguali all'array dei numeri casuali
// e dichiarare il punteggio. se punteggio == a 5 l'utente avrà vinto altrimenti punteggio sarà uguale ai numeri indovinati

// STEP 4 OUTPUT il programma stamperà il punteggio e quali numeri sono stati azzeccati


// FUNZIONI

// funzione che genera numeri random da 1 a 100 con un ciclo che controlla se ci sono numeri uguali
function generaNumeri(min,max) {

  for (var i = 0; i < 5; i++) {
    numeriGeneratiElemento = Math.floor(Math.random()* max )+min;
    while (numeriGenerati.includes(numeriGeneratiElemento)) {
      numeriGeneratiElemento = Math.floor(Math.random()* max) +min;
    }
    numeriGenerati.push(numeriGeneratiElemento);
  }
  return numeriGenerati;
}
