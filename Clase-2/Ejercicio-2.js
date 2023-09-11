class TicketManager {

    //clase privada
    #precioBaseGanancia = 0.15;

    constructor(){
        this.eventos= [];
    }

    getEventos = () =>{
        return this.eventos
    }

    agregarEventos =(nombre, lugar, precio, capacidad = 50, fecha = new Date().toDateString() ) =>{
        const evento = {
            nombre,
            lugar,
            precio: precio + precio * this.#precioBaseGanancia,
            capacidad,
            fecha,
            participantes:[]
        }
        //Generamos un id
        if (this.eventos.length === 0){
            evento.id = 1;
            //generamos un nuevo id
        } else {
            evento.id = this.eventos[this.eventos.length - 1].id + 1;
        }
            this.eventos.push(evento)
    }
}

const manejadorEventos = new TicketManager();

manejadorEventos.agregarEventos('evento prueba1', 'argentinta', 230, 300)
manejadorEventos.agregarEventos('evento prueba2', 'chile', 500, 3000)
manejadorEventos.agregarEventos('evento prueba3', 'madrid', 20)
console.log(manejadorEventos.getEventos());