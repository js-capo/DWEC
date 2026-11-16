class Agenda {

  constructor(nombre) {
    this._nombre = nombre;
    this._contactos = new Map();
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get contactos() {
    return this._contactos;
  }

  agregarNuevoContacto(dni, persona) {
    this._contactos.set(dni, persona);
  }

  [Symbol.iterator]() {
    let mis_contactos = this._contactos;
    let posicion = 0;

    return {
      next: function () {
        const entradas = Array.from(mis_contactos.entries());
        if (posicion < entradas.length) {
          const entradaAMostrar = { dni: entradas[posicion][0], contacto: entradas[posicion][1] };
          posicion = posicion + 1;
          return {
            value: entradaAMostrar,
            done: false
          }
        }
        else {
          posicion = 0;
          return { done: true }
        }
      }
    }
  }

}


class Persona {

  constructor(nombre, apellidos, email) {
    if (this.constructor === Persona) {
      throw new Error("No se puede instanciar la clase Persona");
    }
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._email = email;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellidos() {
    return this._apellidos;
  }

  set apellidos(apellidos) {
    this._apellidos = apellidos;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }

}


class Profesor extends Persona {

  constructor(nombre, apellidos, email, nivel_tecnico, nivel_explicaciones) {
    super(nombre, apellidos, email);
    this._nivel_tecnico = nivel_tecnico;
    this._nivel_explicaciones = nivel_explicaciones;
  }

  get nivel_tecnico() {
    return this._nivel_tecnico;
  }

  set nivel_tecnico(nt) {
    this._nivel_tecnico = nt;
  }

  get nivel_explicaciones() {
    return this._nivel_explicaciones;
  }

  set nivel_explicaciones(ne) {
    this._nivel_explicaciones = ne;
  }

  toString() {
    return `Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, Email: ${this.email}, Nivel Tecnico: ${this.nivel_tecnico}, Nivel Explicaciones: ${this.nivel_explicaciones}`;
  }
}


class Companiero extends Persona {

  constructor(nombre, apellidos, email, nivel_amistad) {
    super(nombre, apellidos, email);
    this._nivel_amistad = nivel_amistad;
  }

  get nivel_amistad() {
    return this._nivel_amistad;
  }

  set nivel_amistad(na) {
    this._nivel_amistad = na;
  }

  toString() {
    return `Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, Email: ${this.email}, Nivel Amistado: ${this.nivel_amistad}`;
  }
}


/* Probando el problema */
const p1 = new Profesor("NombreProfesor1", "ApellidosProfesor1", "EmailProfesor1", 8, 7);
const p2 = new Profesor("NombreProfesor2", "ApellidosProfesor2", "EmailProfesor2", 9, 9);
const p3 = new Profesor("NombreProfesor3", "ApellidosProfesor3", "EmailProfesor3", 7, 9);

p1.nombre = "NombreProf1";
p1.apellidos = "ApellidosProf1";
p1.email = "EmailProf1";
p1.nivel_tecnico = 6;
p1.nivel_explicaciones = 7;

const c1 = new Companiero("NombreCompaniero1", "ApellidosCompaniero1", "EmailCompaniero1", 7);
const c2 = new Companiero("NombreCompaniero2", "ApellidosCompaniero2", "EmailCompaniero2", 8);

c1.nombre = "NombreCompi1";
c1.apellidos = "ApellidosCompi1";
c1.email = "EmailCompi1";
c1.nivel_amistad = 9;

const agenda = new Agenda("MiAgenda");
agenda.agregarNuevoContacto("00011100A", p1);
agenda.agregarNuevoContacto("00022200B", p2);
agenda.agregarNuevoContacto("00033300C", p3);
agenda.agregarNuevoContacto("00044400D", c1);
agenda.agregarNuevoContacto("00055500E", c2);

for (const registro of agenda) {
  document.write("Contacto <br>");
  document.write(`DNI: ${registro.dni} Detalle: ${registro.contacto}`);
  document.write("<br>");
  document.write("<br>")
}

try {
  new Persona("NombrePersonaGenerica", "ApellidosPersonaGenerica", "EmailPersonaGenerica");
}
catch (e) {
  document.write("<br>")
  document.write(e);
}
