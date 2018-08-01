'use strict';

function obtenerListaTiquetes(){
    let lista = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listarTiquetes',
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

function registrarTiquete(pTiquete){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarTiquete',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            Cedula : pTiquete[0],
            codigo_tiquete : pTiquete[1],
            codigo_proyecto: pTiquete[2],
            sltProyectos: pTiquete[3],
            descripcion : pTiquete[4],
            fecha : pTiquete[5],
            imagen : pTiquete[6],
            usuarioId : pTiquete[7]
        }
      });

    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}


