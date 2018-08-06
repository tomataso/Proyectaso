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

            aModificar.addEventListener('click', ftnMostrarCliente); //funcion buscar_por_idß
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

function llenarDatosFormulario(){ //**** V I S T O *****  es la de buscar_por_id
        
    let botonRegistrar = document.querySelector('#btnRegistrarCliente');
    // let botonActualizarCliente = document.querySelector('#btnActualizarCliente');
    // botonRegEstud.hidden = true;
    // botonActualizarEstudiante.hidden = false;

    if (botonRegistrar != undefined) {
        botonRegistrar.hidden = true;
    }

    // if (botonActualizarCliente != undefined) {
    //     botonActualizarCliente.hidden = false;
    // }

    //Blinding    
    let _id =  this.dataset._id;// se obtiene el id del usuario seleccionado
    let usuario = obtenerPersonaPorId(_id); // * * * funcion obtenerPersonaPorId se debe crear en el servicio, porque va a ser la petición 
//if usuario is not null
// ajax obtenerPaginaRegistro
    // obtenerPagina ('estudiante/indexRegEstud.html');
    obtenerPagina ('cliente/cliente_mostrar.html');
    
    setTimeout(function (){

        inputNombre.value =  usuario['Nombre'];
        inputApellido.value = usuario['Apellido'];
        inputDireccion.value = usuario['Direccion'];
        inputTelefono.value = usuario['Telefono'];
        inputEmail.value = usuario['Correo'];
        inputCedula.value = usuario['Cedula'];
        inputCarrera.value = usuario['Carrera'];
        inputMaterias.value = usuario['Materias'];
        inputEmergNombre.value = usuario['NombreEmergencia'];
        inputEmergApellido.value = usuario['ApellidoEmergencia'];
        inputEmergTelefono.value = usuario['TelefonoEmergencia'];   
        // nunca se muestra la contraseña

        inputNombreCliente.value =  usuario['NombreCliente'];;
        inputCedulaCliente.value =  usuario['CedulaCliente'];;
        inputProvincia.value =  usuario['Provincia'];;
        inputCanton.value =  usuario['Canton'];;
        inputDistrito.value =  usuario['Distrito'];;
        inputPrimerNombre.value =  usuario['PrimerNombre'];;
        inputPrimerApellido.value =  usuario['PrimerApellido'];;
        inputTelefonoCliente.value =  usuario['TelefonoCliente'];;
        inputCorreo.value =  usuario['Correo'];;
        inputUbicacion.value =  usuario['Ubicacion'];;
        
            
        // imagen.src = usuario['foto']; //es un elemento tipo img, por eso es con src y no con value
        inputId.value =  usuario['_id'];
      
      }, 100);
    
};

function buscar_por_id(){
    let _id = this.dataset._id;
    // let usuario = obtenerPersonaPorId(_id);

    // // console.log(usuario);
}



