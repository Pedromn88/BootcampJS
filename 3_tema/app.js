const booking = { count: 5, price: 127.95};

let total = booking.count * booking.price; 
const discount = total > 500 ? total * 0.20 : 0;

console.log("total:" , total +"€");

if (total > 500 && discount > 0) {
    const discounted = total - discount;
    console.log("Total con descuento del 20:", discounted + "€")
}


const booking1 = { count: 3, price: 127.95}
const booking2 = { count: 5, price: 112.95}


//Reservas iguales
if (booking1.count == booking2.count && booking1.price == booking2.price) {

    console.log("Son iguales");
}    else {
        console.log("no son iguales")
    }

//Noches de reservas totales
console.log(booking1.count + booking2.count)

//Comparar las dos reservas y mostrar la que tiene más noches

const mayorNumeroNoches = 
booking1.count > booking2.count ? booking1.count : booking2.count;

booking1.count > booking2.count? console.log("booking1 tiene más noches"):console.log("booking2 tiene más noches");

//aumentar la estancia

console.log(booking1.count + 1)

//Calcular la diferencia de precio total entre dos reservas (incluidos descuentos).

let total1 = booking1.count * booking1.price
let total2 = booking2.count * booking2.price
let discount1 = total * 0.2;

if(total1 > 500) {
    total1 = total1 - discount;
}

if(total2 > 500) {
    total2 = total2 - discount;
}

console.log(total2 - total1)

//Comparar dos reservas para mostrar la de mayor precio total (incluidos descuentos).

const mayorprecio = 
booking1.count > booking2.count ? booking1.count : booking2.count;

booking1.count > booking2.count? console.log("booking1 es más caro"):console.log("booking2 es más caro");



//Reservas con descuentos

let reservasConDescuento = 0;

if (booking1.count * booking1.price > 500) {
    reservasConDescuento++;
}

if (booking2.count * booking2.price > 500) {
    reservasConDescuento++;
}

console.log("Reservas con Descuento: ", reservasConDescuento)

//mostrar todas con descuento

if (booking1.count == booking2.count >500 && booking1.price == booking2.price >500) {

    console.log("Todos con Descuentos");
}    else {
        console.log("No todos con descuentos")
    }



//Suma total

console.log (total1 + total2)