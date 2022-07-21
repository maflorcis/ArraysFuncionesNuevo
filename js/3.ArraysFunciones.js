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

//mostrar con qué frecuencia aparecen los resultados de todas las sumas

/*Ejemplo de la profe abajo*/

//let dado1 = Math.floor(Math.random()* (max-min+1)+min)
let sumas = []; //array vacío
let pruebaDado1 = [];
let pruebaDado2 = [];

for( let i=0; i<50; i++) {

let dado1 = Math.floor(Math.random()* (6-1+1)+1);
let dado2 = Math.floor(Math.random()* (6-1+1)+1);

let suma = dado1 + dado2
sumas.push(suma)
pruebaDado1.push(dado1);
pruebaDado2.push(dado2);
}
document.write('<br>' + 'Resultado prueba del primer dado: ' + pruebaDado1);
document.write('<br>' + 'Resultado prueba del segundo dado: ' + pruebaDado2);

document.write('<br>' + 'Resultados de la suma: ' + sumas);

document.write(`<table>
<tbody> 
<tr><td>Resultado </td> <td>Frecuencia</td> <tr>
`)

for (let resultado =2; resultado <=12; resultado++){
  let contador=0
    for(let posicion = 0; posicion < sumas.length; posicion++){
      if(resultado === sumas [posicion]){
        //sumar las apariciones
        contador++
      }
    }
    document.write(`<tr><td>${resultado}</td> <td>${contador}</td> <tr></tr>`)
}
document.write(`<tbody></table>`)
