
function init() {
    console.log("Manipulando el DOM con JS")
}

window.onload = init; 

/* Iteración #1: Interacción con el DOM

1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
*/ 

console.log(document.querySelector(".showme"));         // uso querySelector para seleccionar la clase .showme 


// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

console.log(document.querySelector("#pillado"));  // en este caso uso # para seleccionar el id 


// 1.3 Usa querySelector para mostrar por consola todos los p

console.log(document.querySelectorAll("p")); 

// o en array... 

const p = document.querySelectorAll("p"); 
const arrayP = Array.from(p); 
console.log(arrayP);


// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

console.log(document.querySelectorAll(".pokemon"));

// Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".

console.log(document.querySelectorAll("[data-function="testMe"]")); // no funciona porque usas 2 veces las comillas " "

console.log(document.querySelectorAll('[data-function="testMe"]')); // comillas simple y luego comillas " y puedes seleccionar el atributo 


// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe". 

console.log(document.querySelectorAll('[data-function="testMe"]')[2]); // busca en todos nodos que tienen data-function="test me" y buscamos el que tiene la posición 3 (que es el [2])

// o en array 

let character3 = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(character3);  // en el array character3 

// o en array si quieres solo el nombre 

let character3 = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(character3.innerHTML); // innerHTML te muestra el contenido que tiene en consola 