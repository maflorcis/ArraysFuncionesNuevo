/*
3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
● La fórmula del perímetro  es p = 2*(a +b)
*/


lado1 = parseInt(prompt('ingresá un número que sea la medida de un lado de un rectángulo'))
lado2 = parseInt(prompt('ingresá un número que sea la medida de otro lado de un rectángulo'))


function perimetro(lado1,lado2){
  
    let resultado= 2*(lado1 + lado2);
    alert('El perímetro es: '+ resultado);
  }
  
  perimetro(lado1,lado2);

