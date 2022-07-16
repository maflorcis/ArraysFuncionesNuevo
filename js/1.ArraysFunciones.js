/*
1- Crear un array llamado meses y que almacene el nombre de los doce meses del
año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.
*/
let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

//mostrar un arreglo de una lista

document.write(`<ul>`);

for(let indice=0; indice < meses.length; indice ++){
document.write(`<li>${meses[indice]}</li>`);
}
document.write(`</ul>` );