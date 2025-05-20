const saludoPersonalizado = (nombre, edad) => `Hola me llamo, ${nombre} y tengo ${edad} años`;

console.log(saludoPersonalizado("Andrés", 22));

/*recibe dos parámetros (nombre y edad) y retorna la cadena en el formato solicitado:
no es necesario un return declarado ya que se utiliza la función flecha que no requiere return
*/