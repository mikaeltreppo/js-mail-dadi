/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/
let emailUser = prompt('inserisci la tua email');
console.log(emailUser);

let emailList = ["giacomo@gmail.com", "luca@gmail.com", "massimo@gmail.com", "carla@gmail.com", "mikael@gmail.com", "sandra@gmail.com" ];

for (let i = 0; i < emailList.length; i++){
    if( emailUser == emailList[i]){
        console.log("bentornato " + emailUser);
    }
    else if( emailUser !== emailList[i]){
        console.log("iscriviti con noi!");
    }
}