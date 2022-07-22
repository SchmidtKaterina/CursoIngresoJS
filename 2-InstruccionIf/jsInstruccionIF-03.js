/*
Schmidt, Katerina DIV Z
Ejercicio IF 03
Al ingresar una edad debemos 
informar si la persona es mayor de edad, 
sino informar que es un menor de edad.
*/
function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad >= 18)
	{
		alert("Usted es mayor de edad.");
	}
	else
	{
		alert("Usted no es mayor de edad.");
	}
}