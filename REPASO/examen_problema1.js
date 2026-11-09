/* Codigo del alumno */

class Concesionario {
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.automoviles = []; // Un array de automóviles, VACÍO
    }

    agregarAutomovil(automovil) {
        this.automoviles.push(automovil); // .push sirve para añadir un nuevo elemento al array
    }

    // Getters
    getNombre() {
        return this.nombre;
    }

    getDireccion() {
        return this.direccion;
    }

    getAutomoviles() {
        return this.automoviles;
    }

    // Setters: SIN EL MÉTODO SET DEL ARRAY AUTOMÓVILES
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setDireccion(direccion) {
        this.direccion = direccion;
    }

    toString() { // Sobreescribimos el método toString
        return `Nombre: ${this.nombre}, Dirección: ${this.direccion}`;
    }
}

class Automovil {
    constructor(matricula, marca, modelo) {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;

        if (new.target === Automovil) { // Este bloque if sirve para poner la clase como abstracta, como si en java hiciéramos: public abstract class ejemplo()
            throw new Error("¡La clase Automóvil es abstracta! ¡No se puede instanciar!");
        }
    }

    // Getters
    getMatricula() {
        return this.matricula;
    }

    getMarca() {
        return this.marca;
    }

    getModelo() {
        return this.modelo;
    }

    // Setters
    setMatricula(matricula) {
        this.matricula = matricula;
    }

    setMarca(marca) {
        this.marca = marca;
    }

    setModelo(modelo) {
        this.modelo = modelo;
    }

    toString() { // Sobreescribimos el método toString
        return `Matrícula: ${this.matricula}, Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
}

class Coche extends Automovil {
    constructor(matricula, marca, modelo, potencia, numPuertas, capacidadMaletero) {
        super(matricula, marca, modelo); // hereda de la clase Automovil, super() es para que llame al padre

        this.potencia = potencia;
        this.numPuertas = numPuertas;
        this.capacidadMaletero = capacidadMaletero;
    }

    // Getters
    getPotencia() {
        return this.potencia;
    }

    getNumPuertas() {
        return this.numPuertas;
    }

    getCapacidadMaletero() {
        return this.capacidadMaletero;
    }

    // Setters
    setPotencia(potencia) {
        this.potencia = potencia;
    }

    setNumPuertas(numPuertas) {
        this.numPuertas = numPuertas;
    }

    setCapacidadMaletero(capacidadMaletero) {
        this.capacidadMaletero = capacidadMaletero;
    }

    toString() { // Sobreescribimos el método toString
        return super.toString() +
           ` Potencia: ${this.potencia}, Puertas: ${this.numPuertas}, Capacidad del Maletero: ${this.capacidadMaletero}`; // Con super(), cogemos el método toString de la clase padre para los campos heredados
    }
}

class Motocicleta extends Automovil {
    constructor(matricula, marca, modelo, portaequipajes, cilindrada) {
        super(matricula, marca, modelo); // hereda de la clase Automovil, super() es para que llame al padre

        this.portaequipajes = portaequipajes;
        this.cilindrada = cilindrada;
    }

    // Getters
    getPortaequipajes() {
        return this.portaequipajes;
    }

    getCilindrada() {
        return this.cilindrada;
    }

    // Setters
    setPortaequipajes(portaequipajes) {
        this.portaequipajes = portaequipajes;
    }

    setCilindrada(cilindrada) {
        this.cilindrada = cilindrada;
    }

    toString() { // Sobreescribimos el método toString
        return super.toString() + 
           ` Portaequipajes: ${this.portaequipajes}, Cilindrada: ${this.cilindrada}`;
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

for(const automovil of concesionario1.automoviles) {
    document.write(automovil);
    document.write("<br>");
}

try {
    const cocheGenerico = new Automovil("BI-1239-CC", "Seat", "Ibiza");
}
catch(e) {
    document.write("<br>")
(automovil);
    document.write("<br>");
}

try {
    const cocheGenerico = new Automovil("BI-1239-CC", "Seat", "Ibiza");
}
catch (e) {
    document.write("<br>");
    document.write(e);
}
