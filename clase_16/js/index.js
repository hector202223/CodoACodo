// ARRAY FUNCIONA COMO UNA LISTA
// Los Arrays pueden ser multiples tipos de valores. (String, number, boolean

let arrayPrueba = [33, 2, 5, 23, 8, 9];

let arrayFrutas = ["Manzana", "Banana", "Sandia", "Naranja"];

let arrayTres = [false, 20, "Hola"];

/*

for (let i = 0; i < arrayPrueba.length; i++) {
    console.log(arrayPrueba[i]);
}

arrayFrutas.push("Pera");
arrayFrutas.push("Arandanos");

for (let i = 0; i < arrayFrutas.length; i++) {
    console.log(arrayFrutas[i]);
}

let ultimoBorrado = arrayFrutas.pop();

console.log("Elemento sacado del Array de Frutas: " + ultimoBorrado);

*/

let arrayPersonas = ["Mateo", "Micaela", "Natasha", "Joaquin"];

let arrayConcat = arrayFrutas.concat(arrayPersonas);

console.log(arrayConcat);

/* .sort(func) : Se Ordena segun el criterio de una funcion creada */



//-------------------  STORAGE  ----------------------------


// Se guardaran ambas por dominio

// LOCAL STORAGE - INDEFINIDA Solo soporta Strings. Guarda entre 5 a 10mb. 

// SESSION STORAGE - DEFINIDA / DURACION DE LA PESTAÑA DEL NAVEGADOR= Guarda entre 5 a 10mb, se guardara en el cliente, minimiza el trafico en la red. Si se desconecta la red.

// Vemos si el web API storga es compatible con el NAVEGADOR
if (typeof (storage) != 'undefined') {
    console.log("SE PUEDE usar el STORAGE");
} else {
    alert("STORAGE No es compatible con este navegador");
}
