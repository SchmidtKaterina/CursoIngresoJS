/*
Schmidt, Katerina DIV Z
Ejercicio IF 08
Al ingresar una edad menor a 18 años y un estado civil 
distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{
	var edad;
	var estadoCivilIngresado;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estadoCivilIngresado = estadoCivil.value;

	if(edad >= 18 && estadoCivilIngresado == "Soltero")
	{
		alert("Es soltero y no es menor.");
	}
}