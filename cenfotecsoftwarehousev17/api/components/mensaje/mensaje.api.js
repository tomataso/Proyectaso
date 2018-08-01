'use strict';

// MODIFICADO 13/7/2018 AGREGAR VERSION


//para que se conecte a la base de datos de mongo, necesito de mongoose
const MensajeModel = require('./mensaje.model');


module.exports.listar = function(req, res){
    MensajeModel.find().then(
        function(mensajes){
            res.send(mensajes);
        });
};


module.exports.buscarMensaje = function(req, res){
    MensajeModel.find(req.body.idProyecto).then(
        function(mensaje){
            res.send(mensaje);
        });
};

