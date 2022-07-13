/*
Schmidt, Katerina DIV Z
Ejercicio E/S 03
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

	nombreIngresado = document.getElementById("txtIdNombre").value;

	alert("Usted ha ingresado: " + nombreIngresado);

}

/*
Otra forma de hacerlo:
	var nombreIngresado;
	nombreIngresado = txtIdNombre.value;
	alert("Usted ha ingresado: " + nombreIngresado);
*/
