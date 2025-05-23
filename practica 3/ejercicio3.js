function simularPeticion(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve("Datos recibidos correctamente")
            }, 5000); // 5 segundos xd
            });
}

//funcion async que espera el resultado

async function obtenerDatos(){
    try {
        const resultado = await simularPeticionAPI();
        console.log(resultado);
    } catch(error){
        console.error("Error al obtener datos: ",error);
    }
}
// usar la funcion
obtenerDatos();