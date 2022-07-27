/*
Schmidt, Katerina DIV Z
Ejercicio SWITCH 10
Una agencia de viajes nos piden informar si hacemos viajes a lugares 
según la estación del año estemos, informar si "Se viaja" o 
"No se viaja" a ese lugar.
En Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja".
En Verano: Se viaja a Mar del plata y Cataratas solamente.
En Otoño: Se viaja a todos los destinos.
En primavera: solo no se viaja a Bariloche.
*/
function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var mensaje;

	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;

	

	alert(mensaje);
}

este no me funciona pero hace desde la semana pasada que busco el error y no lo veo

	/*switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
				case "Bariloche":
					mensaje = "Se viaja.";
				break;

				default: //Cataratas, Cordoba y Mar del plata
					mensaje = "No se viaja.";
				break;
		break;

		case "Verano":
			switch(destinoIngresado)
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja.";
				break;

				default: //Cordoba y Bariloche
					mensaje = "No se viaja.";
				break;
		break;

		case "Primavera": 
			switch(destinoIngresado)
				case "Bariloche":
					mensaje = "No se viaja.";
				break;

				default: //Cordoba, Mar del plata y Cataratas
					mensaje = "Se viaja.";
				break;
		break;

		default: //Otoño
			mensaje = "Se viaja.";
		break;
	}*/