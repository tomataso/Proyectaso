
'use srticit';
let inputBusqueda;
let tablaTitulos;

function ProfesorAsignarTituloInit(){
 tablaTitulos = document.querySelector('#tblTitulos');
 inputBusqueda = document.querySelector('#inputBusqueda');

inputBusqueda.addEventListener('keyup' , function(){ftnFiltrarListaTitulos()});

ListarTitulos();
}



function ListarTitulos(){
  
    let listaDatosTitulo = obtenerListaTitulos();

    let tbody = document.querySelector('#tblTitulos tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaDatosTitulo.length; i++){
        
        let fila = tbody.insertRow();
        let celdaCedula = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let btns = fila.insertCell();

        let btnAsignar = document.createElement('input');
        btnAsignar.type = 'button';
        btnAsignar.value = 'Asignar';
        btnAsignar.name = listaDatosTitulo[i]['_id'];
        btnAsignar.classList.add('btn-list');
        btnAsignar.addEventListener('click', function(){

        

            let pDatosTitulo = [listaDatosTitulo[i]['codigoTituloAcademico'],listaDatosTitulo[i]['nombreTituloAcademico'],listaDatosTitulo[i]['_id'] ];
            obtenerDatosEntrenador(pDatosTitulo);

        });

        celdaCedula.innerHTML = listaDatosTitulo[i]['codigoTituloAcademico'];
        celdaNombre.innerHTML = listaDatosTitulo[i]['nombreTituloAcademico'] ;
        btns.appendChild(btnAsignar);
    }

};

function obtenerIdProfesor() {
    let paginaUrl = window.location.href;
    let locacion = paginaUrl.lastIndexOf("?") + 3;
    let id = paginaUrl.slice(locacion,paginaUrl.lenght); 
 
    return id;
 }; 






function obtenerDatosEntrenador(pDatosTitulo){

    let infoAsignarTituloP =[];

    let idmlabProfesor = obtenerIdProfesor();
    let ncodigoTitulo = pDatosTitulo[0];    
    let nTitulo = pDatosTitulo[1] ;

   // let idEntrenador = pDatos[2];
   
    

   infoAsignarTituloP.push(idmlabProfesor,ncodigoTitulo,nTitulo);
   agregarGradoAcademicoProfesor(infoAsignarTituloP);
    

    swal({
        type : 'success',
        title : 'Asignación exitosa',
        text: 'El titulo adecuadamente',
        confirmButtonText : 'Entendido'
    });
    

};

function  ftnFiltrarListaTitulos (){

    let criterioBusqueda = inputBusqueda.value.toUpperCase();
    let filasPokemon = tablaPokemon.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasPokemon.length; i++) {    
        datosFila = filasPokemon[i];
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
