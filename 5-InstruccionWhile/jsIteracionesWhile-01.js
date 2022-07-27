/*
Schmidt, Katerina DIV Z
Ejercicio WHILE 01
Al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var i;
	i = 0;

	while(i < 10)
	{
		i = i + 1;
		console.log(i);
	}
}
/*
i se le llama a la variable de control(cuenta la cantidad de iteraciones)
se inicializa en 0 generalmente, pero puede ser otro numero

la condicion del while (entre parentesis) va a hacer que se ejecute 
el codigo mientras sea TRUE
en este ejemplo pusimos que i tiene que ser menor a 10
0 es menor a 10 entonces la condicion da TRUE y se ejecuta el codigo 
al ejecutarse se le suma una unidad a la variable i
vuelve al principio pero i = 1, la condicion da TRUE y se repite lo anterior
hasta que la condicion de FALSE

puedo usar el console.log o document.write(i + "<br>"); 
para mostrar las iteraciones
*/