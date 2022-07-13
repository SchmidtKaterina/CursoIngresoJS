/*Schmidt, Katerina DIV Z
Tp E/S 01
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoSuma;
	var mensaje;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioUno = parseFloat(precioUno);

	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioDos = parseFloat(precioDos);

	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioTres = parseFloat(precioTres);

	resultadoSuma = precioUno + precioDos + precioTres;

	mensaje = "El total de la suma es: " + resultadoSuma;
	alert(mensaje);
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoPromedio;
	var mensaje;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	resultadoPromedio = (precioUno + precioDos + precioTres) / 3;
	resultadoPromedio = resultadoPromedio.toFixed(2);

	mensaje = "El promedio es: " + resultadoPromedio;
	alert(mensaje);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoSuma;
	var ivaDeLaSuma;
	var resultadoFinal;
	var mensaje;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioUno = parseFloat(precioUno);

	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioDos = parseFloat(precioDos);

	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioTres = parseFloat(precioTres);

	resultadoSuma = precioUno + precioDos + precioTres;
	ivaDeLaSuma = (resultadoSuma) * 21 / 100;
	resultadoFinal = resultadoSuma + ivaDeLaSuma;
	resultadoFinal = resultadoFinal.toFixed(2);

	mensaje = "El precio final es $" + resultadoFinal;
	alert(mensaje);
}