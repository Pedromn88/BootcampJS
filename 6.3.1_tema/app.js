// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];
  
  // Datos
  var myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    },
    {
      name: "Esther",
      availability: new Array(8).fill(true)
    },
    {
      name: "Marcos",
      availability: new Array(8).fill(true)
    },
  ];
  



for (var i = 0; i < myTeam.length; i++) {
  horario (myTeam[i])
}


function horario (empleado){
  console.log(empleado.name)
  for (var i = 0; i < WORK_HOURS.length; i++) {
  var horarioRandom = (a, b) => Math.round(Math.random()) ? a : b;
  console.log(WORK_HOURS[i]); 
  console.log(horarioRandom("si", "no"))
  }
 }

 function buscarElemento(horarioRandom, elemento) {
  for(let i = 0; i < horarioRandom.length; i++) {
      if (horarioRandom[i] === elemento) {
          return i;
      }
  }
  return -1;
}

console.log(buscarElemento, si)