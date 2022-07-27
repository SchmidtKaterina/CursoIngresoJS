/*
Schmidt, Katerina DIV Z
Ejercicio WHILE 09
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}

/*
	declaramos variables

	armo un bucle del tipo mientras el usuario quiera (do while)

	dentro del bucle:
		pido un numero
		
	despues del bucle:

*/