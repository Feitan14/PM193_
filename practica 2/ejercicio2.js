let productos = [
    {nombre: "laptop", precio: 12000},
    {nombre: "mause", precio: 250},
    {nombre: "teclado", precio: 750},
    {nombre: "monitor", precio: 3000},
];
// filtraremos los productos que tienen un precio mayor a 1000

let productorM1000 = productos.filter(p => p.precio >=1000)

//obtendremos un array con los productos que tienen un precio mayor o igual a 1000
let nombre = productorM1000.map(p =>p.nombre);
console.log(nombre); //["laptop", "monitor"]