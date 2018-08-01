
// MODIFICADO 14/7/2018 AGREGAR VERSION

'use strict';


function registrarParametro(painfoParametro){
    let lista = [];
   
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarParametros',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{


            Periodo: painfoParametro[0],
            MaxHorasxCuatri : painfoParametro[1],
            PorcentajeBecaxHoraT : painfoParametro[2]
         
            
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



