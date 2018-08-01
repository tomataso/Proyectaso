'use srticit';

// variables globales----------------------------------------
const inputBusqueda = document.querySelector('#inputBusqueda');
const tablaMensajesRecibidos = document.querySelector('#tblMensajesEnviadoss');

//listeners--------------------------------------------------
inputBusqueda.addEventListener('keyup' , function(){filtrarListaMensajesEnviados()});

//loads------------------------------------------------------
window.onload = function(){
    ListarMensajesEnviados();
};


//funciones--------------------------------------------------
function ListarMensajesEnviados(){
    let listaMensajesEnviados = obtenerListaMensajesEnviados();

    let tbody = document.querySelector('#tblMensajesEnviados tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaMensajesEnviados.length; i++){
        
        
            let fila = tbody.insertRow();
            let celdaFecha = fila.insertCell();
            let celdaUsuarioReceptor = fila.insertCell();
            let celdaAsunto = fila.insertCell();
            

            let btns = fila.insertCell();

            //VER ESTOOOOO
            let btnVer = document.createElement('input');
            btnVer.type = 'button';
            btnVer.value = 'Ver';
            btnVer.name = listaMensajesEnviados[i]['_id'];
            btnVer.classList.add('btn-list');



            celdaFecha.innerHTML = listaMensajesEnviados[i]['Fecha'];
            celdaUsuarioReceptor.innerHTML = listaMensajesEnviados[i]['UsuarioReceptor'];
            celdaAsunto.innerHTML = listaMensajesEnviados[i]['Asunto'];
 

     
      
            btns.appendChild(btnVer);
           
        
    }

};


function filtrarListaMensajesEnviados(){
    let filtro = $("#txtFiltro").val();
    let listaMensajesEnviados = obtenerListaMensajesEnviados();
    filtro = filtro.toLowerCase();

    let listaFiltrada = [];

    for(let i = 0; i < listaMensajesEnviados.length; i++){
        let usuario = listaMensajesEnviados[i].UsuarioReceptor.toLowerCase() ;
            
        if(usuario.includes(filtro)){
            listaFiltrada.push(listaMensajesEnviados[i]);
        }
    }
};
