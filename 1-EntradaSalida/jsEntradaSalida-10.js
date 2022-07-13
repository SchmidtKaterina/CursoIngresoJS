/*
Schmidt, Katerina DIV Z
Ejercicio E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	descuento = importe * 25 / 100;

	resultado = importe - descuento;

	txtIdResultado.value = resultado;
}

/*
Schmidt, Katerina DIV Z
Ejercicio E/S 10 bis
Debemos lograr tomar el importe del descuento por prompt.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO". Ademas se debera
mostrar por alert el siguiente mensaje: "Ud obtuvo un descuento de $xx"
function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado;

	importe = prompt("Ingrese su importe ");

	descuento = importe * 25 / 100;

	resultado = importe - descuento;

	txtIdResultado.value = resultado;

	alert("Usted obtuvo un descuento de $" + descuento);
}
*/