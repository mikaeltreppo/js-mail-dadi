/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/



//dado user
let diceDomUser = document.getElementById("userNum");

let userNumber = Math.floor(Math.random() * 6 + 1);

diceDomUser.innerHTML = userNumber;
// dado pc
let diceDompc = document.getElementById("pcNum");

let pcNumber = Math.floor(Math.random() * 6 + 1);

diceDompc.innerHTML = pcNumber;
//risultato
let resultDom = document.getElementById("result");



if (userNumber < pcNumber) {
    resultDom.innerHTML = " Il Pc ha vinto!"
}
else if (userNumber == pcNumber) {
    resultDom.innerHTML = " Pareggio"
}
else {
    resultDom.innerHTML = " Ehi!!! Hai vinto!"
}


//aggiunta contatore vincite
