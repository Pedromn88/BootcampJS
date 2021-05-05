const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
    ];
/*//Imprimir Lista
    for (i = 0 ; i < carrito.length; i++)
    imprimir(carrito[i])
    

    function imprimir (producto) {
        console.log(producto.id)
        console.log(producto.name)
        console.log(producto.price)
        console.log(producto.count)
        console.log(producto.premium)
    }*/


/*//Eliminar un archivo
var indice
for (i=0; i < carrito.length; i++)
if (carrito[i].id === 54657) {
    indice = i;
}
 

 carrito.slice(indice, 1)*/
 
 
 //Coste total Carrito
/*var coste = 0
for (i=0; i < carrito.length; i++) {
 coste += carrito[i].price * carrito [i].count
}
   console.log(coste)*/


var listaPremium = [];

for (i = 0; i < carrito.length; i++) {
    if (carrito[i].premium == true) {
        listaPremium.push(carrito[i])
    }
}

console.log(listaPremium)