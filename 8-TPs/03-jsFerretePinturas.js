/*Schmidt, Katerina DIV Z
Tp E/S 03
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaF;
	var conversionFaC;
	var mensaje;

	temperaturaF = parseFloat(txtIdTemperatura.value);
	temperaturaF = temperaturaF.toFixed(1);

	conversionFaC = (temperaturaF - 32) / 1.8;
	conversionFaC = conversionFaC.toFixed(1);

	mensaje = temperaturaF + " Fahrenheit son " + conversionFaC 
	+ " centígrados.";
	alert(mensaje);
}
/*
Entradas:
	Temperatura en F
Proceso:
	Convertir a grados C
Salidas:
	Mostrar la conversion
*/

function CentigradosFahrenheit () 
{
	var temperaturaC;
	var conversionCaF;
	var mensaje;

	temperaturaC = parseFloat(txtIdTemperatura.value);
	temperaturaC = temperaturaC.toFixed(1);

	conversionCaF = temperaturaC * 1.8 + 32;
	conversionCaF = conversionCaF.toFixed(1);

	mensaje = temperaturaC + " centígrados son " + conversionCaF
	+ " Fahrenheit.";
	alert(mensaje);
}
/*
Entradas:
	Temperatura en C
Proceso:
	Convertir a grados F
Salidas:
	Mostrar la conversion
*/