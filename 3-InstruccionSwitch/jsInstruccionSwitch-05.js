/*
Schmidt, Katerina DIV Z
Ejercicio SWITCH 05
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/
function mostrar()
{
	var horaIngresada;
	var mensaje;

	horaIngresada = txtIdHora.value;
	horaIngresada = parseInt(horaIngresada);

	switch(horaIngresada)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana.";
			break;

		default:
			mensaje = "Esta hora no tiene un mensaje predeterminado.";
			break;
	}
	
	alert(mensaje);
}