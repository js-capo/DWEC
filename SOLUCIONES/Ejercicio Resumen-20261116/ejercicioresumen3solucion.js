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


/* Solucion */

const agenda = new Agenda("MiAgenda");

function nuevoCompaniero(dni, nom, ape, email, nivel_amistad) {
  
  agenda.agregarNuevoContacto(dni, new Companiero(nom, ape, email, nivel_amistad));

  let mensaje = "";
  for (const registro of agenda) {
    mensaje = mensaje + `DNI: ${registro.dni} Detalle: ${registro.contacto} \r\n`;
  }

  alert(mensaje);
}


