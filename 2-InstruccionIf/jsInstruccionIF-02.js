/*
Schmidt, Katerina DIV Z
Ejercicio IF 02
Al ingresar una edad debemos informar 
solo si la persona es mayor de edad
*/
function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18)
	{
		alert("Usted es mayor de edad");
	}

	console.log("No entro en el IF");
}

