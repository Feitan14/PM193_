const { restar } = require('./utils');

//pruebas de la funcion
console.log("5 - 3 =", restar(5, 3)); // 2
console.log("10 - 7 =", restar(10, 7)); // 3
console.log("0 - 4 =", restar(0, 4)); // -4
console.log("-2 - (-3) =", restar(-2, -3)); // 1
console.log("100 - 50 =", restar(100, 50)); //50