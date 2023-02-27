/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/
let userNumber = Math.floor(Math.random() * 6 + 1);
console.log(userNumber);

let pcNumber = Math.floor(Math.random() * 6 + 1);
console.log(pcNumber);

if (userNumber < pcNumber) {
    console.log("Il computer vince")}
    else if (userNumber == pcNumber) {
        console.log("pareggio, riprova!")
    }
    else{
        console.log("hai vinto!")
    }
