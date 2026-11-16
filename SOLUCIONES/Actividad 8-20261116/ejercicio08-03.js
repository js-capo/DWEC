/* función constructora Persona*/
function Persona(dni, telefono) {
    this.dni = dni;
    this.telefono = telefono;
}
/*Funcion constructora Agenda que a su vez es un iterable. Cuando hacemos un iterable
necesitamos fundamentalmente la colección(map, array...) donde vamos a guardar los datos
y un contador que nos indica la posición en la que estamos*/
function Agenda() {
    // almacen de datos
    this.telefonosPorDNI = new Map();
    // variable que nos indica en que posicion al recorrer el iterable estamos
    this.posicion = 0;
    // En el mapa creado vamos metiendo la clave/valor DNI/teléfono
    this.agregarPersona = function(persona) {
        this.telefonosPorDNI.set(persona.dni, persona.telefono);
    };
    /*la agenda va a guardar datos y va a ser un iterador. Por ello, en este caso el this 
    indica que la agenda es el propio iterador de ella misma*/
    this[Symbol.iterator] = function() {
        return this;
    };
    /*next es una función que deben tener los iteradores para saber cual es el siguiente elemento .
    El next obliga a devolver el atributo donde para ver si se ha acabado o no y el value con el valor a devolver*/
    this.next = function() {
        if (this.posicion < this.telefonosPorDNI.size) {
            // transformamos el mapa a un array de entradas
            let entradas = Array.from(this.telefonosPorDNI.entries());
            // cogemos la entrada a mostrar
            let entradaAMostrar = entradas[this.posicion];
            this.posicion++;
            console.log("Todavia no he acabado de recorrer el iterable agenda");
            return { done:false, value: entradaAMostrar };
        }
        else {
            /* Acabará el for of cuando acabe de recorrer la agenda*/
            this.posicion = 0;
            console.log("Ya he acabado de recorrer el iterable agenda");
            return { done:true };
        }
    };
}

let agenda = new Agenda();
agenda.agregarPersona(new Persona('11111111', '998887766'));
agenda.agregarPersona(new Persona('22222222', '998887755'));
agenda.agregarPersona(new Persona('33333333', '998887744'));
agenda.agregarPersona(new Persona('44444444', '998887733'));
agenda.agregarPersona(new Persona('11111111', '998887722'));
/* primero se llama a agregarpersona 5 veces(la ultima sobreescribirá la primera , 
/* porque tiene clave repetida en el mapa). 
/* Posteriormente es cuando se realiza el for para recorrer el iterable*/
/* con el for of lo que hacemos es recorrer un iterable. En  nuestro caso el iterable es la agenda*/
for(const entradaAgenda of agenda) {
    // llama intername js a la funcion next
    console.log(entradaAgenda);
}
