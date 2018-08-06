'use strict';
// let listaEstud = [];

function obtenerListaEstud (){
    let lista = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/mostrarEstud',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
    
    return lista;
}


function registrarEstud(paInfoEstud){
    console.log(paInfoEstud);
    let resultado = false;
    let contrasennaAutogenerada = ftnGeneradorContrasenna();
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarEstud',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            // _id : _pid,
			Nombre : paInfoEstud[0],
	        Apellido : paInfoEstud[1],
	        Direccion : paInfoEstud[2],
	        Telefono :  paInfoEstud[3],
	        Correo :  paInfoEstud[4],
	        Cedula : paInfoEstud[5],
	       	Carrera : paInfoEstud[6],
	        Materias :  paInfoEstud[7],
	        NombreEmergencia :  paInfoEstud[8],
	        ApellidoEmergencia :  paInfoEstud[9],
            TelefonoEmergencia :  paInfoEstud[10],
            // Acciones :  paInfoEstud[11],
            Contrasenna: contrasennaAutogenerada,
    
        }
      });
    
      peticion.done(function(response){
          if (response.success==true){
              //respuesta = response;
              resultado = true
          }
          else{
            //respuesta = response;
            alert("Error");
            console.log(response);
          }
            
      });
    
      peticion.fail(function(response){
          alert("Error");
       console.log(response);
      });

      return resultado;
}
// * * * inicio: videos de Pabs * * * Modificar (parte 1, 2, 3), nodejs * * *
function obtenerPersonaPorId(pid, callback){  //pid: parametro id
    let usuario = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/buscar_usuario_id', // url lo copio del route
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{ //asegurarme de que en el user.api.js 
            _id : pid
        }
      });
    
      peticion.done(function(response){
        usuario = response.usuario;
        if (callback) {
            callback();
        }
      });
    
      peticion.fail(function( jqXHR, textStatus ){
          alert('error');
         console.log(jqXHR);
         console.log(textStatus);
      });

      
      
      return usuario;
};

function actualizarPersona(paInfoEstud){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/actualizar_usuario',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            // _id : _pid,
            Nombre : paInfoEstud[0],
	        Apellido : paInfoEstud[1],
	        Direccion : paInfoEstud[2],
	        Telefono :  paInfoEstud[3],
	        Correo :  paInfoEstud[4],
	        Cedula : paInfoEstud[5],
	       	Carrera : paInfoEstud[6],
	        Materias :  paInfoEstud[7],
	        NombreEmergencia :  paInfoEstud[8],
	        ApellidoEmergencia :  paInfoEstud[9],
            TelefonoEmergencia :  paInfoEstud[10],
            // Contrasenna: contrasennaAutogenerada,
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
};

function borrarPersonaPorId(pid){ // maCo: no venía en video
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/borrar_usuario',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            _id : pid
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}
// * * * fin: videos de Pabs * * * Modificar (parte 1, 2, 3), nodejs * * *

function ftnGeneradorContrasenna() {

    let length = 5,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

