class Largometraje {
    constructor(titulo, duracion, director) {
        this.titulo = titulo;
        this.duracion = duracion + "minutos";
        this.director = director;
    }
}

var ejemplo = new Largometraje("Ejemplo", 120, "Desconocido");
console.log(ejemplo)

// Destructuracion de objeto
var { titulo, duracion, director } = ejemplo;
console.log(titulo);
console.log(duracion);
console.log(director);

module.exports = { Largometraje };
