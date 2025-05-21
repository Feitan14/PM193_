const personas = [
    {nombre: "ana", edad: 22},
    {nombre: "luis", edad: 35},
    {nombre: "maria", edad: 28},
]

// usaremos find para buscar un objeto en el arreglo
const Pluis = personas.find(p =>p.nombre.toLowerCase() === "luis");
console.log("persona encontrada: ",Pluis);

// usar foreach para imprimir el dato de cada persona con su edad
personas.forEach(p =>{
    console.log(`la persona: ${p.nombre} tiene: ${p.edad}`);
});
// usaremos reduce para sumar las edades de todas las personas
const sumaEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log("la suma de las edades es: ",sumaEdades);