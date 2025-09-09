/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

//-- ARRAY WITH OBJECTS --//
const bicycles = [

    { 
        "nome": "Colnago",
        "peso": 10,
    },

    { 
        "nome": "Bianchi",
        "peso": 6.6,
    },

    { 
        "nome": "Canyon",
        "peso": 12.5,
    },
    
    { 
        "nome": "Pinarello",
        "peso": 7.5,
    }
    
];

//for (let key in bicycles) { //Stampa in console dell'array con gli objects, just for check
//    console.log(bicycles[key]);
//}

//-- RICERCA DEL PESO MINORE CON IL CICLO FOR IN--//

let lightestBicycle = bicycles [0]; 

for (let i in bicycles) { 
    if (bicycles[i].peso < lightestBicycle.peso) {
        lightestBicycle = bicycles[i];
    }
}

//--STAMPA PESO MINORE IN CONSOLE--//

console.log("La bici dal peso più basso è la", lightestBicycle);


