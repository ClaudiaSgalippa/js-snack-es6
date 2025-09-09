/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

//-- ARRAY WITH OBJECTS --//

const footballTeams = [
    { 
        "nome": "Riommma",
        "puntiFatti": 0,
        "falliSubiti": 0,
    },

    { 
        "nome": "Lazzzie",
        "puntiFatti": 0,
        "falliSubiti": 0,
    },

    { 
        "nome": "Gggiuventus",
        "puntiFatti": 0,
        "falliSubiti": 0,
    },

    { 
        "nome": "Internettte",
        "puntiFatti": 0,
        "falliSubiti": 0,
    },

    { 
        "nome": "Pescassseroli",
        "puntiFatti": 0,
        "falliSubiti": 0,
    }

];

//for (let key in footballTeams) { //Stampa in console dell'array con gli objects, just for check
//    console.log(footballTeams[key]);
//}

//-- GENERAZIONE NUMERI RANDOM PER LE PROPRIETA' RICHIESTE--//

function casualNumber(min, max) { //Funzione generazione random di numeri
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < footballTeams.length; i++) {
    footballTeams[i].puntiFatti = casualNumber (0, 100); //Assegnazione del numero casuale (da 0 a 100) all'objects indicato
    footballTeams[i].falliSubiti = casualNumber (0, 100); //Assegnazione del numero casuale (da 0 a 100) all'objects indicato
}

//console.log(footballTeams); //Check funzione numeri casuali negli objects richiesti

//-- CREAZIONE NUOVO ARRAY CON OBJECTS RICHIESTI --//

const newArray = [];

for (let i = 0; i < footballTeams.length; i++) {
    newArray.push ({
        nome: footballTeams[i].nome, //Aggiunta dell'objects indicato nel nuovo array
        falliSubiti: footballTeams[i].falliSubiti //Aggiunta dell'objects indicato nel nuovo array
    });
}

console.log(newArray); //Stampa in console del nuovo array

//for (let key in newArray) { //Stampa in console dell'array con gli objects, just for check
//    console.log(newArray[key]);
//}









