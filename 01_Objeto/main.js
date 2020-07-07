//*Funcion
//*Una funcion que detemrine el area de un trapecio

//*Trapecio
//*a = (B+b)/2*h

function traprecio(B, b, h) {
  var area = ((B * b) / 2) * h
  return area;
}

//*Objetos
var perro = {
  //llave=valor
  nombre: "ayudante de santa",
  edad: 30,
  vivo: true,
  raza: "galgo",
  juguetes: ["pelota", "peluche","hueso"],
  familia: {
    padre:"Homero",
    madre:"Marge",
    hermano:"Bart",
    hermana:"Lissa"
  },
  //*Metodos
  juega: function(juguete) {
    //*console.log(this.nombre)
    if(juguete <4 && juguete >=0){
      return this.nombre + "está jugando con" + this.juguetes[juguete]
    }else {
    return "El perro no encontró el juguete";
    } 
  }
}
//*console.log(perro);
//*console.log(perro.juguetes [0]);
//*console.log(perro.familia.padre);
console.log(perro.juega(1))