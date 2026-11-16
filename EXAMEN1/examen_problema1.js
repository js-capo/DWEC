/* Codigo del alumno */

class Catalogo {
    constructor(nombre) {
        this._nombre = nombre;
        this._productos = [];
        this._productos.set = (codigo, producto) => {
            this._productos.push({ codigo, producto });
            return this._productos;
        };
    }

    agregarNuevoProducto(codigo, producto) {
      this._productos.set(codigo, producto);
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get productos() {
        return this._productos;
    }

    set productos(productos) {
        this._productos = productos;
    }

}

class Producto {
    constructor(nombre, marca, precio) {

        // Bloque if para convertir a la clase Producto en clase abstracta (que no se pueda instanciar)
        if (this.constructor === Producto) {
            throw new Error("¡La clase 'Producto' es abstracta! ¡No se pueden instanciar productos genéricos!");
        }

        this._nombre = nombre;
        this._marca = marca;
        this._precio = precio;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }
}

class Electrodomestico extends Producto {
    constructor(nombre, marca, precio, potencia, garantia) {

        super(nombre, marca, precio);

        this._potencia = potencia;
        this._garantia = garantia;
    }

    get potencia() {
        return this._potencia;
    }

    set potencia(potencia) {
        this._potencia = potencia;
    }

    get garantia() {
        return this._garantia;
    }

    set garantia(garantia) {
        this._garantia = garantia;
    }

    // Sobreescribimos el método toString() de la clase Electrodomestico
    toString() {
        return `Nombre: ${this.nombre}, Marca: ${this.marca}, Precio: ${this.precio}, Potencia: ${this.potencia}, Garantía: ${this.garantia}`;
    }
}

class Mueble extends Producto {
    constructor(nombre, marca, precio, peso) {

        super(nombre, marca, precio);

        this._peso = peso;
    }

    get peso() {
        return this._peso;
    }

    set peso(peso) {
        this._peso = peso;
    }

    // Sobreescribimos el método toString() de la clase Mueble
    toString() {
        return `Nombre: ${this.nombre}, Marca: ${this.marca}, Precio: ${this.precio}, Peso: ${this.peso}`;
    }
}

/* Fin del codigo del alumno */

/* PRUEBA: descomentar al terminar. No modificar su contenido. */

const e1 = new Electrodomestico("Lavadora", "Bosch", 499, 2000, 24);
const e2 = new Electrodomestico("Microondas", "Samsung", 129, 800, 24);
const e3 = new Electrodomestico("Aspiradora", "Rowenta", 159, 750, 36);

e1.nombre = "Lavadora Eco";
e1.marca = "Balay";
e1.precio = 459;
e1.potencia = 1800;
e1.garantia = 36;

const m1 = new Mueble("Mesa", "Ikea", 99, 15);
const m2 = new Mueble("Estanteria", "Kave Home", 149, 20);

m1.nombre = "Mesa de comedor";
m1.marca = "Conforama";
m1.precio = 119;
m1.peso = 18;

const catalogo = new Catalogo("MiCatalogo");
catalogo.nombre = "Catalogo de la tienda";
catalogo.agregarNuevoProducto("ELE-001", e1);
catalogo.agregarNuevoProducto("ELE-002", e2);
catalogo.agregarNuevoProducto("ELE-003", e3);
catalogo.agregarNuevoProducto("MUE-001", m1);
catalogo.agregarNuevoProducto("MUE-002", m2);

document.write(`Catalogo: ${catalogo.nombre}<br><br>`);
for (let posicion = 0; posicion < catalogo.productos.length; posicion++) {
  const registro = catalogo.productos[posicion];
  document.write("Producto<br>");
  document.write(`Codigo: ${registro.codigo} Detalle: ${registro.producto}<br><br>`);
}

try {
  new Producto("Producto generico", "Marca generica", 10);
  document.write("ERROR: se ha podido instanciar Producto.");
} catch (error) {
  document.write(error.toString());
}

