
function init() {
    console.log("Manipulando el DOM con JS")
}

window.onload = init; 


// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

// CREAS, SELECCIONAS Y PINTAS

// 1. Creas la variable y la igualas al createElement. Creando un div. 
let emptyDiv = document.createElement("div");

// 2. Seleccionas donde quieres incluirlo. Buscas el nodo. 
let location = document.querySelector(".emptyDivLocation"); 

// 3. Lo incluyes dentro 
document.location.appendChild(emptyDiv); 



/* OTRA FORMA SELECCIONANDO Y PINTANDO EN UN SOLO PASO 

// 1. Creas el div 
const emptyDiv = document.createElement('div'); 

// 2. Seleccionas el lugar donde quieres meterlo (en este caso clase .emptyDivLocation y con appendchild lo pintas detrás)
document.querySelector(".emptyDivLocation").appendChild(emptyDiv); */

/*
let emptyDiv = document.createElement("div"); 
document.querySelector(".emptyDivLocation").appendChild(emptyDiv); // Esto es lo mismo que lo siguiente en linea 34
// document.emptyDivLocation.appendChild(emptyDiv);  */ 



// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let newP = document.createElement("p"); // creas elemento p 
newP.innerText = "Este es el p que he creado de forma dinámica"; // le metes contenido al elemento creado 
let myDiv = document.createElement("div"); // creas un div para que pueda contener el p 

document.myDiv.appendChild(newP);  //  incluyes dentro de myDiv (div que he creado) el p que he creado 
document.appendChild(myDiv);  // pinto el div (myDiv) al final del body 


// document.querySelector("body").appendChild(newP); // le dices dónde tiene que ir 


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let newP3 = document.createElement("div");  // creo el div 

for (let i=0; i < 6; i++){   // un bucle for que tenga 6 vueltas 
    newP3.appendChild(document.createElement("p"))   // incluyo dentro del div newP3 los 6 p 
    document.querySelector("body").appendChild(newP3);
}



// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let newP4 = document.createElement("p");  //  creo el p y lo meto en una variable let 
newP4.innerText = "¡Soy dinámicooooo!";   // con innerText le incluyo el texto (esto podría hacerse también con textContent o con innerHTML)
document.querySelector("body").appendChild(newP4);  // selecciono donde quiero colocarlo en este caso body y .appenchild


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let newH2 = document.createElement("h2"); 
newH2.innerText = "Wubba Lubba dub dub";
document.querySelector("h2").appendChild(newH2);    // inserto el cambio de texto del h2. 



// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let newA = document.createElement("ul");
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

/*
for (const a of apps){
    newA.appendChild(document.createElement("li"));
}  NOTA: Esto crea los li pero sin contenido */ 

for (const a of apps){
    let list = document.createElement("li");
    list.innerText = apps[i];
    document.newA.appendChild(list);
}

document.body.appendChild(newA);  



// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let eliminate = document.querySelectorAll(".fn-remove-me");   // selecciono todos los nodos con ALL 

for (let i = 0; i < eliminate.length; i++) {     // creo un bucle que recorra tantos nodos como existan con .length 
    document.body.removeChild(eliminate[i]);     // uso removeChild para eliminar e [i] 
} 


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	// Recuerda que no solo puedes insertar elementos con .appendChild.

    let newP8 = document.createElement("p"); 
    newP8.innerText = "Voy por el medio"; 

    document.body.insertBefore(newP8,document.querySelectorAll("div")[1]);




// 2.9  Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here.


let allDivs = document.querySelectorAll("div.fn-insert-here");   // selecciono con ALL 

for (let i=0; i < allDivs.length; i++){   // bucle for para recorrerlo todo 
    let paragraph9 = document.createElement("p");     // creo el p 
    paragraph9.innerText = "Voy con todos para dentro";  // le incluyo el texto a ese p 

    document.allDivs.appendChild(paragraph9);
}

