
/*var importe=prompt("Indica una cantidad: ");
 
document.write("<p>El cambio de la cantidad "+importe+"</p>");
 
// indicamos todas las monedas posibles
var monedas=Array(500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.20, 0.10, 0.05, 0.02, 0.01);
 
// creamos un array con la misma cantidad de monedas
// Este array contendra las monedas a devolver
var cambio=Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
 
// Recorremos todas las monedas
for(var i=0; i<monedas.length; i++)
{
 
    // Si el importe actual, es superior a la moneda
    if(importe>=monedas[i])
    {
 
        // obtenemos cantidad de monedas
        cambio[i]=parseInt(importe/monedas[i]);
 
        // actualizamos el valor del importe que nos queda por didivir
        importe=(importe-(cambio[i]*monedas[i]));
    }
}
 
// Bucle para mostrar el resultado
for(i=0; i<monedas.length; i++)
{
    if(cambio[i]>0)
    {
        if(monedas[i]>=5)
            document.write("Hay: "+cambio[i]+" billetes de: "+monedas[i]+" &euro;<br>");
        else
            document.write("Hay: "+cambio[i]+" monedas de: "+monedas[i]+" &euro;<br>");
    }
}
}*/


var importe = () => document.getElementById("input-number1").value;
var entregado = () => document.getElementById("input-number2").value;

var monedas=[200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.20, 0.10, 0.05, 0.02, 0.01];



var cambioBilletes = function() {
    var resta = () => entregado() - importe();
for(var i=0; i<monedas.length; i++)
var cambio200 = 0
cambio200 = resta / monedas[0]
if (cambio200 >= 1) return cambio200 + "Billetes de 200";
/*var cambio100 = resta / 100
if (cambio100 >= 1) return cambio100 + "Billetes de 100";
var cambio50 = resta/ 50
if (cambio50 >= 1) return cambio50 + "Billetes de 50";
var cambio20 = resta / 20
if (cambio20 >= 1) return cambio20 + "Billetes de 20";
var cambio10 = resta / 10
if (cambio10 >= 1) return cambio10 + "Billetes de 10";
var cambio5 = resta / 5
if (cambio5 >= 1) return cambio5 + "Billetes de 5";*/
}


var showcambio = () =>
document.getElementById("result").innerText = cambioBilletes();

document.getElementById("btn").addEventListener("click", showcambio);









