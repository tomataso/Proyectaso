'use strict';
let mongoose = require('mongoose');

let MensajeSchema = new mongoose.Schema({

    Fecha : {type : String, required : true},
    UsuarioEmisor : {type : String, required : true},
    UsuarioReceptor : {type : String, required : true},
    Asunto : {type : String,  required: true},
    Cuerpo : {type : String, required : true},

    
});

module.exports = mongoose.model('Mensaje', MensajeSchema);