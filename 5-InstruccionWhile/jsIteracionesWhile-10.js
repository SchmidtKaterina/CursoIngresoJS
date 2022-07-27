/*
Schmidt, Katerina DIV Z
Ejercicio WHILE 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN*/


/* Schmidt Katerina DIV Z
EJ adicianal WHILE

Se ingresan dos notas entre 1 y 10, el nombre, el genero ("M", "F", "NB") 
y asistencias sobre un total de 20 clases de 40 estudiantes.

Se pide: 
1. El genero del estudiante con mayor promedio de notas.
2. El nombre de la estudiante que más faltó (solo puede ser una).
	inasistencias = 20 - asistencias
	busco el maximo
		o
	busco minimo de asistencias

3. la cantidad de estudiantes de genero masculino o no binario, 
que hayan asistido a un total de entre 15 y 20 clases.
4. promedio de asistencia de todos los estudiantes.
5. Porcentaje de estudiantes de cada género.

*/
function mostrar()
{
	var nota1;
	var nota2;
	var genero;
	var nombre;
	var asistencias;
	var i;

	//Punto 1
	var promedio;
	var maximoPromedio;
	var generoDelMaximoPromedio;

	//Punto 2
	var minimoAsistencias;
	var nombreDelaQueMasFalto;
	var flagFemeninaQueMasFalto;

	//Punto 3
	var contadorAsistencia;

	//Punto 4
	var sumaAsistencias;
	var promedioAsistencias;

	//Punto 5
	var contadorF;
	var contadorM;
	var contadorNB;
	var porcentajeF;
	var porcentajeM;
	var porcentajeNB;

	i=0;
	flagFemeninaQueMasFalto = false;
	contadorAsistencia=0;
	sumaAsistencias=0;
	contadorF=0;
	contadorM=0;
	contadorNB;


	while(i<40)
	{
		nota1 = promp("Ingrese la primer nota.");
		nota1 = parseInt(nota1);

		while(nota1<1 || nota1>10)
		{
			nota1 = promp("Error. Reingrese la primer nota.");
			nota1 = parseInt(nota1);
		}

		nota2 = promp("Ingrese la primer nota.");
		nota2 = parseInt(nota2);

		while(nota2<1 || nota2>10)
		{
			nota2 = promp("Error. Reingrese la primer nota.");
			nota2 = parseInt(nota2);
		}

		nombre = prompt("Ingrese su nombre.");

		genero = promp("Ingrese su genero.");

			while(genero!="M" && genero!="F" && genero!="NB")
			{
				genero = promp("Error. Reingrese genero.");
			}

			asistencias = promp("Ingrese el total de asistencias.");
			asistencias = parseInt(asistencias);

			while(asistencias<0 || asistencias>20)
			{
				asistencias = promp("Error. Reingrese el total de asistencias.");
				asistencias = parseInt(asistencias);
			}

			//1. El genero del estudiante con mayor promedio de notas.
			promedio = (nota1+nota2)/2;
			if(promedio>maximoPromedio || i==0)
			{
				maximoPromedio = promedio;
				generoDelMaximoPromedio = genero;
			}

			//2. El nombre de la estudiante que más faltó o que menos asistio (solo puede ser una).
			if(genero=="F")
			{
				if(asistencias<minimoAsistencias || flagFemeninaQueMasFalto==false)
				{
					flagFemeninaQueMasFalto = true;
					minimoAsistencias = asistencias;
					nombreDelaQueMasFalto = nombre;
				}
			}

			//3. la cantidad de estudiantes de genero masculino o no binario, 
			//que hayan asistido a un total de entre 15 y 20 clases.
			if((genero=="M" || genero=="NB") && (asistencias>14 && asistencias<21))
			{
				contadorAsistencia++;
			}
			//4. promedio de asistencia de todos los estudiantes.
			sumaAsistencias = sumaAsistencias + asistencias;

			//5. Porcentaje de estudiantes de cada género.
			switch(genero)
			{
				case "M":
					contadorM=contadorM+1;
				break;
				case "F":
					contadorF++;
				break;
				case "NB":
					contadorNB++;
				break;
			}

		console.log(nombre+"--"=promedio"--"+genero+"--"+asistencias+"--");

		i++;
	}

	//4. promedio de asistencia de todos los estudiantes.
	promedioAsistencias = sumaAsistencias/i;

	//5. Porcentaje de estudiantes de cada género.
	porcentajeF = (contadorF*100)/i;
	porcentajeM = (contadorM*100)/i;
	porcentajeNB = (contadorNB*100)/i;

	//Salidas
	//Punto 1
	document.write("El genero del maximo promedio es: "+maximoPromedio+"<br>");
	//Punto 2
	if(flagFemeninaQueMasFalto==true)
	{
		document.write("El nombre de la estudiante que mas falto es: "+nombreDelaQueMasFalto+"<br>");

	}
	else
	{
		document.write("No hubo estudiantes femeninas"+"<br>");

	}
	//Punto 3
	document.write("Cantidad de M o NB entre 15 y 20 asistencias: "+contadorAsistencia+"<br>");
	//Punto 4
	document.write("El promedio de asistencias: "+promedioAsistencias+"<br>");
	//Punto 5
	document.write("El porcentaje es femenino es : "+porcentajeF+"%<br>");
	document.write("El porcentaje es masculino es : "+porcentajeM+"%<br>");
	document.write("El porcentaje es no binario es : "+porcentajeNB+"%<br>");

}



//la bandera se necesita si es el primer ingreso de datos(generalmente) 
//sino se puede usar la variable de control(i)