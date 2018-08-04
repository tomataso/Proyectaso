
'use srticit';
let inputBusqueda;
let tablaCursosI;

function ProfesorAsignarTituloInit(){
    
    tablaCursosI = document.querySelector('#tblCursosI');
 inputBusqueda = document.querySelector('#inputBusqueda');

inputBusqueda.addEventListener('keyup' , function(){ftnFiltrarListaCursosI()});

ListarCursosI();
}



function ListarCursosI(){
  
    let listaDatosCursosI = obtenerListaCursosI();

    let tbody = document.querySelector('#tblCursosI tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaDatosCursosI.length; i++){
        
        let fila = tbody.insertRow();
        let celdaCedula = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let btns = fila.insertCell();

        let btnAsignar = document.createElement('input');
        btnAsignar.type = 'button';
        btnAsignar.value = 'Asignar';
        btnAsignar.name = listaDatosCursosI[i]['_id'];
        btnAsignar.classList.add('btn-list');
        btnAsignar.addEventListener('click', function(){

        

            let pDatosCursosI = [listaDatosCursosI[i]['codigoCursoI'],listaDatosCursosI[i]['nombreCursoI'],listaDatosCursosI[i]['_id'] ];
            obtenerDatosEntrenador(pDatosCursosI);

        });

        celdaCedula.innerHTML = listaDatosCursosI[i]['codigoCursoI'];
        celdaNombre.innerHTML = listaDatosCursosI[i]['nombreCursoI'] ;
        btns.appendChild(btnAsignar);
    }

};

function obtenerIdProfesor() {
    let paginaUrl = window.location.href;
    let locacion = paginaUrl.lastIndexOf("?") + 3;
    let id = paginaUrl.slice(locacion,paginaUrl.lenght); 
 
    return id;
 }; 






function obtenerDatosEntrenador(pDatosCursosI){

    let infoAsignarCursoI =[];

    let idmlabProfesor = obtenerIdProfesor();
    let ncodigoCursoI = pDatosCursosI[0];    
    let nCurso = pDatosCursosI[1] ;

   // let idEntrenador = pDatos[2];
   
    

   infoAsignarCursoI.push(idmlabProfesor,ncodigoCursoI,nCurso);
   agregarCursosImpartidosProfesor(infoAsignarCursoI);
    

    swal({
        type : 'success',
        title : 'Asignación exitosa',
        text: 'El Curso Impartido a sido agregado adecuadamente',
        confirmButtonText : 'Entendido'
    });
    

};

function  ftnFiltrarListaCursosI (){

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
