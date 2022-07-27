/*
Schmidt, Katerina DIV Z
Ejercicio WHILE 03
Al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;

	claveIngresada = prompt("Ingrese el número clave:");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Ingrese la clave nuevamente:");
	}
}
