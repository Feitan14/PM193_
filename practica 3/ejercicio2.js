function verificarUsuario (usuario){
    //retornar una promesa

}

//usar then y cath para menejar el resultado
verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.error(err));

verificarUsuario("ivan")
    .then(res => console.log(res))
    .catch(err=> console.error(err));
