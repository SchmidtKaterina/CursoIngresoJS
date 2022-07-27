/*
Schmidt, Katerina DIV Z
Ejercicio SWITCH 09
Una agencia de viajes debe sacar las tarifas de los viajes , se cobra 
$15.000 por cada estadia como base, se pide el ingreso de una estacion del año 
y localidad para vacacionar para poder calcular el precio final.
En Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba 
tiene un descuento del 10% Mar del plata tiene un descuento del 20%.
En Verano: bariloche tiene un descuento del 20% cataratas y Cordoba 
tiene un aumento del 10% Mar del plata tiene un aumento del 20%.
En Otoño y Primavera: bariloche tiene un aumento del 10% cataratas 
tiene un aumento del 10% Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento.
*/
function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var precioBase = 15000;
	var descuento = 0;
	var aumento = 0;
	var precioFinal;

	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;
	
	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumento = 20;
				break;

				case "Mar del plata":
					descuento = 20;
				break;

				default: //Cataratas y Cordoba
					descuento = 10;
				break;
			}
		break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					descuento = 20;
				break;

				case "Mar del plata":
					aumento = 20;
				break;

				default: //Cataratas y Cordoba
					aumento = 10;
				break;
			}
		break;

		default: //Otoño y Primavera
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento = 10;
				break;
			}
		break;	
	}
	precioFinal = precioBase + (precioBase * aumento / 100) - (precioBase * descuento / 100);

	alert("El precio final por ir a " + destinoIngresado + " en " + estacionIngresada + " es de $" + precioFinal);
}