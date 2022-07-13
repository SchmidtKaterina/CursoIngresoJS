/*
Schmidt, Katerina DIV Z
Ejercicio E/S 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var resultado;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	aumento = sueldo * 10 / 100;

	resultado = sueldo + aumento;

	document.getElementById("txtIdResultado").value = resultado;
}

/*
Schmidt, Katerina DIV Z
Ejercicio E/S 09 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadrp de texto "RESULTADO" .
funcion mostrarAumento()
{
	var sueldo;
	var aumento;
	var resultado;

	sueldo = prompt("Ingrese su sueldo ");
	sueldo = parseInt(sueldo);

	aumento = sueldo * 10 / 100;

	resultado = sueldo + aumento;


	document.getElementById("txtIdResultado").value = resultado;
}
*/