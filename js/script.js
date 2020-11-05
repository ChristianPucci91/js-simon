// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

// >>>>>>>>>>>>>>> INIZIO ESERCIZIO <<<<<<<<<<<<<<<<

// -------------------------------------------------------------------------------------------
var numeriGenerati = []; // dichiaro una variabile array per i numeri casuali
var punteggio = 0; // creo variabile del punteggio giocatore
numeriGenerati = (generaNumeri(1,100)); // richiamo la funzione generaNumeri
console.log("I numeri che devi ricordare sono: ",numeriGenerati);
alert("I Numeri che devi ricordare sono: " + numeriGenerati) // creo alert con i numeri generati dalla funzione
// -------------------------------------------------------------------------------------------

// creo funzione setTimeout che si attiverà 30 secondi dopo che l'utente avrà dato l'ok a l'alert dei numeriGenerati
// questa funzione servirà per far inserire i numeri all'utente e pusharli dentro a 2 array.
setTimeout(function () {

  var arrayUtente = []; // array per i 5 numeri inseriti dall'utente
  var numeriIndovinati = []; // array dei numeri che l'utente indovina

  for (var i = 0; i < 5; i++) { // ciclo for per chiedere all'utente 5 volte di inserire un numero

    var numeroInserito = [i];
    numeroInserito = parseInt(prompt("inserisci numero"));
    // casi limite di inserimento numeri utente
    while ((arrayUtente.includes(numeroInserito)) || (isNaN(numeroInserito)) || (numeroInserito > 100) || (numeroInserito < 1) ) {
      numeroInserito = parseInt(prompt("Per favore, inserisci un numero secondo le regole!"));
    }
    arrayUtente.push(numeroInserito);
    console.log("array utente",arrayUtente);
    // condizione se il numero inserito dall'utente è all'interno dell'array dei numeriGenerati aumento il punteggio di 1 e
    // lo inserisco all'interno dell'array dei numeriIndovinati
    if (numeriGenerati.includes(numeroInserito)) {
      punteggio++;
      numeriIndovinati.push(numeroInserito);
    }
   console.log("il tuo punteggio è",punteggio); // stampo punteggio
  }// fine ciclo for

  // condizione dell'esito partita. se il punteggio è < 5 il giocatore ha perso
  // altrimenti ha vinto.
  if (punteggio < 5) {
   console.log("Hai perso!" + "il tuo punteggio è: ",punteggio);
   console.log("i numeri che hai indovinato sono: ",numeriIndovinati);
  } else {
   console.log("Hai vinto!!" + "il tuo punteggio è:",punteggio);
   console.log("I numeri che hai indovinato sono: ", arrayUtente);
  }

},1000) // fine funzione setTimeout


// FUNZIONI

// funzione che genera numeri random da 1 a 100 con un ciclo while che controlla se ci sono numeri uguali
function generaNumeri(min,max) {

  for (var i = 0; i < 5; i++) { // inizio ciclo for

    numeriGeneratiElemento = Math.floor(Math.random()* max )+min;

    while (numeriGenerati.includes(numeriGeneratiElemento)) {
      numeriGeneratiElemento = Math.floor(Math.random()* max) +min;
    }
    numeriGenerati.push(numeriGeneratiElemento);
  } // fine ciclo for
  return numeriGenerati;
} // fine funzione
