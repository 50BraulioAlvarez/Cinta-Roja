var { Largometraje } = require("./largometraje");

//Subclase
class Pelicula extends Largometraje {
    constructor(titulo, duracion, director, genero) {
        super(titulo, duracion, director);
        this.precio = 50;
        this.genero = genero;
    }
}

var yaNoEstoyAqui = new Pelicula("Ya No Estoy Aquí", 180, "Desconocido", "Drama");
var sangerPorSangre = new Pelicula("Sangre por Sangre", 120, "Desconocido", "Acción");

module.exports = { yaNoEstoyAqui, sangerPorSangre }