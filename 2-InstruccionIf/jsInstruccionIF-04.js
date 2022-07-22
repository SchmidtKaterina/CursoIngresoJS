/*
Schmidt, Katerina DIV Z
Ejercicio IF 04
Al ingresar una edad debemos informar si la persona 
es adolescente, edad entre 13 y 17 años (inclusive).
*/
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad > 12 && edad < 18 )
	{
		alert("Usted es un adolescente.")
	}

	console.log("No entro en el IF");
}