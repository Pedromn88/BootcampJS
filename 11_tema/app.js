const reservas = [
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 3
    },
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 4
    },
    {
      tipoHabitacion: "suite",
      pax: 2,
      noches: 1
    }
  ];


  class Habitaciones {
      constructor () {
          this._reservas = [];
          this._subtotal = 0
          this._total = 0
          this.IVA = 0.21;
      }
  }

calcularPrecioHabitacion(tipoHabitacion) {
    switch(tipoHabitacion){
        case "standard":
            return 100;
        case "suite" : 
        return 150;
    } 
}


  suplementoPersonaAdicional(personas){
      return (personas > 1 ? --personas * 40 : 0)
  }

  calculaSubtotal () {
        this._subtotal = reservas.reduce {(acumulado,
            {
             tipoHabitacion,
             pax,
             noches   
            }) =>
            acumulado + ((this.calcularPrecioHabitacion(tipoHabitacion)* noches) + this.suplementoPersonaAdicional (personas))
    
        
        }
    }

    calculaTotal (){

    }
    
    get subtotal() {
        return this._subtotal
    }

    get total() {
        return this._total
    }

    set reservas(reservas){
        this._reservas = reservas;
        this.calculaSubtotal();
        this.calculaTotal()
    }

    const reserva = new Habitaciones();
    reserva.reservas = reservas;
    console.log("Subtotal: ", reserva.subtotal)
    console.log("total: ", reserva.total)


