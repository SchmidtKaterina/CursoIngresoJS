/*
Schmidt, Katerina DIV Z
Ejercicio E/S 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;
	var mensaje;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	mensaje = "Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años.";
	
	alert(mensaje);
}

/*
tambien se puede hacer asi:
	aler("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años.");
	*/