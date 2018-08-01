'use srticit';

// variables globales----------------------------------------
const inputBusqueda = document.querySelector('#inputBusqueda');
const tablaTiquetes = document.querySelector('#tblTiquetes');

//listeners--------------------------------------------------
inputBusqueda.addEventListener('keyup' , function(){FiltrarListaTiquetes()});

//loads------------------------------------------------------
window.onload = function(){
    ListarTiquetes();
};

function ListarTiquetes(){
    // borrar esta linea cuando el sistema esté montado
    sessionStorage.setItem("UsuarioAutenticado", JSON.stringify({"_id":"5b4ae5c6ac267b4a0cc3a1f1","Nombre":"maria","Cedula":"456123","Provincia":"San Jose","Distrito":"San Jose","Canton":"montes de oca","Ubicacion":"san pedro","PrimerNombre":"Juan Carlos","PrimerApellido":"González","Telefono":"88668921","Correo":"123456","Desactivado":false,"Contrasenna":"mZcE0","TipoUsuario":2,}));
    let ListaTiquete = obtenerTiquetePorId(getUsuarioAutenticado()._id);
    console.log("lista tiquetes");
    console.log(ListaTiquete);
    let tbody = document.querySelector('#tblTiquetes tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < ListaTiquete.length; i++){
        
        if(ListaTiquete[i]['desactivado']){
            continue;
        } else { 
        
            let fila = tbody.insertRow();
            let celdaCodigoTiquete = fila.insertCell();
            let celdaCedulaJuridica = fila.insertCell();
            let celdaNombreProyecto = fila.insertCell();
            let celdaFecha = fila.insertCell();
            let btns = fila.insertCell();
    

            let btnVer = document.createElement('input');
            btnVer.type = 'button';
            btnVer.value = 'Ver';
            btnVer.name = ListaTiquete[i]['_id'];
            btnVer.classList.add('btn-list');
            // btnVer.addEventListener('click', ftnMostrarCliente);

            let btnEliminar = document.createElement('input');
            btnEliminar.type = 'button';
            btnEliminar.value = 'Eliminar';
            btnEliminar.name = ListaTiquete[i]['_id'];
            btnEliminar.classList.add('btn-list');
            // btnEliminar.addEventListener('click', ftnEliminarProyecto);

            celdaCodigoTiquete.innerHTML = ListaTiquete[i]['codigo_tiquete'];
            celdaCedulaJuridica.innerHTML = ListaTiquete[i]['Cedula'];
            celdaNombreProyecto.innerHTML = ListaTiquete[i]['nombreProyecto'];
            celdaFecha.innerHTML = ListaTiquete[i]['fecha'];
        
            btns.appendChild(btnVer);
            btns.appendChild(btnEliminar);
        }
    }

};

function  FiltrarListaTiquetes (){

    let criterioBusqueda = inputBusqueda.value.toUpperCase();
    let filasTiquetes = tablaTiquetes.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasTiquetes.length; i++) {    
        datosFila = filasTiquetes[i];
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