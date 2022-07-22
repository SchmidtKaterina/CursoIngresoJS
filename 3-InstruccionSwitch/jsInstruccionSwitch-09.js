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
	var descuento;
	var aumento;
	var precioFinal;
	var mensaje;

	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;

	precio = 15000;
	aumento = 0;
	descuento = 0

	switch(estacionIngresada)
	{
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
				break;
				case "":
				break;
			}
		break;
	}

	alert(estacionIngresada);
}