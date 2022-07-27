/*
Schmidt, Katerina DIV Z
Ejercicio WHILE 08
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 1;
	var respuestaIngresada;
	var flag = 0;

	do
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado >= 0) //positivo
		{
			acumuladorPositivos = acumuladorPositivos + numeroIngresado;
		}
		else //negativo
		{
			flag = 1;
			acumuladorNegativos = acumuladorNegativos * numeroIngresado;
		}

		respuestaIngresada = prompt("Quiere ingresar otro número? ");
	}
	while(respuestaIngresada == "si");

	if(flag == 0)
	{
		acumuladorNegativos = 0;
	}

	txtIdSuma.value = acumuladorPositivos;
	txtIdProducto.value = acumuladorNegativos;
}