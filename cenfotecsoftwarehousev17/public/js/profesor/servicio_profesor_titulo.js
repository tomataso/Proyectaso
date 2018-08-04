function agregarTitulo(infoAsignarTituloP){
   
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/agregarTitulo',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            _id : infoAsignarTituloP[0],
            codigoTituloAcademico : infoAsignarTituloP[1],
            nombreTituloAcademico : infoAsignarTituloP[2],
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}