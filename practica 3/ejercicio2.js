function verificarUsuario (usuario){
    //retornar una promesa
    return new Promise((resolve, reject) =>
        {
            if (usuario === "admin"){
                resolve("Bienvenido, admin");
                } else {
                    reject("Usuario no encontrado");
                    }
                    }
                    );
}

//usar then y cath para menejar el resultado
verificarUsuario("admin")
    .then(res => console.log(res)) // esperado: acceso concedido
    .catch(err => console.error(err)); // no se ejecuta en este caso

verificarUsuario("ivan")
    .then(res => console.log(res)) // no se ejecuta
    .catch(err=> console.error(err)); // esperado: usuario no encontrado
