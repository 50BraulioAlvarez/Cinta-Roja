//*Clase padre => Súper clase
class Mascota {
    constructor(nombre, patas) {
        this.nombre = nombre;
        this.patas = patas;
        this.cerebro = true;
    }

    alimentarse() {
        return this.nombre + "se está alimentando."
    }
}

//Subclase de Mascota
class Perro extends Mascota {
    //*Metodo Constructor
    constructor(nombre, patas, cola, raza) {
        //*Super Constructor
        super(nombre, patas);
        this.ladra = true;
        this.cola = cola;
        this.raza = raza;
    }
    truco() {
        return this.nombre + " está dando la pata";
    }
}

//*Subclase de Mascota
class Serpiente extends Mascota {
    constructor(nombre, color, veneno) {
        super(nombre, 0)
        this.color = color;
        this.veneno = false;
    }

    morder() {
        return this.nombre + " te mordió";
    }

    mudarPiel() {
        return this.nombre + " ha mudado de piel" + this.color;
    }
}

var perro = new Perro("meteoro", 4);
var lolo = new Mascota("Lolo", 4);
var snippet = new Serpiente("Snippet", "negra");



console.log(perro.nombre);
console.log(perro.alimentarse());
console.log(snippet)