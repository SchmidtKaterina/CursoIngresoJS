/*
Schmidt, Katerina DIV Z
Ejercicio SWITCH 04
Al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	var mesIngresado;
	var mensaje;

	mesIngresado = txtIdMes.value;

	switch(mesIngresado)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 días.";
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 días.";
			break;

		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		case "Enero":
			mensaje = "Este mes tiene 31 días.";
			break;
	}

	alert(mensaje);
}