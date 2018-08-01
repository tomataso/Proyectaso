'use strict';
let mongoose = require('mongoose');

let TiqueteSchema = new mongoose.Schema({
    Cedula : {type : String, required : true},
    codigo_tiquete : {type : String, required: true},
    codigo_proyecto : {type : String, required: true},
    Proyectos : {type : String, required: true},
    descripcion : {type : String, required: true},
    fecha : {type : String, required: true},
    imagen : {type : String, require: true},
    usuarioId : {type: String, require: true},
});

module.exports = mongoose.model('Tiquete', TiqueteSchema);