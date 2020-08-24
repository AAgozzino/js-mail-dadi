//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Chiedere la mail con un prompt
var mailUtente = prompt("Inserisci la tua mail")

var listaMail = ["anna@gmail.com", "elisabetta@gmail.com", "enrico@gmail.com", "samuele@gmail.com", "pippo@gmail.com"];
console.log(listaMail);

// Confrontare la mail con quelle presenti nella lista

/*if (listaMail.includes(mailUtente)) {
  alert("Benvenuto!");
}
else {
  alert("Tu non puoi passare!!!")
}*/
var mailTrovata = false;

for (var i = 0; i < listaMail.length; i++) {

  if (mailUtente == listaMail[i]) {
    mailTrovata = true;
  }
}

// Stampare il messaggio se mail corretta

if (mailTrovata == true) {
  alert("Benvenuto!")
}
else {
  alert("Tu non puoi passare!")
}
