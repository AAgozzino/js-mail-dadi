//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Generare un numero casuale (1-6) per il giocatore
var dadoGiocatore = Math.floor(Math.random()*6) + 1;
console.log(dadoGiocatore);
// Generare un numero casuale (1-6) per il giocatore
var dadoComputer = Math.floor(Math.random()*6) + 1;
console.log(dadoComputer);
// Numero più alto vince

if (dadoGiocatore > dadoComputer) {
  alert("Hai vinto!!!")
}
else if (dadoGiocatore < dadoComputer) {
  alert("Hai perso!!!")
}
else {
  alert("Tira di nuovo")
}
