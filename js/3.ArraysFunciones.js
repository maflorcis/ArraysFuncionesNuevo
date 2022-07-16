/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
esta operación.
*/

//Simulación  del lanzamiento de dos dados

/*
let min = 1;
let max = 6;

let dado1 = Math.floor(Math.random() * (max - min + 1) + min);
let dado2 = Math.floor(Math.random() * (max - min + 1) + min);

console.log(dado1);
console.log(dado2);
*/

let miArray = new Array();

// bucle del 1 al 50
for (let i = 1; i <= 50; i++) {

  let min = 1;
  let max = 6;
  let dado1 = Math.floor(Math.random() * (max - min + 1) + min);
  let dado2 = Math.floor(Math.random() * (max - min + 1) + min);
  let sumadado = dado1 + dado2;
  
  miArray.push(sumadado);
}

document.write(miArray);
