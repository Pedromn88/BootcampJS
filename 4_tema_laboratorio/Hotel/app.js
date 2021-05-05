


var habitacion = () => document.getElementById("habitaciones").element.select;
var Ocuhabitacion = () => document.getElementById("hab-personas").element.select;


var checkBox = () => document.getElementById("spa");
var numNoches = () => document.getElementById("noches").value;
var numParking = () => document.getElementById("parking").value;
 
var botonClick = () => document.getElementById("name").addEventListener("keyup", submitName);

var habNoche
if (habitacion === "standar"){
    habNoche = numNoches * 100
} else if(habitacion === "junior"){
    habNoche = numNoches * 120
  } else if(habitacion === "suite"){
    habNoches = numNoches *150
}


var spa 
    if (spa === "True") {
    spa = 20
} else if (spa !== "True" ) {
    spa = 0
}

var tarifaNoche 
 if (Ocuhabitacion === "individual"){
     tarifaNoche = habNoche * 0.75
 } else if (Ocuhabitacion === "triple") {
     tarifaNoche = habNoche * 1.25
 }   else if (Ocuhabitacion === "doble") {
    tarifaNoche = habNoche * 1
} 

var parkingNoche = numParking * 10

var resultado = tarifaNoche + parkingNoche + Spa

document.getElementById("resultado-final").addEventListener("click", resultado);
