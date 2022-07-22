/*
Schmidt, Katerina DIV Z
Ejercicio IF 10
Al presionar el Botón, asignar una nota RANDOM al examen 
y mostrar: 
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4.
*/
function mostrar()
{
	var randomNumber;

	randomNumber = Math.floor(Math.random() * 11);

	if(randomNumber > 8)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(randomNumber > 3)
		{
			alert("APROBO");
		}
		else
		{
			alert("DESAPROBO");
		}
	}
	console.log(randomNumber);
}

//Genero el número RANDOM entre 1 y 10 