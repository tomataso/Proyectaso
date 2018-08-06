'use strict';
//para que se conecte a la base de datos de mongo, necesito de mongoose
const estudModel = require('./estud.model');

module.exports.registrar = function(req, res){
    let nuevoEstud = new estudModel({
        Nombre : req.body.Nombre,
        Apellido : req.body.Apellido,
        Direccion : req.body.Direccion,
        Telefono :  req.body.Telefono,
        Correo :  req.body.Correo,
        Cedula : req.body.Cedula,
        Carrera : req.body.Carrera,
        Materias :  req.body.Materias,
        NombreEmergencia : req.body.NombreEmergencia,
        ApellidoEmergencia : req.body.ApellidoEmergencia,
        TelefonoEmergencia : req.body.TelefonoEmergencia,
        Contrasenna : req.body.Contrasenna,
        TipoUsuario: 3
    });

    nuevoEstud.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el estudiante, ha ocurrido un error' + error});
        }else{
            res.json({success : true, msg : 'El estudiante se registró con éxito'});
        }

    });
};

module.exports.mostrar = function(req, res){ 

    estudModel.find().then(
        function(estudiantes){
            res.send(estudiantes);
    });        

};

// * * * inicio: videos de Pabs * * * Modificar (parte 1, 2, 3), nodejs * * *
module.exports.buscar_usuario_id = function (req, res) { 
    estudModel.findById(req.body._id).then(        
        function (user, err) {
             if (err) {
                 res.json({ success: false, msg: handleError(err) });
             } else {
                res.json({ success: true, usuario: user});
            }
        });
};

module.exports.actualizar = function (req, res) {  // modificar_usuario en lugar de actualizar    
    estudModel.findByIdAndUpdate(req.body._id, { $set: req.body },
        function (err, user) {
            if (err) {
                res.json({ success: false, msg: 'El usuario no se ha podido modificar.' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'Usuario modificado correctamente.' + res });
            }
        });
};

module.exports.borrar = function (req, res) { // maCo: aun no he visto el video
    estudModel.findByIdAndDelete(req.body._id,
        function (err, user) {
            if (err) {
                res.json({ success: false, msg: 'No se ha borrado el usuario.' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'El usuario se ha eliminado correctamente.' + res });
            }
        });
};

// * * * fin: videos de Pabs * * * Modificar (parte 1, 2, 3), nodejs * * *





/*
module.exports.mostrar = function(req, res){ 

    estudModel.find({}, function(error, estudiantes){
        let arrayEstud = [];

        estudiantes.forEach(function(estud){
            arrayEstud.push(estud);
        });

        if(error){
            res.json({success : false, msg : 'Ha ocurrido un error' + error});
        }else{
            res.json({success: true, estudiantes: arrayEstud });
        }
    });

};
*/