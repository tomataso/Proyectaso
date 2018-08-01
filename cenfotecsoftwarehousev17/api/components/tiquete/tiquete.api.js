'use strict';
//para que se conecte a la base de datos de mongo, necesito de mongoose
const tiqueteModel = require('./tiquete.model');

module.exports.registrarTiquete = function(req, res){
    let nuevoTiquete = new tiqueteModel({
        Cedula : req.body.Cedula,
        codigo_tiquete : req.body.codigo_tiquete,
        codigo_proyecto : req.body.codigo_proyecto,
        Proyectos : req.body.sltProyectos,
        descripcion : req.body.descripcion,
        fecha : req.body.fecha,
        imagen : req.body.imagen,
        usuarioId : req.body.usuarioId,
       
    });

    nuevoTiquete.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el tiquete, ha ocurrido un error' + error});
        }else{
            res.json({success : true, msg : 'El tiquete se registró con éxito'});
        }

    });

};

module.exports.listarTiquete = function(req, res){
    tiqueteModel.find().then(
        function(tiquetes){
            res.send(tiquetes);
        });
};

module.exports.buscarTiquete = function(req, res){
    tiqueteModel.find(req.body.idTiquete).then(
        function(tiquete){
            res.send(tiquete);
    });
};

module.exports.buscar_tiquete_id = function (req, res) {
    tiqueteModel.find({ usuarioId: req.body.id }).then(
        function (tiquete) {
            res.send(tiquete);
    });
};