/* Codigo del alumno */

class Concesionario {
    constructor(nombre, direccion) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._automoviles = [];
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get direccion() {
        return this._direccion;
    }

    set direccion(direccion) {
        this._direccion = direccion;
    }

    get automoviles() {
        return this._automoviles;
    }

    agregarAutomovil(automovil) {
        this._automoviles.push(automovil);
    }
}

class Automovil {
    constructor(matricula, marca, modelo) {
        if (new.target === Automovil) {
            throw new Error("No se pueden instanciar automoviles genericos");
        }

        this._matricula = matricula;
        this._marca = marca;
        this._modelo = modelo;
    }

    get matricula() {
        return this._matricula;
    }

    set matricula(matricula) {
        this._matricula = matricula;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(modelo) {
        this._modelo = modelo;
    }
}

class Motocicleta extends Automovil {
    constructor(matricula, marca, modelo, portaequipajes, cilindrada) {
        super(matricula, marca, modelo);
        this._portaequipajes = portaequipajes;
        this._cilindrada = cilindrada;
    }

    get portaequipajes() {
        return this._portaequipajes;
    }

    set portaequipajes(portaequipajes) {
        this._portaequipajes = portaequipajes;
    }

    get cilindrada() {
        return this._cilindrada;
    }

    set cilindrada(cilindrada) {
        this._cilindrada = cilindrada;
    }

    toString() {
        return `Motocicleta: matricula ${this.matricula}, marca ${this.marca}, modelo ${this.modelo}, portaequipajes ${this.portaequipajes}, cilindrada ${this.cilindrada}`;
    }
}

class Coche extends Automovil {
    constructor(matricula, marca, modelo, potencia, numPuertas, capacidadMaletero) {
        super(matricula, marca, modelo);
        this._potencia = potencia;
        this._numPuertas = numPuertas;
        this._capacidadMaletero = capacidadMaletero;
    }

    get potencia() {
        return this._potencia;
    }

    set potencia(potencia) {
        this._potencia = potencia;
    }

    get numPuertas() {
        return this._numPuertas;
    }

    set numPuertas(numPuertas) {
        this._numPuertas = numPuertas;
    }

    get capacidadMaletero() {
        return this._capacidadMaletero;
    }

    set capacidadMaletero(capacidadMaletero) {
        this._capacidadMaletero = capacidadMaletero;
    }

    toString() {
        return `Coche: matricula ${this.matricula}, marca ${this.marca}, modelo ${this.modelo}, potencia ${this.potencia}, numero de puertas ${this.numPuertas}, capacidad del maletero ${this.capacidadMaletero}`;
    }
}

/* Fin codigo del alumno */

/* Probando el problema */

const moto1 = new Motocicleta("BI-1234-CC", "Kawasaki", "Ninja zx6r", false, 636);
const coche1 = new Coche("BI-1235-CC", "BMW", "325i", 192, 5, 370);
const moto2 = new Motocicleta("BI-1236-CC", "Honda", "CBR650r", false, 649);
const coche2 = new Coche("BI-1237-CC", "Audi", "A4", 170, 4, 390);
const coche3 = new Coche("BI-1238-CC", "Renault", "Clio", 80, 3, 350);

moto1.marca = "KAWASAKI";
moto1.modelo = "NINJA ZX6R";
moto1.portaequipajes = true;
moto1.cilindrada = 630;

coche3.marca = "RENAULT";
coche3.modelo = "CLIO";
coche3.potencia = 75;
coche3.numPuertas = 5;
coche3.capacidadMaletero = 345;

const concesionario1 = new Concesionario("Concesionario Zabalburu", "Itxaropen Kalea, 12, 48005 Bilbo, Bizkaia");
concesionario1.agregarAutomovil(moto1);
concesionario1.agregarAutomovil(coche1);
concesionario1.agregarAutomovil(moto2);
concesionario1.agregarAutomovil(coche2);
concesionario1.agregarAutomovil(coche3);

for (const automovil of concesionario1.automoviles) {
    document.write(automovil);
    document.write("<br>");
}

try {
    const cocheGenerico = new Automovil("BI-1239-CC", "Seat", "Ibiza");
}
catch (e) {
    document.write("<br>");
    document.write(e);
}
