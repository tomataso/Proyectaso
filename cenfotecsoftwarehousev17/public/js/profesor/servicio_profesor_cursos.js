function agregarCursosImpartidosProfesor(infoAsignarCursoI){
   
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/agregarCursoI',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            _id : infoAsignarCursoI[0],
            codigoCursoI : infoAsignarCursoI[1],
            nombreCursoI : infoAsignarCursoI[2],
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}