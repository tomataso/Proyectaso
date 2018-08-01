'use srticit';
// MODIFICADO 13/7/2018 AGREGAR VERSION
// variables globales----------------------------------------
const inputBusqueda = document.querySelector('#inputBusqueda');
const tablaMensajesRecibidos = document.querySelector('#tblMensajesRecibidos');

//listeners--------------------------------------------------
inputBusqueda.addEventListener('keyup' , function(){filtrarListaMensajesRecibidos()});

//loads------------------------------------------------------
window.onload = function(){
    ListarMensajesRecibidos();
};


//funciones--------------------------------------------------
function ListarMensajesRecibidos(){
    let listaMensajesRecibidos = obtenerListaMensajesRecibidos();

    let tbody = document.querySelector('#tblMensajesRecibidos tbody');
    tbody.innerHTML = '';


    for(let i = 0; i < listaMensajesRecibidos.length; i++){
        
        
            let fila = tbody.insertRow();
            let celdaFecha = fila.insertCell();
            let celdaUsuarioEmisor = fila.insertCell();
            let celdaAsunto = fila.insertCell();
            

            let btns = fila.insertCell();

// VER ESTO
            let btnVer = document.createElement('input');
            btnVer.type = 'button';
            btnVer.value = 'Ver';
            btnVer.name = listaMensajesRecibidos[i]['_id'];
            btnVer.classList.add('btn-list');



            celdaFecha.innerHTML = listaMensajesRecibidos[i]['Fecha'];
            celdaUsuarioEmisor.innerHTML = listaMensajesRecibidos[i]['UsuarioEmisor'];
            celdaAsunto.innerHTML = listaMensajesRecibidos[i]['Asunto'];
 

     
      
            btns.appendChild(btnVer);
           
        
    }

};




function filtrarListaMensajesRecibidos(){
    let filtro = $("#txtFiltro").val();
    let listaMensajesRecibidos = obtenerListaMensajesRecibidos();
    filtro = filtro.toLowerCase();

    let listaFiltrada = [];

    for(let i = 0; i < listaMensajesRecibidos.length; i++){
        let usuario = listaMensajesRecibidos[i].UsuarioEmisor.toLowerCase() ;
            
        if(usuario.includes(filtro)){
            listaFiltrada.push(listaMensajesRecibidos[i]);
        }
    }
};
