'use strict';
// MODIFICADO 14/7/2018 AGREGAR VERSION
//para que se conecte a la base de datos de mongo, necesito de mongoose
const ParametrosModel = require('./sistema.model');

module.exports.registrar = function(req, res){

    let nuevoParametro = new ParametrosModel({

        Periodo : req.body.Periodo,
        MaxHorasxCuatri : req.body.MaxHorasxCuatri,
        PorcentajeBecaxHoraT : req.body.PorcentajeBecaxHoraT,

        
    });

    nuevoParametro.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el parametro, ha ocurrido un error' + error});
        }else{
            res.json({success : true, msg : 'El parametro se registró con éxito'});
        }

    });

};


