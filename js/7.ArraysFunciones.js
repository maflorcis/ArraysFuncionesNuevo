/*
4- Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario.
*/

let j = parseInt(prompt('elegí un número del 1 al 10'))
function escribirTablaMultiplicar(j){

	document.write("<h2>Tabla de multiplicar del "+ j +"</h2>");

	document.write("<ul>");
	
	for(i = 1;i<=10;i++){
		document.write("<li>");
		document.write(j + "x " + i + "= " + j * i);
		document.write("</li>");
	}

	document.write("</ul>");
}

escribirTablaMultiplicar(j);