/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

//-- ARRAY WITH OBJECTS --//

const footballTeams = [
    { 
        "nome": "Riomma",
        "puntiFatti": 0,
        "falliSubiti": 0,
    },

    { 
        "nome": "Lazzzie",
        "puntiFatti": 0,
        "falliSubiti": 0,
    },

    { 
        "nome": "Giuventus",
        "puntiFatti": 0,
        "falliSubiti": 0,
    },

    { 
        "nome": "Internette",
        "puntiFatti": 0,
        "falliSubiti": 0,
    },

    { 
        "nome": "Pescasseroli",
        "puntiFatti": 0,
        "falliSubiti": 0,
    }

];

//for (let key in footballTeams) { //Stampa in console dell'array con gli objects, just for check
//    console.log(footballTeams[key]);
//}

//-- GENERAZIONE NUMERI RANDOM --//

