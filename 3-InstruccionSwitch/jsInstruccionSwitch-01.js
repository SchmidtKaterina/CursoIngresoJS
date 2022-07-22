/*
Schmidt, Katerina DIV Z
Ejercicio SWITCH 01
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/

function mostrar()
{
	var mesIngresado;
	var mensaje;

	mesIngresado = txtIdMes.value;

	switch(mesIngresado)
	{
		case "Enero":
			mensaje = "Que comiences bien el año!!!";
			break;

		case "Marzo":
			mensaje = "A clases!!!";
			break;

		case "Julio":
			mensaje = "Se vienen las vacaciones!!!";
			break;

		case "Diciembre":
			mensaje = "Felices fiestas!!!";
			break;

		default:
			mensaje = "Ingresaste un mes que no tiene mensaje predeterminado";
			break;
	}

	alert(mensaje);
}