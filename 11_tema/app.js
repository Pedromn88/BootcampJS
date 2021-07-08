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
  ]


  class Habitaciones {
      constructor () {
          this._reservas = [];
          this._subtotal = 0;
          this._total = 0;
          this.IVA = 1.21;
      }
  }

  class touroperador {
    constructor () {
        this.precioHabitacion = 100;
        this.descuento = 0.15
    }
}

calcularPrecioHabitacion(tipoHabitacion) {
    switch(tipoHabitacion){
        case "standard":
            return 100;
        case "suite": 
        return 150;
    } 
}


  suplementoPersonaAdicional(personas){
      return (personas > 1 ? --personas * 40 : 0)
  }

  calculaSubtotal () {
        this._subtotal = reservas.reduce((acumulado,
            {
             tipoHabitacion,
             pax,
             noches   
            }) =>
            acumulado + ((this.calcularPrecioHabitacion(tipoHabitacion)* noches) + this.suplementoPersonaAdicional(pax)),0)
        
    }

    calculaTotal() {

        this._subtotal = reservas.reduce ((acumulado,
            {
             tipoHabitacion,
             pax,
             noches   
            }) =>
            acumulado + ((((this.calcularPrecioHabitacion(tipoHabitacion)* noches) + this.suplementoPersonaAdicional(pax))).toFixed(2) * this.IVA), 0)
    
        return this._total = this._subtotal * this.IVA;
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


    class touroperador extends Habitaciones {
        constructor(){
            super();
            this.precioHabitacion = 100;
            this.tipoDescuento = 0.15
        }
    }

    calculaSubtotal () {
        this._subtotal = reservas.reduce((acumulado,
            {
             pax,
             noches   
            }) =>
            acumulado + ((this.precioHabitacion * noches) + this.suplementoPersonaAdicional(pax)),0)
        
    }

    calculatotal () {
        this._total = reservas.reduce((acumulado,
            {
             pax,
             noches   
            }) =>
            acumulado + (((this.precioHabitacion * noches) + this.suplementoPersonaAdicional(pax)).this.IVA),0)
        
    }


    const reserva = new Habitaciones();
    reserva.reservas = reservas;
    console.log("Subtotal para un particular: ", reserva.subtotal)
    console.log("total para un partircular: ", reserva.total)


    const reserva = new touroperador();
    reservatouroperador.reservas = reservas;
    console.log("Subtotal para un particular: ", reservatouroperador.subtotal + "€");
    console.log("total para un partircular: ", reservatouroperador.total + "€");


