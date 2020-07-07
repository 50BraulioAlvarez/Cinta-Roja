var { Largometraje } = require("./largometraje");

class Documental extends Largometraje {
    constructor(titulo, duracion, director, narrador, patrocinador) {
        super(titulo, duracion, director, narrador, patrocinador)
        this.precio = 80;
        this.narrador;
        this.patrocinador = patrocinador;
    }
}

var nuestroPlaneta = new Documental("Nuestro Planeta", 60, "Tommy", "Jaime Flores");
var elSembrador = new Documental("El sembrador", 65, "Ivette Mendoza", "Luis Miguel");

console.log("Se ejecutó Documental.js");
module.exports = { nuestroPlaneta, elSembrador };