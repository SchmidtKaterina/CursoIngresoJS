/*
Schmidt, Katerina DIV Z
Ejercicio SWITCH 08
Al seleccionar un destino informar 
si hace FRIO o CALOR en ese destino.
*/
function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Aca hace frio.";
			break;

		case "Cataratas":
		case "Mar del plata":
			mensaje = "Aca hace calor.";
			break;
	}
	alert(mensaje);
}