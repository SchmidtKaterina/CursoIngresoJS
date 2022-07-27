/*
Schmidt, Katerina DIV Z
Ejercicio WHILE 07
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var contador = 0;
	var acumulador = 0;
	var respuestaIngresada = "si";
	var promedio;

	while(respuestaIngresada == "si")
	{
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;

		respuestaIngresada = prompt("Desea seguir?");
	}

	promedio = acumulador / contador;

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;
}