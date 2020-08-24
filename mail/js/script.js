//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Chiedere la mail con un prompt
var mailUtente = prompt("Inserisci la tua mail")

var listaMail = ["anna@gmail.com", "elisabetta@gmail.com", "enrico@gmail.com", "samuele@gmail.com", "pippo@gmail.com"];
console.log(listaMail);
// Confrontare la mail con quelle presenti nella lista
if (listaMail.includes(mailUtente)) {
  alert("Benvenuto!");
}
else {
  alert("Tu non puoi passare!!!")
}
// Stampare il messaggio se mail corretta
