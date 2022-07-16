/*
2- Crear un script que solicite al usuario mediante un prompt el nombre de
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
● Mostrar la longitud del arreglo.
● Mostrar en el documento web los ítems de las posiciones primera, tercera y
última.
● Añade en última posición la ciudad de París.
● Escribe por pantalla el elemento que ocupa la segunda posición.
● Sustituye el elemento que ocupa la segunda posición por la ciudad de
'Barcelona'.
*/


let miLista=new Array();

do{

    let ciudad = prompt("Introduce una ciudad");
    miLista.push('<br>'+ ciudad);

}while((confirm('Desea ingresar una ciudad')))

document.write(miLista)

// Mostrar la longitud del arreglo.

document.write('<br>' + 'La longitud de mi arreglo es: '+ miLista.length + '<br>');

// Mostrar los ítems de las posiciones primera, tercera y última.


document.write('<br>' + 'La posición 1  es: '+ miLista[0] + '<br>');
document.write('<br>' + 'La posición 3 es: '+ miLista[2] + '<br>');
document.write('<br>' + 'La posición última es: '+ miLista[miLista.length-1] + '<br>');

//Añade en última posición la ciudad de París.

miLista.push('<br>'+'París');

document.write(miLista)

// Escribe por pantalla el elemento que ocupa la segunda posición.

document.write('<br>' + 'La posición 2  es: '+ miLista[1] + '<br>');

// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'

miLista.splice(1, 0, '<br>'+'Barcelona')

document.write(miLista)