/*
2- Deﬁnir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas.
*/

function esMayuscula(letra)
{
    return letra === letra.toUpperCase();
}

function esMinuscula(letra)
{
    return letra === letra.toLowerCase();
}

let miPalabra = prompt('ingresá una frase');
let letraActual

for(let index = 0; index < miPalabra.length; index++)
{
    letraActual = miPalabra.charAt(index);
    if(esMayuscula(letraActual))
    {
        document.write("La letra " + letraActual + " es mayúscula" + '<br>');
    }

    if(esMinuscula(letraActual))
    {
        document.write("La letra " + letraActual + " es minúscula" + '<br>');
    }       
}
