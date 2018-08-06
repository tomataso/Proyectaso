'use strict';
let tablaClientes;
let inputBuscarCliente;

function initClientes(){
    inputBuscarCliente = document.querySelector('#inputBuscarCliente');
    tablaClientes = document.querySelector('#tblClientes');

    inputBuscarCliente.addEventListener('keyup' , function(){ftnFiltrarListaClientes()});
}

function ListarClientes(){
    let ListaCliente = obtenerListaClientes();
    let tbody = document.querySelector('#tblClientes tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < ListaCliente.length; i++){
        
        if(ListaCliente[i]['desactivado']){
            continue;
        } else { 
        
            let fila = tbody.insertRow();
            let celdaNombreEmpresa = fila.insertCell();
            let celdaNombreContacto = fila.insertCell();
            let celdaTelefonoContacto = fila.insertCell();
            let celdaCorreoContacto = fila.insertCell();
            let celdaEstado = fila.insertCell();// copiar esto
            let cConfiguracion = fila.insertCell();

            celdaNombreEmpresa.innerHTML = ListaCliente[i]['Nombre'];
            celdaNombreContacto.innerHTML = ListaCliente[i]['PrimerNombre'] + " " + ListaCliente[i]['PrimerApellido']  ;
            celdaTelefonoContacto.innerHTML = ListaCliente[i]['Telefono'];
            celdaCorreoContacto.innerHTML = ListaCliente[i]['Correo'];

            // validación para mostrar el estado del usuario en la tabla. Copiar esto
            if (ListaCliente[i]['Desactivado'] == true) {
                celdaEstado.innerHTML = "Activo";
            } else if(ListaCliente[i]['Desactivado'] == false) {
                celdaEstado.innerHTML = "Inactivo";
            }
           

            //Íconos para editar
            let aModificar = document.createElement('a'); // * * * agregar todos estos * * *
            aModificar.classList.add('fas');
            aModificar.classList.add('fa-eye');
            aModificar.dataset._id =  ListaCliente[i]['_id']; 

            // modificar estado del cliente. Copiar esto
            let btnModificarEstado = document.createElement('button'); 
            btnModificarEstado.dataset._id =  ListaCliente[i]['_id']; 

            // validación para mostrar el nombre del botón según el estado de usuario. Copiar esto
            if (ListaCliente[i]['Desactivado'] == true) {
                btnModificarEstado.innerHTML = 'Inactivar';
            } else if(ListaCliente[i]['Desactivado'] == false) {
                btnModificarEstado.innerHTML = 'Activar';
            }
            
            // llamado para la función modificar estado del cliente. Copiar esto
            btnModificarEstado.addEventListener('click', function(){
                let estado = ListaCliente[i]['Desactivado'];
                if(estado == true ){
                    estado = false;
                }else if(estado == false){
                    estado = true;
                }
                actualizarEstadoCliente(ListaCliente[i], estado);
                ListarClientes();
            });

            let aBorrar = document.createElement('a');
            aBorrar.classList.add('fas');
            aBorrar.classList.add('fa-trash'); 
            aBorrar.dataset._id =  ListaCliente[i]['_id'];

            aModificar.addEventListener('click', llenarDatosFormulario); //funcion buscar_por_idß
            aBorrar.addEventListener('click', ftnEliminarCliente);

            cConfiguracion.appendChild(btnModificarEstado);
            cConfiguracion.appendChild(aModificar);
            cConfiguracion.appendChild(aBorrar);

        }
    }

};


function ftnMostrarCliente(){
    let id = this.name;
    // window.location.replace('../../html/cliente/cliente_mostrar.html?id' + id);
    obtenerPagina('cliente/cliente_mostrar.html');
};

function ftnEliminarCliente(){
	let cliente = [this.name,true];
    desactivarCliente(cliente);
    swal({
        type : 'success',
        title : 'Eliminación exitosa',
        text: 'El cliente ha sido eliminado adecuadamente',
        confirmButtonText : 'Entendido'
    });
    ListaCliente();
};

//AUN FALTA INCOORPORAR ESTA FUNCION
// function llenarDatosFormulario(){
//     botonRegistrar.hidden = true;
//     botonActualizar.hidden = false;
    
//     idPersonaSeleccionada =  this.dataset._id;// se obtiene el id del usuario seleccionado
    
//     let usuario = obtenerPersonaPorId(idPersonaSeleccionada);

//     inputNombre.value =  usuario['nombre_completo'];
//     inputEmail.value = usuario['correo'];
//     inputTelefono.value = usuario['telefono'];
//     inputEdad.value = usuario['edad'];

//     imagen.src = usuario['foto'];

// };



function  ftnFiltrarListaClientes (){

    let criterioBusqueda = inputBuscarCliente.value.toUpperCase();
    let filasClientes = tablaClientes.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasClientes.length; i++) {    
        datosFila = filasClientes[i];
        datos = datosFila.getElementsByTagName('td');
        coincide = false;

        for (let j = 0; j < datos.length; j++) {
            valor = datos[j].innerHTML.toUpperCase();

            if(valor.includes(criterioBusqueda)){
                coincide = true;
            } 
        }
        if(coincide){
            datosFila.classList.remove('esconder');
        } else {
            datosFila.classList.add('esconder');
        }
    }

   
};

function buscar_por_id(){
    let _id = this.dataset._id;
    // let usuario = obtenerPersonaPorId(_id);

    // // console.log(usuario);
}



