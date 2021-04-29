const product = { count: 3, price: 12.55, type: "ropa" };

let total; 


if (product.count > 0) {
     total = product.count * product.price
} else {
    total = 0
}

console.log(total)

let tipoIVA = 0.21

switch (product.type) {

    case "alimentacion": 
        tipoIVA = 0.10;
    break;

    case "libro":
        tipoIVA = 0.04;
    break;
}

const IVAtotal = total * tipoIVA
console.log (IVAtotal)
console.log (total + IVAtotal)






console.log(empleado.bruto);