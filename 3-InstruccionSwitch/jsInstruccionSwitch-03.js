/*
Schmidt, Katerina
Ejercicio SWITCH 03
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/
function mostrar()
{
	var mesIngresado;
	var mensaje;

	mesIngresado = txtIdMes.value;

	switch(mesIngresado)
	{
		case"Febrero":
			mensaje = "Este mes no tiene más de 29 días.";
			break;

		default:
			mensaje = "Este mes tiene 30 o más días.";
			break;
	}

	alert(mensaje);
}