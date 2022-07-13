/*Schmidt, Katerina DIV Z
Tp E/S 02
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var perimetroRectangulo;
	var alambreRequerido;
	var mensaje;

	largoDelTerreno = txtIdLargo.value;
	largoDelTerreno = parseFloat(largoDelTerreno);

	anchoDelTerreno = txtIdAncho.value;
	anchoDelTerreno = parseFloat(anchoDelTerreno);

	perimetroRectangulo = (largoDelTerreno + anchoDelTerreno) * 2;
	
	alambreRequerido = perimetroRectangulo * 3;
	alambreRequerido = alambreRequerido.toFixed(2);

	mensaje = "La cantidad de alambre que debe comprar es: " + alambreRequerido + " metros.";
	alert(mensaje);
}
/*
Entradas:
	Largo del terreno
	Ancho del terreno
Proceso:
	Calcular el perimetro del rectangulo
	Multiplicar por la cant de alambre (3)
Salidas:
	Alambre requerido
*/
function Circulo () 
{
	var radioDelTerreno;
	var perimetroCirculo;
	var alambreRequerido;
	var mensaje;

	radioDelTerreno = parseFloat(txtIdRadio.value);

	perimetroCirculo = radioDelTerreno * 2 * Math.PI;

	alambreRequerido = perimetroCirculo * 3;
	alambreRequerido = alambreRequerido.toFixed(2);

	mensaje = "La cantidad de alambre que debe comprar es: " + alambreRequerido + " metros."
	alert(mensaje);
}
/*
Entradas:
	Radio del circulo
Proceso:
	Calcular el perimetro del circulo
	Dividirlo en la cant de alambre(3)
Salidas:
	Alambre requerido
*/
function Materiales () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var metrosCuadradosTerreno;
	var bolsasCemento;
	var bolsasCal;
	var mensaje;

	largoDelTerreno = parseFloat(txtIdLargo.value);
	anchoDelTerreno = parseFloat(txtIdAncho.value);

	metrosCuadradosTerreno = largoDelTerreno * anchoDelTerreno;

	bolsasCemento = metrosCuadradosTerreno * 2;
	bolsasCemento = bolsasCemento.toFixed(1);
	bolsasCal = metrosCuadradosTerreno * 3;
	bolsasCal = bolsasCal.toFixed(1);

	mensaje = "Usted deberá comprar " + bolsasCemento + 
	" bolsas de cemento" + " y " + bolsasCal + " bolsas de cal.";
	alert(mensaje);
}
/*
Entradas:
	Largo del terreno
	Ancho del terreno
Proceso:
	Calcular metros cuadrados del terreno
	Multiplicar por la cant de bolsas de cto(2)
	y la cant de bolsas de cal(3)
Salidas:
	Cant de bolsas de cto y cal
*/ 