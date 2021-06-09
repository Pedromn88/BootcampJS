var importeCompra = () => document.getElementById("input-number1").value;
var entregado = () => document.getElementById("input-number2").value;
 
// indicamos todas las monedas posibles
var monedas=Array(200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.20, 0.10, 0.05, 0.02, 0.01);

var cambio=Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

var cambioBilletes = function() {
var importe= entregado () - importeCompra () 
for(var i=0; i<monedas.length; i++)
{
    if(importe>=monedas[i])
    {
        cambio[i]=parseInt(importe/monedas[i]);
        importe=(importe-(cambio[i]*monedas[i]));
    }
}
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
}


var showcambio = () =>
document.getElementById("result").innerText = cambioBilletes();

document.getElementById("btn").addEventListener("click", showcambio);


