// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];



var container = document.getElementById("product-list-container");

var createProduct = product => {
  var input = document.createElement("input");
  input.setAttribute("type", "number");
  input.addEventListener("change", event => product.units = event.target.valueAsNumber);
  container.appendChild(input);
}

var showProducts = productList => {
  for (var product of productList) {
    var description = document.createElement("h5");
    description.innerText = product.description;
    container.appendChild(description);
    createProduct(product);
  }
}

showProducts(products);

document.getElementById("btn").addEventListener("click", () => console.log(products));



var total = function() {
    var subtotal = 0
    for (i=0; i < products.length; i++) {
     subtotal += products[i].price * products[i].units
    }
    var impuestos = 0 
    for (i=0; i < products.length; i++)
    if (products.tax === LOWER_TYPE) {
      impuestos += subtotal * 0.04
    }else if (products.tax == REGULAR_TYPE){
     impuestos += products[i].tax * products[i].units * 0.21}
     else if(products.tax == EXEMPT_TYPE) 
    {impuestos += products[i].tax * products[i].units * 0
    } 
   var sumatorio = subtotal + impuestos

   return sumatorio
  }
   

var total1 = () => document.getElementById("subtotal").innerText = total (products);

document.getElementById("btn").addEventListener("click", total1);


