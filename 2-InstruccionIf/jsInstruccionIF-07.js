/*
Schmidt, Katerina DIV Z
Ejercicio IF 07
Al ingresar una edad menor a 18 años y un estado civil 
distinto a "Soltero", mostrar el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
	var edad;
	var estadoCivilIngresado;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	estadoCivilIngresado = estadoCivil.value;

	if(edad < 18 && estadoCivilIngresado != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
	console.log("No entro en el IF");
}

/*lo hice primero asi pero despues lo corregi:
	if(edad < 18 && estadoCivilIngresado == "Casado")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
	else
	{
		if(edad < 18 && estadoCivilIngresado == "Divorciado")
		{
			alert("Es muy pequeño para NO ser soltero.");
		}
	}
	*/