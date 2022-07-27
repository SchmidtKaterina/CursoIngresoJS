/*
Schmidt, Katerina DIV Z
Ejercicio WHILE 06
Al presionar el botón pedir 5 números e 
informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var i = 0;
	var acumulador = 0;

	while(i < 5)
	{
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		i = i + 1;
	}

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / 5;
}