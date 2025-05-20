let nombre = "Armando";
const edad = 25;

nombre = "Ana Maria";

const saludo = `Hola, ${nombre}. Tienes ${edad} años`;

console.log(saludo);


/* El ejericio consta de varios errores detectados, tales como el let en ves de var para el nombre,
la const para la constante de la edad ya que esta no va a cambiar
el uso de templates para las literales
el codigo mal escrito es el siguiente en el que vemos los cambios totales
var nombre ="Armando";
var edad =25;

nombre ="Ana Maria";

var saludo = "Hola, "+nombre+". Tienes"+edad+"años";
*/