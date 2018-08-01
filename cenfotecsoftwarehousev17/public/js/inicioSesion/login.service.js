function getListaUsuarios() {
    let listaClientes = obtenerListaClientes();
    let listaProfesores = obtenerListaProfesores();
    let listaEstudiantes = obtenerListaEstud();
    let listaUsuarios = [];

    for (let i = 0; i < listaClientes.length; i++) {
        listaUsuarios.push(listaClientes[i]);
    }
 
    for (let i = 0; i < listaProfesores.length; i++) {
        listaUsuarios.push(listaProfesores[i]);
    }


    for (let i = 0; i < listaEstudiantes.length; i++) {
        listaUsuarios.push(listaEstudiantes[i]);
    }    

    return listaUsuarios;
}