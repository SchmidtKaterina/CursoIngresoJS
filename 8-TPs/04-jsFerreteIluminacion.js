/*
Schmidt, Katerina DIV Z
Tp 04	
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta 
al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos 
brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparas;
    var marcaLampara;
    var descuento = 0;
    var descuentoFinal;
    var precioTotal;
    var precioConDescuento;
    var ingresosBrutos;
    var precioConIIBB;

    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marcaLampara = document.getElementById("Marca").value;

    precioTotal = cantidadLamparas * 35;
    precioTotal = parseFloat(precioTotal);

    if(cantidadLamparas >= 6)
    {
        descuento = 50;
        console.log("Tiene un descuento del 50%");
    }
    else
    {
        if(cantidadLamparas == 5)
        {
            if(marcaLampara == "ArgentinaLuz")
            {
               descuento = 40;
               console.log("Tiene un descuento del 40%"); 
            }
            else
            {
                descuento = 30;
                console.log("Tiene un descuento del 30%");
            }
        }
        else
        {
            if(cantidadLamparas == 4)
            {
                if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
                {
                    descuento = 25;
                    console.log("Tiene un descuento del 25%")
                }
                else
                {
                    descuento = 20;
                    console.log("Tiene un descuento del 20%");
                }
            }
            else
            {
                if(cantidadLamparas == 3)
                {
                    if(marcaLampara == "ArgentinaLuz")
                    {
                        descuento = 15;
                        console.log("Tiene un descuento del 15%");
                    }
                    else
                    {
                        if(marcaLampara == "FelipeLamparas")
                        {
                            descuento = 10;
                            console.log("Tiene un descuento del 10%");
                        }
                        else
                        {
                            descuento = 5;
                            console.log("Tiene un descuento del 5%");
                        }
                    }
                }
            }
        }
    }

    descuentoFinal = precioTotal * descuento / 100;

    precioConDescuento = precioTotal - descuentoFinal;
    precioConDescuento = parseFloat(precioConDescuento);

    txtIdprecioDescuento.value = precioConDescuento;
    
    ingresosBrutos = precioConDescuento * 10 / 100;

    precioConIIBB = precioConDescuento + ingresosBrutos;
    precioConIIBB = parseFloat(precioConIIBB);

    if(precioConDescuento > "120")
    {
        alert("Usted pago " + ingresosBrutos + " de Ingresos Brutos.")
    }

    txtIdprecioDescuento.value = precioConIIBB;
}


