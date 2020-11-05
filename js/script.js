// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

// >>>>>>>>>>>>>>> INIZIO ESERCIZIO <<<<<<<<<<<<<<<<

// -------------------------PICCOLA PARTE BONUS--------------------------------------------------

// faccio scegliere all'utente la difficoltà di quanti numeri deve ricordare
var range = 0;
alert("Scegli la difficoltà scegliendo un numero da 1 a 3")
// casi limite inserimento dati
while(range == 0) {
  livello = parseInt(prompt("1 = 5 numeri 2 = 10 numeri 3 = 20 numeri"));
  while ((livello < 1) || (isNaN(livello)) || (livello > 3)) {
    livello = parseInt(prompt("Per favore, inserisci un numero da 1 a 3"));
  } // fine ciclo while interno
  if (livello == 1) { // do un valore a range con una condizione if
    range = 5;
  }else if (livello == 2) {
    range = 10;
  }else {
    range = 20;
  }
}// fine ciclo while

// stampo al giocatore la difficoltà scelta
rangeText = document.getElementById('rangetext');
rangeText.innerHTML = "Hai scelto il livello " + livello + ", dovrai giocare con  " + range  + " numeri."

// -------------------------------------------------------------------------------------------
var numeriGenerati = []; // dichiaro una variabile array per i numeri casuali
var punteggio = 0; // creo variabile del punteggio giocatore
numeriGenerati = (generaNumeri(1,100)); // richiamo la funzione generaNumeri
console.log("I numeri che devi ricordare sono: ",numeriGenerati);
alert("I Numeri che devi ricordare sono: " + numeriGenerati) // creo alert con i numeri generati dalla funzione
// -------------------------------------------------------------------------------------------
// creo un countdown visibile all'utente prima di iniziare la partita

var counter = 30;
setInterval(function () {
 if (counter > 0) {
   id = document.getElementById("counter");
   id.innerHTML = "inizierai a giocare fra " + counter;
   counter--;
  }
  else {
   id.innerHTML = "Inizia!";
  }
},1000);

// -------------------------------------------------------------------------------------------
// creo funzione setTimeout che si attiverà 30 secondi dopo che l'utente avrà dato l'ok a l'alert dei numeriGenerati
// questa funzione servirà per far inserire i numeri all'utente e pusharli dentro a 2 array.
setTimeout(function () {

  var arrayUtente = []; // array per i 5 numeri inseriti dall'utente
  var numeriIndovinati = []; // array dei numeri che l'utente indovina

  for (var i = 0; i < range; i++) { // ciclo for per chiedere all'utente 5 volte di inserire un numero

    var numeroInserito = [i];
    numeroInserito = parseInt(prompt("inserisci numero"));
    // casi limite di inserimento numeri utente
    while ((arrayUtente.includes(numeroInserito)) || (isNaN(numeroInserito)) || (numeroInserito > 100) || (numeroInserito < 1) ) {
      numeroInserito = parseInt(prompt("Per favore, inserisci un numero secondo le regole!"));
    } // fine condizione while
    arrayUtente.push(numeroInserito);
    // console.log("array utente",arrayUtente);
    stampaNumeriInseriti = document.getElementById('numeri_inseriti');
    stampaNumeriInseriti.innerHTML = "I numeri che hai inserito sono: " + arrayUtente;
    // condizione se il numero inserito dall'utente è all'interno dell'array dei numeriGenerati aumento il punteggio di 1 e
    // lo inserisco all'interno dell'array dei numeriIndovinati
    if (numeriGenerati.includes(numeroInserito)) {
      punteggio++;
      numeriIndovinati.push(numeroInserito);
    } // fine condizione if
  } // fine ciclo for

  // -------------------------------------------------------------------------------------------

  stampaPunteggio = document.getElementById('punteggio');
  numeriPresi = document.getElementById('numeri_indovinati');
  numeriCpu = document.getElementById('numeri_cpu');
  // condizione dell'esito partita. se il punteggio è < 5 il giocatore ha perso
  // se ha totalizzato 0 punti (caso limite),altrimenti ha vinto.
  if (punteggio == 0) {
   stampaPunteggio.innerHTML = "Hai perso!! il tuo punteggio è: " + punteggio;
   stampaPunteggio.className = "red";
   console.log("Non hai indovinato nemmeno 1 numero ");
   numeriPresi.innerHTML = "Non hai indovinato nemmeno 1 numero";
   numeriCpu.innerHTML = "i numeri generati dalla cpu erano: " + numeriGenerati;
   numeriCpu.className = "blue";
 }else if (punteggio < range) {
   console.log("Hai perso!" + "il tuo punteggio è: ",punteggio);
   stampaPunteggio.innerHTML = "Hai perso!! il tuo punteggio è: " + punteggio;
   stampaPunteggio.className = "red";
   console.log("i numeri che hai indovinato sono: ",numeriIndovinati);
   numeriPresi.innerHTML = "I numeri che hai indovinato sono i seguenti: " + numeriIndovinati;
   numeriCpu.innerHTML = "i numeri generati dalla cpu erano: " + numeriGenerati;
   numeriCpu.className = "blue";
  } else {
   console.log("i numeri che hai indovinato sono: ",numeriIndovinati);
   stampaPunteggio.innerHTML = "Hai Vinto!! Hai totalizzato " + punteggio + " punti!!";
   stampaPunteggio.className = "green";
   numeriPresi.innerHTML = "I numeri che hai indovinato sono: " + numeriIndovinati;
   numeriCpu.innerHTML = "i numeri generati dalla cpu erano: " + numeriGenerati;
   numeriCpu.className = "blue";
  }

},32000) // fine funzione setTimeout impostato a 32 secondi per dare il tempo al countdown di fare le operazioni

// -------------------------------------------------------------------------------------------

// FUNZIONI

// funzione che genera numeri random da 1 a 100 con un ciclo while che controlla se ci sono numeri uguali
function generaNumeri(min,max) {

  for (var i = 0; i < range; i++) { // inizio ciclo for

    numeriGeneratiElemento = Math.floor(Math.random()* max )+min;

    while (numeriGenerati.includes(numeriGeneratiElemento)) {
      numeriGeneratiElemento = Math.floor(Math.random()* max) +min;
    } // fine ciclo while
    numeriGenerati.push(numeriGeneratiElemento);
  } // fine ciclo for

  return numeriGenerati;
} // fine funzione
