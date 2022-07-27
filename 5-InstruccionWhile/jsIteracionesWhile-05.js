/*
Schmidt, Katerina DIV Z
Ejercicio WHILE 05
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("Ingrese f ó m");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("Ingrese nuevamente f ó m");
	}

	txtIdSexo.value = sexoIngresado;
}