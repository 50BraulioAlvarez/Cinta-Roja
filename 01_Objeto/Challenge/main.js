var myPenguin= {
    saludo: "Hola mi nombre es",
    nombre: "Chilly Willy",
    origen: "Chilly Willy",
    salsudar: function(){
        return this.saludo + this.nombre
    }
}
   myPenguin.puedevolar = false
   myPenguin.graznar = function() {
       return "kaww kaww!"
   }

