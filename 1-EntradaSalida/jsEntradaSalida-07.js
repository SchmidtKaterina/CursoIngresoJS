/*
Schmidt, Katerina DIV Z
Ejercicio E/S 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;
	var mensaje;

	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	mensaje = "La suma es: " + suma;

	alert(mensaje);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	var mensaje;

	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	resta = numeroUno - numeroDos;

	mensaje = "La resta es: " + resta;

	alert(mensaje);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicacion;
	var mensaje;

	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	multiplicacion = numeroUno * numeroDos;

	mensaje = "La multiplicacion es: " + multiplicacion;

	alert(mensaje);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var division;
	var mensaje;

	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	division = numeroUno / numeroDos

	mensaje = "La division es: " + division;

	alert(mensaje);
}