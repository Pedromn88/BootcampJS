var Hotel = {
    name: "",
    location: "",
}

Hotel.name = prompt("Introduce el nombre del Hotel");

//var concatNameHotel = "Hotel " + nameHotel + " es un hotel excelente";

document.getElementById("hotel-name").innerHTML = "Hotel " + Hotel.name ;

Hotel.location = prompt ("Introduce la ubicación del Hotel");

document.getElementById("hotel-location").innerHTML = Hotel.location;

